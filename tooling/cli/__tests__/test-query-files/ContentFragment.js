const { gql } = require('@apollo/client');

const ContentFragmentTest = gql`
  fragment ContentFragmentTest on Content {
    asset
    authors
    availabilityStatus
    canAddToQueue
    contentTypeLabel
    courseGracePeriodEnded
    coursePresold
    courseStartDate
    currentUserMayReschedule
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    description
    displayCourse
    kind
    hasChildren
    hideCourseDescription
    id
    isActive
    priceInCents
    rating
    ribbon {
      color
      contrastColor
      darkerColor
      label
      slug
    }
    slug
    source
    suggestedRetailPriceInCents
    title
    waitlistingEnabled
    waitlistingTriggered
  }
`;

module.exports = { ContentFragmentTest };
