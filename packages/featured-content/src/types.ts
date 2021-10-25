import { ReactNode } from "react";

export interface FeaturedContentSidebarProps {
    title?: string;
    children: ReactNode | ReactNode[];
}

export interface FeaturedContentSidebarRssLinkProps {
    /** key index of link in sidebar rss */
    key?: string;
    /** url for link */
    href: string;
    /** child of link */
    children: ReactNode;
}

export enum SidebarPosition {
    Left = "left",
    Right = "right"
}

type HeaderOptions = {
    /** title that appears on the item group */
    title?: string;
    /** open link in new tab */
    linkOpenInNewTab?: boolean;
    /** link text */
    linkText?: string;
    /** link url */
    linkUrl?: string;
}

type DisplayOptions = {
    /** option to show item authors (if applied) */
    showAuthors?: boolean;
    /** option to show item content type (if applied) */
    showContentType?: boolean;
    /** option to show item description */
    showDescription?: boolean;
    /** option to show item asset */
    showImageAsset?: boolean;
    /** option to show item source (if applied) */
    showSource?: boolean;
    /** option to show item start date (if applied) */
    showStartDate?: boolean;
    /** option to show item title */
    showTitle?: boolean;
}

export interface FeaturedContentContentProps {
    /** row item count in desktop view */
    desktopColumnCount: number;
    /** options to display header */
    headerOptions?: HeaderOptions;
    /** options to display content item */
    displayOptions?: DisplayOptions;
    /** add applicaple item to queue event handler */
    onAddedToQueue: (item: FeaturedContentContentItem) => Promise<void>;
    /** children */
    children: ReactNode;
}

export type FeaturedContentContentItemRibbon = {
    bgColor: string;
    contrastColor: string;
    darkerColor: string;
    label: string;
}

export type FeaturedContentContentItem = {
    title?: string;
    description?: string;
    asset?: string;
    linkUrl?: string;
    linkOpenInNewTab?: boolean;
    isCompleted?: boolean;
    courseStartDate?: string;
    contentTypeLabel?: string;
    source?: string;
    authors?: string;
    shortDescription?: string;
    rating?: number;
    canAddToQueue: boolean;
    isActive?: boolean;
    callToAction?: string;
    priceInCents?: number;
    hasAvailability?: boolean;
    suggestedRetailPriceInCents?: number;
    ribbon?: FeaturedContentContentItemRibbon;
}

export interface FeaturedContentContentItemProps {
    /** key index of content item */
    key?: string;
    /** featured content item payload */
    item: FeaturedContentContentItem;
}

export interface FeaturedContentContentDefaultContextType {
    /** row item count in desktop view */
    desktopColumnCount: number;
    /** add applicaple item to queue event handler */
    onAddedToQueue: (item: FeaturedContentContentItem) => Promise<void>;
}

export interface FeaturedContentProps {
    /** node for sidebar */
    sidebar?: ReactNode;
    /** position of sidebar */
    sidebarPosition?: SidebarPosition;
    /** children */
    children: ReactNode;
}
