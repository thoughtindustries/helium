import { zonedTimeToUtc } from 'date-fns-tz';
import { format } from 'date-fns';
import { i18n as I18n } from 'i18next';
import { ContentItem, HydratedContentItem, AvailabilityStatus } from './types';
import { ContentKind, AlternativePricingType } from '../../graphql/global-types';
import courseRuns from './course-run';
import { DEFAULT_TIMEZONE } from './constants';

/**
 * Hydrate queried content item
 * @param i18n I18n instance
 * @param contentItem Content Item
 * @param customFields Custom fields
 * @returns Hydrated content item
 */
const hydrateContentItem = (
  i18n: I18n,
  contentItem: ContentItem,
  customFields = {}
): HydratedContentItem => {
  const hasUnmetPrerequisites =
    (contentItem.currentUserUnmetCoursePrerequisites || []).length > 0 ||
    (contentItem.currentUserUnmetLearningPathPrerequisites || []).length > 0;

  const isActive =
    !contentItem.coursePresold && !contentItem.courseGracePeriodEnded && !hasUnmetPrerequisites;

  const timeZone = contentItem.timeZone ?? DEFAULT_TIMEZONE;
  const meetingStartDate = contentItem.meetingStartDate
    ? zonedTimeToUtc(contentItem.meetingStartDate, timeZone)
    : undefined;
  const courseStartDate = zonedTimeToUtc(contentItem.courseStartDate, timeZone);
  const courseEndDate = contentItem.courseEndDate
    ? zonedTimeToUtc(contentItem.courseEndDate, timeZone)
    : undefined;
  const courseGracePeriodEndDate = contentItem.courseGracePeriodEndDate
    ? zonedTimeToUtc(contentItem.courseGracePeriodEndDate, timeZone)
    : undefined;

  let hasAvailability, isCompleted, isAvailable, isStarted, isNotStarted, isNotCompleted;
  if (contentItem.availabilityStatus) {
    hasAvailability = true;
    isCompleted = contentItem.availabilityStatus === AvailabilityStatus.Completed;
    isAvailable = contentItem.availabilityStatus === AvailabilityStatus.Available;
    isStarted = contentItem.availabilityStatus === AvailabilityStatus.Started;
    isNotStarted = contentItem.availabilityStatus === AvailabilityStatus.NotStarted;
    isNotCompleted = contentItem.availabilityStatus === AvailabilityStatus.NotCompleted;
  } else {
    hasAvailability = false;
  }

  let kindIsScormOrXApi, locationIsOnline, locationIsInPerson, usesContentAccessText;
  if (
    contentItem.kind === ContentKind.ShareableContentObject ||
    contentItem.kind === ContentKind.XApiObject
  ) {
    kindIsScormOrXApi = true;
  }

  if (
    contentItem.kind &&
    [ContentKind.Webinar, ContentKind.WebinarCourse].includes(contentItem.kind)
  ) {
    locationIsOnline = true;
  }

  if (
    contentItem.kind &&
    [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse].includes(contentItem.kind)
  ) {
    locationIsInPerson = true;
  }

  if (
    contentItem.kind &&
    [ContentKind.WebinarCourse, ContentKind.InPersonEventCourse].includes(contentItem.kind)
  ) {
    usesContentAccessText = true;
  }

  const partialHydratedContentItem = {
    ...contentItem,
    hasUnmetPrerequisites,
    isActive,
    meetingStartDate,
    courseStartDate,
    courseEndDate,
    courseGracePeriodEndDate,
    hasAvailability,
    isCompleted,
    isAvailable,
    isStarted,
    isNotStarted,
    isNotCompleted,
    kindIsScormOrXApi,
    locationIsOnline,
    locationIsInPerson,
    usesContentAccessText
  };

  const callToAction = getCallToAction(i18n, partialHydratedContentItem);

  let href = getHref(partialHydratedContentItem);
  if (Object.keys(customFields).length && href.length > 1) {
    const urlParams = `sessionFields=${encodeURIComponent(
      JSON.stringify(Object.entries(customFields))
    )}`;

    href = `${href}?${urlParams}`;
  }

  let { priceInCents, suggestedRetailPriceInCents } = contentItem;
  if (contentItem.alternativePricingType === AlternativePricingType.Membership) {
    // swap price & suggested retail for display purposes
    const origPriceInCents = priceInCents;
    priceInCents = suggestedRetailPriceInCents;
    suggestedRetailPriceInCents = origPriceInCents;
  }

  return {
    ...partialHydratedContentItem,
    callToAction,
    href,
    priceInCents,
    suggestedRetailPriceInCents
  };
};

type PartialHydratedContentItem = Omit<HydratedContentItem, 'callToAction' | 'href'>;

