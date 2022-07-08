import {
  GlobalTypes,
  UserContentItemsQuery,
  UserArchivesQuery,
  ContentGroupsQuery,
  UserWaitlistQuery
} from '@thoughtindustries/content';

type RequiredContentGroupsQuery = Required<ContentGroupsQuery>;
type UserContentGroup = RequiredContentGroupsQuery['UserContentGroups'][0];

type RequiredUserContentItemsQuery = Required<UserContentItemsQuery>;
type UserContentItem = RequiredUserContentItemsQuery['UserContentItems'][0];
const mockUserContentItemFactory = (
  id: string,
  kind: GlobalTypes.ContentKind,
  isCompleted?: boolean
): UserContentItem => ({
  title: `${kind} title`,
  kind,
  id,
  slug: `${kind}-${id}-slug`,
  contentTypeLabel: `${kind}Label`,
  availabilityStatus: isCompleted ? 'completed' : 'started',
  courseStartDate: '2022-04-22T11:57:37.534Z',
  courseEndDate: '2023-04-23T05:59:59.999Z',
  coursePresold: false,
  description: `${kind} description`,
  displayDate: '2022-04-22T11:57:37.534Z',
  authors: ['Test author'],
  source: 'Test source',
  timeZone: 'America/Chicago',
  courseGracePeriodEnded: false,
  currentUserMayReschedule: false,
  hasChildren: false,
  hideCourseDescription: false,
  isActive: true,
  waitlistingEnabled: false,
  waitlistingTriggered: false
});

type RequiredUserArchivesQuery = Required<UserArchivesQuery>;
type UserArchivedItem = RequiredUserArchivesQuery['UserArchives'][0];
const mockUserArchivedItemFactory = (
  id: string,
  kind: GlobalTypes.ContentKind
): UserArchivedItem => ({
  id,
  name: `${kind} name`,
  resourceType: kind,
  archivedAt: new Date().toISOString(),
  reinstatable: false,
  waitlistActive: false
});

type RequiredUserWaitlistQuery = Required<UserWaitlistQuery>;
type UserWaitlistItem = RequiredUserWaitlistQuery['UserWaitlist'][0];
const mockUserWaitlistItemFactory = (
  id: string,
  kind: GlobalTypes.ContentKind
): UserWaitlistItem => ({
  contentTypeLabel: `${kind}Label`,
  displayCourse: `display-course-${id}`,
  displayCourseSlug: `display-course-${kind}-${id}-slug`,
  kind,
  id,
  slug: `${kind}-${id}-slug`,
  title: `${kind} title`
});

const toUserArchivedItem = ({ id, title, kind }: UserContentItem): UserArchivedItem => ({
  id: `archive-${id}`,
  name: title,
  resourceType: kind,
  resource: id,
  archivedAt: new Date().toISOString(),
  reinstatable: true,
  waitlistActive: false
});

const toUserContentItem = ({ resource, resourceType }: UserArchivedItem): UserContentItem => ({
  ...mockUserContentItemFactory(resource as string, resourceType as GlobalTypes.ContentKind)
});

export enum UserContentItemTypes {
  MyLearning,
  Event,
  LearningPath,
  Completed
}

export class LearnerAccessRepository {
  private _userContentItems: UserContentItem[];
  private _userArchivedItems: UserArchivedItem[];
  private _userWaitlistItems: UserWaitlistItem[];
  constructor() {
    const myLearningItemInProgress = mockUserContentItemFactory(
      '1',
      GlobalTypes.ContentKind.CourseGroup
    );
    const eventItemInProgress = mockUserContentItemFactory(
      '2',
      GlobalTypes.ContentKind.InPersonEvent
    );
    const learningPathInProgress = mockUserContentItemFactory(
      '3',
      GlobalTypes.ContentKind.LearningPath
    );
    const itemCompleted = mockUserContentItemFactory('4', GlobalTypes.ContentKind.Article, true);
    this._userContentItems = [
      myLearningItemInProgress,
      eventItemInProgress,
      learningPathInProgress,
      itemCompleted
    ];
    this._userArchivedItems = [mockUserArchivedItemFactory('5', GlobalTypes.ContentKind.Article)];
    this._userWaitlistItems = [mockUserWaitlistItemFactory('6', GlobalTypes.ContentKind.Course)];
  }

