import React, { useContext } from 'react';
import { j as jsx } from './chunk-7df435e3.js';
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
function usePageContext() {
  const pageContext = useContext(Context);
  if (!pageContext) {
    throw new Error('Expected a Page Context, but no Page Context was found');
  }
  return pageContext;
}
export { PageContextProvider as P, usePageContext as u };
