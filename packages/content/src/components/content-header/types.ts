import { ContentKind } from '../../graphql/global-types';

export type ContentHeaderProps = {
  /** Content Kind for content header */
  contentKind: ContentKind;
  /** Content Slug */
  slug: string;
  /** Boolean to show stars and rating information */
  showStars?: boolean;
  /** Boolean to show content image */
  showImage?: boolean;
};
