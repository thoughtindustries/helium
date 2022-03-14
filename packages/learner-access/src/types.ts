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
}
