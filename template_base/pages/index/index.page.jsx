import React from 'react'
import { useQuery } from 'graphql-hooks'
import { Counter } from "./Counter";

export { Page };

const query = /* GraphQL */`
  query LanguagesQuery {
    Languages {
      id
      label
    }
}
`

function Page() {
  const { data } = useQuery(query, { variables: { limit: 10 } });
  const languages = data ? data.Languages : [];
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      The following languages are available in your instance:
      <ul>
        {languages.map(({ id, label }) => (
          <li key={id}>{label}</li>
        ))}
      </ul>
    </>
  );
}
