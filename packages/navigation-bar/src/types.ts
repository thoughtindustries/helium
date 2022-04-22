import { ReactElement } from 'react';

export interface NavigationBarProps {
  children: ReactElement | ReactElement[];
}

interface LinkBaseProps {
  /** label for navigation bar link */
  label: string;
  /** url for link */
  href?: string;
  /** open link in new tab for link */
  linkOpenInNewTab?: boolean;
}

export interface NavigationBarLinkProps extends LinkBaseProps {
  /** index of menu link */
  index?: number;
  /** list of sub links */
  children?: ReactElement | ReactElement[];
}

export interface NavigationBarLinkSubLinkProps extends LinkBaseProps {
  /** url for link */
  href: string;
}

export type NavigationBarContextType = {
  navigate: (direction: number, menuId?: string) => void;
  isSmallScreen: boolean;
  currentMenuId?: string;
};
