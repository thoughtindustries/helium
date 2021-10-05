export interface HeroProps {
    /** title that appears on the hero image */
    title?: string;
    /** subtitle that appears on the hero image */
    subtitle?: string;
    /** link text that appears on the hero image */
    linkText?: string;
    /** open link in new tab for link text */
    linkOpenInNewTab?: boolean;
    /** link url for link text */
    linkUrl?: string
    /** default asset for hero image */
    asset?: string;
    /** optional asset for hero image in large screen */
    largeAsset?: string;
    /** optional asset for hero image in small screen */
    smallAsset?: string;
}
