const { gql } = require('@apollo/client');
const { ContentFragment } = require('./ContentFragment');
// Borrowed from https://github.com/thoughtindustries/helium/blob/c1d6910f3d85f515e1a5345675145c9736fc3e27/packages/content/src/graphql/queries/CatalogQuery.generated.tsx#L22
// eslint-disable-next-line
const CatalogDocument = gql`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${ContentFragment}
`;

// const ContentFragment = gql`
//   fragment ContentFragment on Content {
//     asset
//     authors
//     availabilityStatus
//     canAddToQueue
//     contentTypeLabel
//     courseGracePeriodEnded
//     coursePresold
//     courseStartDate
//     currentUserMayReschedule
//     currentUserUnmetCoursePrerequisites
//     currentUserUnmetLearningPathPrerequisites
//     description
//     displayCourse
//     kind
//     hasChildren
//     hideCourseDescription
//     id
//     isActive
//     priceInCents
//     rating
//     ribbon {
//       color
//       contrastColor
//       darkerColor
//       label
//       slug
//     }
//     slug
//     source
//     suggestedRetailPriceInCents
//     title
//     waitlistingEnabled
//     waitlistingTriggered
//   }
// `;
