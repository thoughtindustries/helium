import { HydratedContentItem, GlobalTypes } from '@thoughtindustries/content';
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

export type FeaturedContentContentCarouselProps = Omit<
  FeaturedContentContentProps,
  'desktopColumnCount' | 'onAddedToQueue'
>;

export type FeaturedContentContentItemRibbon = GlobalTypes.Ribbon;

export type FeaturedContentHydratedContentItem = HydratedContentItem;

export interface FeaturedContentStaticContentItem {
  asset?: string;
  description?: string;
  href?: string;
  isActive: boolean;
  title?: string;
  linkOpenInNewTab?: boolean;
}

export type FeaturedContentContentItem =
  | FeaturedContentStaticContentItem
  | FeaturedContentHydratedContentItem;

export type FeaturedContentContentItemProps = FeaturedContentContentItem;

interface FeaturedContentBaseContextType {
  /** row item count in desktop view */
  desktopColumnCount: number;
  /** add applicaple item to queue event handler */
  onAddedToQueue: (item: FeaturedContentContentItem) => Promise<void>;
  /** optional on item click event handler */
  onClick?: (evt: SyntheticEvent, item: FeaturedContentContentItem) => void;
}

export type FeaturedContentTileStandardLayoutContextType = FeaturedContentBaseContextType;

export type FeaturedContentTileDescriptiveLayoutContextType = FeaturedContentBaseContextType;

export type FeaturedContentMultiCarouselContextType = FeaturedContentBaseContextType;

export type FeaturedContentCarouselContextType = Pick<FeaturedContentBaseContextType, 'onClick'>;

export type FeaturedContentTileImageOverlayContextType = FeaturedContentBaseContextType;

export interface FeaturedContentProps {
  /** node for sidebar */
  sidebar?: ReactNode;
  /** position of sidebar */
  sidebarPosition?: SidebarPosition;
  /** children */
  children: ReactNode;
}
