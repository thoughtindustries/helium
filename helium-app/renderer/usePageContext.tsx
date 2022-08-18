import React, { useContext } from 'react';
import { PageContext } from '../types';

export { PageContextProvider };
export { usePageContext };

const Context = React.createContext<PageContext | undefined>(undefined);

function PageContextProvider({
  pageContext,
  children
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);

  if (!pageContext) {
    throw new Error('Expected a Page Context, but no Page Context was found');
  }

  return pageContext;
}
