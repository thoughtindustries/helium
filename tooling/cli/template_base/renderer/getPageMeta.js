export { getPageMeta };

function getPageMeta(pageContext) {
  const title = fetchProperty(pageContext, 'title');
  const description = fetchProperty(pageContext, 'description');
  return { title, description };
}

function fetchProperty(pageContext, property) {
  /**
   * pageContext.pageExports.documentProps for static titles (defined in the `export { documentProps }` of the page's `.page.js`)
   * pageContext.documentProps for dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
   */
  return (
    (pageContext.pageExports.documentProps || {})[property] ||
    (pageContext.documentProps || {})[property]
  );
}
