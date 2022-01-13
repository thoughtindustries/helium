import { Content } from '../../graphql/global-types';

export enum AvailabilityStatus {
  Completed = 'completed',
  Available = 'available',
  Started = 'started',
  NotStarted = 'not-started',
  NotCompleted = 'not-completed'
}

export type ContentItem = Content;

export type HydratedContentItem = ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
};