  private _userContentItemMatcher(type: UserContentItemTypes) {
    return ({ kind, availabilityStatus }: UserContentItem) => {
      switch (type) {
        case UserContentItemTypes.MyLearning:
          return kind === GlobalTypes.ContentKind.CourseGroup;
        case UserContentItemTypes.Event:
          return kind === GlobalTypes.ContentKind.InPersonEvent;
        case UserContentItemTypes.LearningPath:
          return kind === GlobalTypes.ContentKind.LearningPath;
        case UserContentItemTypes.Completed:
          return availabilityStatus === 'completed';
      }
    };
  }

  get myLearningItems() {
    return this._userContentItems.filter(
      this._userContentItemMatcher(UserContentItemTypes.MyLearning)
    );
  }

  get eventItems() {
    return this._userContentItems.filter(this._userContentItemMatcher(UserContentItemTypes.Event));
  }

  get learningPathItems() {
    return this._userContentItems.filter(
      this._userContentItemMatcher(UserContentItemTypes.LearningPath)
    );
  }

  get completedItems() {
    return this._userContentItems.filter(
      this._userContentItemMatcher(UserContentItemTypes.Completed)
    );
  }

  get archivedItems() {
    return this._userArchivedItems;
  }

  get waitlistItems() {
    return this._userWaitlistItems;
  }

  get contentGroups() {
    const results: UserContentGroup[] = [];

    const myLearningItemsCount = this.myLearningItems.length;
    if (myLearningItemsCount) {
      results.push({
        kind: GlobalTypes.ContentGroupKind.ContentItems,
        count: myLearningItemsCount
      });
    }

    const eventItemsCount = this.eventItems.length;
    if (eventItemsCount) {
      results.push({
        kind: GlobalTypes.ContentGroupKind.EventItems,
        count: eventItemsCount
      });
    }

    const learningPathItemsCount = this.learningPathItems.length;
    if (learningPathItemsCount) {
      results.push({
        kind: GlobalTypes.ContentGroupKind.LearningPaths,
        count: learningPathItemsCount
      });
    }

    const completedItemsCount = this.completedItems.length;
    if (completedItemsCount) {
      results.push({
        kind: GlobalTypes.ContentGroupKind.CompletedItems,
        count: completedItemsCount
      });
    }

    const archivedItemsCount = this.archivedItems.length;
    if (archivedItemsCount) {
      results.push({
        kind: GlobalTypes.ContentGroupKind.ArchivedContentItems,
        count: archivedItemsCount
      });
    }

    const waitlistItemsCount = this.waitlistItems.length;
    if (waitlistItemsCount) {
      results.push({
        kind: GlobalTypes.ContentGroupKind.WaitlistedCourses,
        count: waitlistItemsCount
      });
    }

    return results;
  }

  archive(id: string, kind: GlobalTypes.ContentKind) {
    const matchingArchiveableItemIndex = this._userContentItems.findIndex(
      ({ id: existingId, kind: existingKind }) => id === existingId && kind === existingKind
    );
    if (matchingArchiveableItemIndex < 0) {
      return false;
    }
    const itemToArchive = { ...this._userContentItems[matchingArchiveableItemIndex] };
    this._userContentItems.splice(matchingArchiveableItemIndex, 1);
    this._userArchivedItems.push(toUserArchivedItem(itemToArchive));
    return true;
  }

  reinstate(id: string, resourceType: GlobalTypes.ContentKind) {
    const matchingReinstateableItemIndex = this._userArchivedItems.findIndex(
      ({ resource: existingResource, resourceType: existingResourceType }) =>
        id === existingResource && resourceType === existingResourceType
    );
    if (matchingReinstateableItemIndex > -1) {
      const itemToReinstate = { ...this._userArchivedItems[matchingReinstateableItemIndex] };
      this._userArchivedItems.splice(matchingReinstateableItemIndex, 1);
      this._userContentItems.push(toUserContentItem(itemToReinstate));
    }
    return id;
  }

  unenrollWaitlist(id: string) {
    const matchingWaitlistItemIndex = this._userWaitlistItems.findIndex(
      ({ id: existingId }) => id === existingId
    );
    if (matchingWaitlistItemIndex > -1) {
      this._userWaitlistItems.splice(matchingWaitlistItemIndex, 1);
    }
    return true;
  }
}
