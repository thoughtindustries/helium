import { ReactNode, ReactElement } from 'react';

export interface LinkListsProps {
  /** title that appears on top of the link lists */
  title?: string;
  /** display alternate title */
  alternateTitleDisplay?: boolean;
  /** list of categories */
  children: ReactNode;
}

export interface LinkListProps {
  /** key index of category in the link lists */
  key?: string;
  /** label for category */
  label: string;
  /** display links at the cutoff with a toggle to display all  */
  displayCutoff?: number;
  /** list of categories */
  children: ReactElement | ReactElement[];
}

export interface LinkListLinkProps {
  /** key index of category in the link lists */
  key?: string;
  /** index of link in category */
  index?: number;
  /** url for link */
  href: string;
  /** open link in new tab for link */
  linkOpenInNewTab?: boolean;
  /** list of categories */
  children: ReactNode;
}

export interface LinkListContextType {
  /** display links at the cutoff with a toggle to display all  */
  displayCutoff?: number;
  /** expanded links state */
  expanded: boolean;
}
