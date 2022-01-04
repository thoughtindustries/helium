import { Content, ContentKind, AlternativePricingType, Ribbon } from '@thoughtindustries/data';

export enum AvailabilityStatus {
  Completed = 'completed',
  Available = 'available',
  Started = 'started',
  NotStarted = 'not-started',
  NotCompleted = 'not-completed'
}

export interface ContentItem extends Content {
  courseGracePeriodEndDate?: Date;
}

export interface HydratedContentItem extends ContentItem {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted?: boolean;
  isAvailable?: boolean;
  isStarted?: boolean;
  isNotStarted?: boolean;
  isNotCompleted?: boolean;
  kindIsScormOrXApi?: boolean;
  locationIsOnline?: boolean;
  locationIsInPerson?: boolean;
  usesContentAccessText?: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
}

export type { Ribbon };
export { ContentKind, AlternativePricingType };
