import { ReactNode, SyntheticEvent } from 'react';

export interface FeaturedContentSidebarBaseProps {
  /** title of sidebar */
  title?: string;
  /** children */
  children?: ReactNode;
}

export interface FeaturedContentSidebarRssProps extends FeaturedContentSidebarBaseProps {
  /** url of rss feed */
  feedUrl: string;
}

export enum SidebarPosition {
  Left = 'left',
  Right = 'right'
}

export type HeaderOptions = {
  /** title that appears on the item group */
  title?: string;
  /** open link in new tab */
  linkOpenInNewTab?: boolean;
  /** link text */
  linkText?: string;
  /** link url */
  linkUrl?: string;
};

export interface FeaturedContentContentProps {
  /** row item count in desktop view */
  desktopColumnCount: number;
  /** options to display header */
  headerOptions?: HeaderOptions;
  /** add applicaple item to queue event handler */
  onAddedToQueue: (item: FeaturedContentContentItem) => Promise<void>;
  /** optional on item click event handler */
  onClick?: (evt: SyntheticEvent, item: FeaturedContentContentItem) => void;
  /** children */
  children: ReactNode;
}

export type FeaturedContentContentItemRibbon = {
  /** background color */
  bgColor?: string;
  /** text color */
  contrastColor?: string;
  /** corner color */
  darkerColor?: string;
  /** label */
  label?: string;
  /** slug */
  slug: string;
};

export type FeaturedContentContentItem = {
  /** title */
  title?: string;
  /** description */
  description?: string;
  /** image asset */
  asset?: string;
  /** link url */
  linkUrl?: string;
  /** option to open link in new tab */
  linkOpenInNewTab?: boolean;
  /** is completed flag */
  isCompleted?: boolean;
  /** start date of course */
  courseStartDate?: Date;
  /** label for content type */
  contentTypeLabel?: string;
  /** source */
  source?: string;
  /** authors */
  authors?: string;
  /** short description */
  shortDescription?: string;
  /** rating (from 0 to 100) */
  rating?: number;
  /** can item be added to queue */
  canAddToQueue?: boolean;
  /** active status */
  isActive?: boolean;
  /** call to action text */
  callToAction?: string;
  /** price (in cents) */
  priceInCents?: number;
  /** has availability */
  hasAvailability?: boolean;
  /** suggested price (in cents) */
  suggestedRetailPriceInCents?: number;
  /** ribbon */
  ribbon?: FeaturedContentContentItemRibbon;
  /** content item kind */
  kind?: string;
  /** slug */
  slug?: string;
  /** display course id */
  displayCourse?: string;
};

export interface FeaturedContentContentItemProps extends FeaturedContentContentItem {}

export interface FeaturedContentTileStandardLayoutContextType {
  /** row item count in desktop view */
  desktopColumnCount: number;
  /** add applicaple item to queue event handler */
  onAddedToQueue: (item: FeaturedContentContentItem) => Promise<void>;
  /** optional on item click event handler */
  onClick?: (evt: SyntheticEvent, item: FeaturedContentContentItem) => void;
}

export interface FeaturedContentProps {
  /** node for sidebar */
  sidebar?: ReactNode;
  /** position of sidebar */
  sidebarPosition?: SidebarPosition;
  /** children */
  children: ReactNode;
}
