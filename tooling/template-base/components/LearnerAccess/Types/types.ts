import { ContentGroupsQueryHookResult } from '@thoughtindustries/content';

export interface LearnerAccessProps {
  /** Determines if the learner access widget should collapse */
  allowCollapse?: boolean;
  /** Allows archived content  */
  allowContentArchive?: boolean;
  /** Space separated classnames provided as string  */
  classNames?: string;
  /** Determines if learner access widget is collapsible by default  */
  collapseDefault?: boolean;
  /** Determines if we should display expired certificates */
  displayExpiredCertificateInformation?: boolean;
  /** Query used to refine content */
  query?: string;
  /** Current user has manager interface access */
  userHasManagerInterfaceAccess?: boolean;
  /** Company enables external certificate uploads */
  companyEnableExternalCertificateUploads?: boolean;
  /** Company has waitlisting feature */
  companyHasWaitlistingFeature?: boolean;
}

export interface LoadedComponentProps {
  query?: string;
  kind?: string[];
  sort?: string;
}

export type LearnerAccessContextType = {
  refetchContentGroups: ContentGroupsQueryHookResult['refetch'];
  resetActiveTab: VoidFunction;
  companyEnableExternalCertificateUploads?: boolean;
};

export enum TabKey {
  Current = 'current',
  Events = 'events',
  LearningPath = 'learningPath',
  Completed = 'completed',
  Archived = 'archived',
  Bookmark = 'bookmark',
  Certificate = 'certificate',
  Waitlist = 'waitlist'
}

export type AvailableTab = {
  count: number;
  key: TabKey;
};
