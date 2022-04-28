import React, {
  Children,
  createRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { NavigationBarLinkProps, NavigationBarLinkSubLinkProps } from './types';
import useNavigationBar from './use-navigation-bar';
import { CaretDownIcon, CaretRightIcon } from './icons';
import { useOnClickOutside, useWindowEventListener } from '@thoughtindustries/hooks';

interface LinkProps {
  href?: string;
  target?: string;
}

// stylings
const subLinkWrapperClassnames = 'bg-white';
const getSubLinkClassnames = (isBackLink?: boolean) => {
  const baseClassnames =
    'py-2 md:py-0 px-3 hover:text-accent hover:font-semibold leading-5 md:whitespace-no-wrap block w-full';
  const backLinkClassnames = isBackLink
    ? 'text-link-hover text-xs font-normal text-left'
    : 'text-accent md:text-link-hover hover:text-accent text-sm md:text-xs font-semibold md:font-normal uppercase';
  return clsx(baseClassnames, backLinkClassnames);
};

const SubLink = ({ label, href, linkOpenInNewTab }: NavigationBarLinkSubLinkProps): JSX.Element => {
  // derived values
  const linkProps: LinkProps = {
    href
  };
  if (linkOpenInNewTab) {
    linkProps.target = '_blank';
  }

  return (
    <li className={subLinkWrapperClassnames}>
      <a {...linkProps} className={getSubLinkClassnames()}>
        {label}
      </a>
    </li>
  );
};

const NavigationBarLink = ({
  index,
  label,
  href,
  linkOpenInNewTab,
  children
}: NavigationBarLinkProps): JSX.Element => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const wrapperRef = createRef<HTMLLIElement>();
  const { isSmallScreen, navigate, currentMenuId } = useNavigationBar();

  // derived values
  const id = `navbar-link-${index}`;
  const totalSubLinks = Children.count(children);
  const hasDropdown = totalSubLinks > 0;
  const linkProps: LinkProps = {
    href
  };
  if (linkOpenInNewTab) {
    linkProps.target = '_blank';
  }

  // event handler
  const handleClick = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      setIsExpanded(true);
      if (isSmallScreen) {
        navigate(1, id);
      }
    },
    [isSmallScreen, navigate, id]
  );
  const handleBackClick = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      setIsExpanded(false);
      navigate(-1);
    },
    [navigate]
  );
  const collapseDropdown = useCallback(() => {
    if (!isSmallScreen) {
      setIsExpanded(false);
    }
  }, [isSmallScreen]);
  useOnClickOutside(wrapperRef, collapseDropdown);
  useWindowEventListener('resize', collapseDropdown);

  // effect
  useEffect(() => {
    if (currentMenuId !== id) {
      setIsExpanded(false);
    }
  }, [currentMenuId, id]);

  // stylings
  const linkWrapperClassnames = 'static md:relative bg-white px-4';
  const dropdownWrapperBaseClassnames =
    'absolute top-0 md:top-auto left-full md:left-0 w-full md:w-auto z-50 border-none divide-y-none md:border md:border-solid md:border-black md:divide-y md:divide-black';
  const dropdownWrapperClassnames = isExpanded ? 'visible' : 'invisible';
  const linkOrButtonBaseClassnames =
    'font-semibold uppercase text-sm leading-6 flex items-center justify-between md:justify-start gap-x-2 text-accent hover:text-link-hover py-3 md:py-0';

  return (
    <li className={linkWrapperClassnames} ref={wrapperRef}>
      {hasDropdown && (
        <>
          <button className={clsx(linkOrButtonBaseClassnames, 'w-full')} onClick={handleClick}>
            {label}
            <span className="w-3 h-3 text-link-hover">
              {isSmallScreen && <CaretRightIcon />}
              {!isSmallScreen && <CaretDownIcon />}
            </span>
          </button>
          <ul className={clsx(dropdownWrapperBaseClassnames, dropdownWrapperClassnames)}>
            <li className={clsx(subLinkWrapperClassnames, 'md:hidden')}>
              <button className={getSubLinkClassnames(true)} onClick={handleBackClick}>
                {t('mobile-back-button')}
              </button>
            </li>
            {children}
          </ul>
        </>
      )}
      {!hasDropdown && (
        <a {...linkProps} className={linkOrButtonBaseClassnames}>
          {label}
        </a>
      )}
    </li>
  );
};

NavigationBarLink.displayName = 'NavigationBarLink';
NavigationBarLink.SubLink = SubLink;

export default NavigationBarLink;
