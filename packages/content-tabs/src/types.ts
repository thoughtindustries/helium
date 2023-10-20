import { InstructorsFragmentFragment, ProductsFragmentFragment } from './graphql';
import { ContentKind } from './graphql/global-types';

export type PriceFormatFn = (priceInCents: number) => string;

export interface ContentTabsProps {
  /** determine whether to show or hide the tabs */
  tabsView: boolean;
  /** the slug for the Course Group or Learning Path */
  slug: string;
  /**  specifies the type of content to be displayed. It can be set to "course" or "learningPath" */
  contentKind: ContentKind.Course | ContentKind.LearningPath;
  /** optional function for prioritized price formatting */
  priceFormat?: PriceFormatFn;
  /** company property to format price */
  companyDefaultLocale?: string;
  /** currency code to format price */
  currencyCode?: string;
}

export enum TabType {
  FreeText = 'free-text',
  Instructors = 'instructors',
  Testimonials = 'testimonials',
  Products = 'products'
}

export type ContentTabType = {
  __typename?: 'CourseTab' | 'LearningPathTab' | undefined;
  id?: string | undefined;
  label?: string | undefined;
  body?: string;
  tabType?: string | undefined;
  instructors?: InstructorsFragmentFragment[];
  products?: ProductsFragmentFragment[];
};
