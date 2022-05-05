import clsx from 'clsx';
import React, { Children, cloneElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import NavigationBarContext from './context';
import { MenuIcon } from './icons';
import { NavigationBarProps } from './types';
import { useMobileTopbarBehavior } from './use-mobile-topbar-behavior';

const NavigationBar = ({ children }: NavigationBarProps): JSX.Element => {
  const { t } = useTranslation();
  const { scrollableRef, navigate, isSmallScreen, isExpanded, toggleExpand, currentMenuId } =
    useMobileTopbarBehavior();
  const contextValue = useMemo(
    () => ({
      navigate,
      isSmallScreen,
      currentMenuId
    }),
    [navigate, isSmallScreen, currentMenuId]
  );

  // stylings
  const menuButtonClassnames = clsx(
    'flex flex-row items-center gap-x-1 h-8 leading-8 transition-colors ease-in-out duration-200 uppercase text-base font-bold',
    isExpanded ? 'text-gray-800' : 'text-link-hover'
  );

  return (
    <NavigationBarContext.Provider value={contextValue}>
      <div className="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none">
        <div className="w-full relative pl-4 pr-4">
          <nav
            className="flex flex-col border-b border-solid border-gray-300 overflow-hidden md:overflow-visible"
            role="navigation"
          >
            <div className="py-1 flex flex-row justify-center md:hidden bg-white">
              <button className={menuButtonClassnames} onClick={toggleExpand}>
                <span>{t('mobile-menu-button')}</span>
                <span className="w-6 h-6">
                  <MenuIcon />
                </span>
              </button>
            </div>
            <section
              ref={scrollableRef}
              className={clsx(
                'relative w-auto transition-all duration-300',
                isSmallScreen && !isExpanded ? 'hidden' : ''
              )}
            >
              <ul className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-start md:flex-row">
                {Children.map(children, (child, index) => cloneElement(child, { index }))}
              </ul>
            </section>
          </nav>
        </div>
      </div>
    </NavigationBarContext.Provider>
  );
};

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
