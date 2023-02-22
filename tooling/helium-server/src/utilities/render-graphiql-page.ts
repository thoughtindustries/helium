import express from 'express';

interface Options {
  endpoint: string;
}

/**
 * Render HTML for GraphiQL
 * Reference - https://github.com/graphql/graphiql/tree/main/examples/graphiql-cdn
 */
function render({ endpoint }: Options) {
  return `
<!--
 *  Copyright (c) 2021 GraphQL Contributors
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>GraphiQL</title>
    <style>
      body {
        height: 100%;
        margin: 0;
        width: 100%;
        overflow: hidden;
      }

      #graphiql {
        height: 100vh;
      }
    </style>

    <!--
      This GraphiQL example depends on Promise and fetch, which are available in
      modern browsers, but can be "polyfilled" for older browsers.
      GraphiQL itself depends on React DOM.
      If you do not want to rely on a CDN, you can host these files locally or
      include them directly in your favored resource bundler.
    -->
    <script
      src="https://unpkg.com/react@18.2.0/umd/react.development.js"
      integrity="sha512-m7nhpWHotpucPI37I4lPovL28Bm2BhAMV8poF3F8Z9oOEZ3jlxGzkgvG0EMt1mVL1xydr1erlBbmN90js/ssUw=="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"
      integrity="sha512-SKTL5rMewKkHVooCoONgJHCICK1otCPqPFduipyXVLWgtHHmsQgzXXHUP+SPyL4eU/knSpDkMXKlLedcHmWJpQ=="
      crossorigin="anonymous"
    ></script>

    <!--
      These two files can be found in the npm module, however you may wish to
      copy them directly into your environment, or perhaps include them in your
      favored resource bundler.
     -->
    <link rel="stylesheet" href="https://unpkg.com/graphiql@2.2.0/graphiql.min.css" />
  </head>

  <body>
    <div id="graphiql">Loading...</div>
    <script
      src="https://unpkg.com/graphiql@2.2.0/graphiql.min.js"
      integrity="sha512-FVCV2//UVo1qJ3Kg6kkHLe0Hg+IJhjrGa+aYHh8xD4KmwbbjthIzvaAcCJsQgA43+k+6u7HqORKXMyMt82Srfw=="
      crossorigin="anonymous"
      type="application/javascript"
    ></script>
    <script>
      ReactDOM.createRoot(document.getElementById('graphiql')).render(
        React.createElement(GraphiQL, {
          fetcher: GraphiQL.createFetcher({
            url: '${endpoint}',
          }),
          defaultEditorToolsVisibility: true,
        })
      );
    </script>
  </body>
</html>
  `;
}

export function controllerFactory(options: Options) {
  return (req: express.Request, res: express.Response) => {
    res.setHeader('Content-Type', 'text/html');
    const html = render(options);
    res.write(html);
    res.end();
  };
}
