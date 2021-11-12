import React from 'react';
import { Header } from '@thoughtindustries/header';
import { LinkListsProps } from './types';

const LinkLists = (props: LinkListsProps): JSX.Element => {
  const { title, alternateTitleDisplay, children } = props;

  return (
    <div className="w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none">
      <div className="w-full relative pl-4 pr-4 float-left">
        {title && <Header title={title} alternateTitleDisplay={alternateTitleDisplay} />}
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8">{children}</ul>
      </div>
    </div>
  );
};

LinkLists.displayName = 'LinkLists';

export default LinkLists;
