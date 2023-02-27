import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'graphiql/graphiql.css';
import './index.css';

const fetcher = createGraphiQLFetcher({
  url: '/graphql'
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GraphiQL fetcher={fetcher} />
  </React.StrictMode>
);
