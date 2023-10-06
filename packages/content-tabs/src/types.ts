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
