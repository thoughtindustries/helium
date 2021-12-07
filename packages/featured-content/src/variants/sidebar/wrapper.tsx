import React from 'react';
import { Header } from '@thoughtindustries/header';
import { FeaturedContentSidebarBaseProps } from '../../types';

type FeaturedContentSidebarWrapperProps = FeaturedContentSidebarBaseProps;

const SidebarWrapper = ({ title, children }: FeaturedContentSidebarWrapperProps): JSX.Element => (
  <div className="md:h-full md:absolute md:left-0 w-full">
    {title && <Header title={title} alternateTitleDisplay />}
    <div className="overflow-y-scroll text-sm md:h-full">{children}</div>
  </div>
);

SidebarWrapper.displayName = 'SidebarWrapper';

export default SidebarWrapper;
