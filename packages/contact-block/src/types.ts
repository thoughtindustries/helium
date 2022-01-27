export interface ContactBlockProps {
  /** Asset image for contact block */
  asset?: string;
  /** Contact name displayed in contact block */
  contactName?: string;
  /** Contact subtitle displayed in contact block */
  contactSubtitle?: string;
  /** Contact discription displayed contact block */
  contactDescription?: string;
  /** Contact email selection in CTA dropdonw */
  contactEmail?: string;
  /** CTA button text for contact block */
  actionText?: string;
  /** CTA action dropdown for contact block */
  actionType?: string;
  /** Url selection string in the CTA dropdown */
  url?: string;
  /** Background color displayed in Contact block */
  backgroundColor?: string;
  /** Color of text for contact block */
  textColor?: string;
  /** Checkbox in contact block for url */
  linkOpenInNewTab?: boolean;
}
