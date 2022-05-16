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
}

export interface LoadedComponentProps {
  query?: string;
  kind?: string[];
  sort?: string;
  setMylearningCount?: (value: number) => void;
  learningpathsCount?: (value: number) => void;
  eventsCount?: (value: number) => void;
  completedCount?: (value: number) => void;
  archivesCount?: (value: number) => void;
  waitlistedCount?: (value: number) => void;
  certificationsCount?: (value: number) => void;
}
