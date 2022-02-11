import React, { useContext } from 'react';
import { PageContext } from '../types';

export { PageContextProvider };
export { usePageContext };

const Context = React.createContext(undefined);

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
  return pageContext;
}
