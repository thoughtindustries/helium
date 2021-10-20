export interface HeaderProps {
    /** title that appears on the header */
    title: string;
    /** display alternate title */
    alternateTitleDisplay?: boolean;
    /** open link in new tab */
    linkOpenInNewTab?: boolean;
    /** url for link that appears next to the title */
    linkUrl?: string;
    /** text for link that appears next to the title */
    linkText?: string;
}