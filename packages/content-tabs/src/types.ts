import { InstructorsFragmentFragment, ProductsFragmentFragment } from './graphql';
import { ContentKind } from './graphql/global-types';

export interface ContentTabsProps {
  tabsView: boolean;
  slug: string;
  contentKind: ContentKind.Course | ContentKind.LearningPath;
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
