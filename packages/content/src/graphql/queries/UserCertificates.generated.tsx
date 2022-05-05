import * as Types from '../global-types';

import { UserFragmentFragment } from './UserFragment.generated';
import { ContentFragmentFragment } from './ContentFragment.generated';
import { gql } from '@apollo/client';
import { UserFragmentFragmentDoc } from './UserFragment.generated';
import { ContentFragmentFragmentDoc } from './ContentFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CertificatesQueryVariables = Types.Exact<{
  query?: Types.InputMaybe<Types.Scalars['String']>;
  includeExpiredCertificates?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type CertificatesQuery = {
  __typename?: 'Query';
  UserCertificates?: Array<{
    __typename?: 'Certificate';
    id: string;
    issuedAt: string;
    url: string;
    pdfAsset?: string;
    resourceTypeLabel?: string;
    resourceId?: string;
    progressWasReset: boolean;
    expirationDate?: string;
    didExpire: boolean;
    deleted: boolean;
    recertificationDate?: string;
    isExpired: boolean;
    source?: string;
    isExternal: boolean;
    externalResourceTitle?: string;
    identifier?: string;
    certificateTemplate?: {
      __typename?: 'CertificateTemplate';
      id: string;
      resourceType: Types.CertificateTemplateResourceType;
      title?: string;
      asset?: string;
      supplementalAssets?: Array<string>;
      expirationDate?: string;
      expirationDays?: number;
      recertificationAction?: Types.CertificateTemplateRecertificationActionType;
      recertificationInstructions?: string;
      recertificationActionText?: string;
      recertificationActionUrl?: string;
      recertificationAutoReset?: boolean;
      recertificationAfterDays?: number;
      userCustomFieldSlug?: string;
      userCustomFieldValue?: string;
      customCss?: string;
      isExpired: boolean;
      resource:
        | {
            __typename?: 'Course';
            id: string;
            createdAt?: string;
            updatedAt?: string;
            slug: string;
            status?: Types.Status;
            title?: string;
            sessionIsTitled: boolean;
          }
        | {
            __typename?: 'LearningPath';
            id: string;
            layout?: {
              __typename?: 'Layout';
              id: string;
              kind?: Types.LayoutKind;
              scripts?: string;
              widgets?: any;
              hasEnrollmentWidget: boolean;
            };
            ribbon?: {
              __typename?: 'Ribbon';
              label?: string;
              slug: string;
              color?: string;
              contrastColor?: string;
              darkerColor?: string;
            };
          };
      userCustomField?: {
        __typename?: 'UserCustomField';
        id: string;
        label: string;
        slug: string;
        choices?: any;
        ref?: number;
        required: boolean;
        type: Types.UserCustomFieldType;
      };
      labels?: Array<{
        __typename?: 'CertificateTemplateLabel';
        id: string;
        certificateFieldId: string;
        x: number;
        y: number;
        textAlign: Types.TextAlignment;
        fontSize: number;
        fontColor: string;
        certificateField?: {
          __typename?: 'CertificateField';
          id: string;
          type: Types.CertificateFieldType;
          label: string;
          includeOnTranscript: boolean;
          includeOnExternalCertificate: boolean;
          text?: string;
          awardTypeId?: string;
          customFieldSlug?: string;
          sessionCustomContentFieldSlug?: string;
          userCustomFieldSlug?: string;
          identifierPrefix?: string;
          identifierBodyLength?: number;
          hasIdentifierPrefix?: boolean;
          dateFormat?: Types.CertificateDateFormatType;
          awardType?: {
            __typename?: 'AwardType';
            id: string;
            label?: string;
            pluralLabel?: string;
            includeOnDashboard?: boolean;
            icon?: Types.AwardTypeIcon;
            deleted?: boolean;
          };
          customField?: {
            __typename?: 'CustomField';
            id: string;
            label: string;
            slug: string;
            indexed: boolean;
            multiple: boolean;
            includeValueOnContent: boolean;
            includeLabelOnContent: boolean;
            sort?: string;
          };
          userCustomField?: {
            __typename?: 'UserCustomField';
            id: string;
            label: string;
            slug: string;
            choices?: any;
            ref?: number;
            required: boolean;
            type: Types.UserCustomFieldType;
          };
        };
      }>;
    };
    user: { __typename?: 'User' } & UserFragmentFragment;
    contentItem?: { __typename?: 'Content' } & ContentFragmentFragment;
  }>;
};

export const CertificatesDocument = gql`
  query Certificates($query: String, $includeExpiredCertificates: Boolean) {
    UserCertificates(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      id
      certificateTemplate {
        id
        resource {
          ... on Course {
            id
            createdAt
            updatedAt
            slug
            status
            title
            sessionIsTitled
          }
          ... on LearningPath {
            id
            layout {
              id
              kind
              scripts
              widgets
              hasEnrollmentWidget
            }
            ribbon {
              label
              slug
              color
              contrastColor
              darkerColor
            }
          }
        }
        resourceType
        title
        asset
        supplementalAssets
        expirationDate
        expirationDays
        recertificationAction
        recertificationInstructions
        recertificationActionText
        recertificationActionUrl
        recertificationAutoReset
        recertificationAfterDays
        userCustomField {
          id
          label
          slug
          choices
          ref
          required
          type
        }
        userCustomFieldSlug
        userCustomFieldValue
        customCss
        labels {
          id
          certificateFieldId
          certificateField {
            id
            type
            label
            includeOnTranscript
            includeOnExternalCertificate
            text
            awardType {
              id
              label
              pluralLabel
              includeOnDashboard
              icon
              deleted
            }
            awardTypeId
            customField {
              id
              label
              slug
              indexed
              multiple
              includeValueOnContent
              includeLabelOnContent
              sort
            }
            customFieldSlug
            sessionCustomContentFieldSlug
            userCustomField {
              id
              label
              slug
              choices
              ref
              required
              type
            }
            userCustomFieldSlug
            identifierPrefix
            identifierBodyLength
            hasIdentifierPrefix
            dateFormat
          }
          x
          y
          textAlign
          fontSize
          fontColor
        }
        isExpired
      }
      user {
        ...UserFragment
      }
      issuedAt
      url
      pdfAsset
      resourceTypeLabel
      resourceId
      progressWasReset
      expirationDate
      didExpire
      deleted
      recertificationDate
      isExpired
      source
      contentItem {
        ...ContentFragment
      }
      isExternal
      externalResourceTitle
      identifier
    }
  }
  ${UserFragmentFragmentDoc}
  ${ContentFragmentFragmentDoc}
`;

/**
 * __useCertificatesQuery__
 *
 * To run a query within a React component, call `useCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCertificatesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      includeExpiredCertificates: // value for 'includeExpiredCertificates'
 *   },
 * });
 */
export function useCertificatesQuery(
  baseOptions?: Apollo.QueryHookOptions<CertificatesQuery, CertificatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CertificatesQuery, CertificatesQueryVariables>(
    CertificatesDocument,
    options
  );
}
export function useCertificatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CertificatesQuery, CertificatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CertificatesQuery, CertificatesQueryVariables>(
    CertificatesDocument,
    options
  );
}
export type CertificatesQueryHookResult = ReturnType<typeof useCertificatesQuery>;
export type CertificatesLazyQueryHookResult = ReturnType<typeof useCertificatesLazyQuery>;
export type CertificatesQueryResult = Apollo.QueryResult<
  CertificatesQuery,
  CertificatesQueryVariables
>;
