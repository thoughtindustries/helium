import { ContentKind } from '@thoughtindustries/content/src/graphql/global-types';

export interface ContentHeaderProps {
  /** Content Kind for content header */
  contentKind: ContentKind;
  /** Content Slug */
  slug: string;
  /** Boolean to show stars and rating information */
  showStars?: boolean;
  /** Boolean to show content image */
  showImage?: boolean;
}