const getCallToAction = (
  i18n: I18n,
  partialHydratedContentItem: PartialHydratedContentItem
): string => {
  if (
    partialHydratedContentItem.hasAvailability &&
    !partialHydratedContentItem.waitlistingTriggered
  ) {
    if (partialHydratedContentItem.coursePresold) {
      const runs = courseRuns(
        partialHydratedContentItem.kind,
        partialHydratedContentItem.courseStartDate,
        partialHydratedContentItem.courseEndDate,
        partialHydratedContentItem.timeZone
      );

      const runStringPrefix = partialHydratedContentItem.usesContentAccessText
        ? i18n.t('content-access')
        : `${partialHydratedContentItem.contentTypeLabel} ${i18n.t('runs')}`;

      return `${runStringPrefix} ${runs}`;
    } else if (partialHydratedContentItem.courseGracePeriodEnded) {
      return `${i18n.t('course-ended')} ${format(
        (partialHydratedContentItem.courseGracePeriodEndDate ||
          partialHydratedContentItem.courseEndDate) as Date,
        'MMM do YYYY'
      )}`;
    } else if (partialHydratedContentItem.hasUnmetPrerequisites) {
      return i18n.t('course.prerequisites');
    } else if (partialHydratedContentItem.bulkPurchasingEnabled) {
      return i18n.t('course-view-details');
    } else if (partialHydratedContentItem.isCompleted) {
      if (partialHydratedContentItem.kind === ContentKind.LearningPath) {
        return i18n.t('learning-path.view');
      }

      return i18n.t('view-course', {
        contentType: partialHydratedContentItem.contentTypeLabel
      });
    } else if (partialHydratedContentItem.isStarted) {
      if (partialHydratedContentItem.kind === ContentKind.LearningPath) {
        return i18n.t('learning-path.continue');
      }

      return i18n.t('continue-course');
    } else if (partialHydratedContentItem.isNotStarted) {
      if (partialHydratedContentItem.kind === ContentKind.LearningPath) {
        return i18n.t('learning-path.start');
      }

      return i18n.t('start-course', {
        contentType: partialHydratedContentItem.contentTypeLabel
      });
    } else if (partialHydratedContentItem.isNotCompleted) {
      return i18n.t('not-completed-course');
    }

    return i18n.t('course-view-details');
  } else if (
    partialHydratedContentItem.waitlistingTriggered &&
    partialHydratedContentItem.waitlistingEnabled
  ) {
    return i18n.t('join-waitlist');
  }

  return i18n.t('course-view-details');
};

const getHref = (partialHydratedContentItem: PartialHydratedContentItem): string => {
  const itemKind = partialHydratedContentItem.kind;
  const itemSlug = partialHydratedContentItem.slug;

  if (itemKind === ContentKind.Product) {
    return `/products/${itemSlug}`;
  } else if (itemKind === ContentKind.Bundle) {
    return `/bundles/${itemSlug}`;
  } else if (itemKind === ContentKind.PickableGroup) {
    return `/cart-collections/${itemSlug}`;
  } else if (itemKind === ContentKind.DiscountGroup) {
    return `/collections/${itemSlug}`;
  } else if (itemKind === ContentKind.LearningPath && partialHydratedContentItem.isActive) {
    if (
      partialHydratedContentItem.hasAvailability &&
      !partialHydratedContentItem.bulkPurchasingEnabled
    ) {
      return `/learn/learning-path/${itemSlug}`;
    }

    return `/learning-paths/${itemSlug}`;
  }

  if (partialHydratedContentItem.isActive) {
    if (partialHydratedContentItem.hasAvailability) {
      if (itemKind === ContentKind.ShareableContentObject || itemKind === ContentKind.XApiObject) {
        if (partialHydratedContentItem.isAvailable) {
          return `/courses/${itemSlug}`;
        }

        return '#';
      } else if (
        (partialHydratedContentItem.isCompleted || partialHydratedContentItem.isStarted) &&
        !partialHydratedContentItem.bulkPurchasingEnabled
      ) {
        if (itemKind === ContentKind.Webinar) {
          return `/learn/webinars/${partialHydratedContentItem.displayCourse}/redirect`;
        } else if (itemKind === ContentKind.Article) {
          return `/learn/article/${partialHydratedContentItem.displayCourseSlug}`;
        } else if (itemKind === ContentKind.InPersonEvent) {
          return `/learn/event/${partialHydratedContentItem.displayCourseSlug}`;
        } else if (itemKind === ContentKind.Video) {
          return `/learn/video/${partialHydratedContentItem.displayCourseSlug}`;
        }

        return `/learn/course/${partialHydratedContentItem.displayCourseSlug}`;
      } else if (partialHydratedContentItem.isNotStarted) {
        return `/learn/enroll/${partialHydratedContentItem.displayCourse}`;
      }

      return `/courses/${itemSlug}`;
    }

    return `/courses/${itemSlug}`;
  } else if (itemKind === ContentKind.Webinar || itemKind === ContentKind.InPersonEvent) {
    // if the webinar hasn't started or has ended,
    // allow learner to go to webinar detail page to reschedule
    return `/courses/${itemSlug}`;
  }

  return '#';
};

export default hydrateContentItem;
