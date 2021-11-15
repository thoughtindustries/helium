import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Counter } from './Counter';

import { Hero } from '@thoughtindustries/hero';

export { Page };
export { documentProps };

const query = gql`
  query CompanyDetailsQuery {
    CompanyDetails {
      __typename
      name
    }
  }
`;

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page(pageProps) {
  const { t } = useTranslation();
  const { data } = useQuery(query);
  const name = data && data.CompanyDetails ? data.CompanyDetails.name : 'No name';
  // const languages = data ? data.Languages : [];
  const languages = [];
  const { accentColor } = pageProps;
  const headerStyle = {
    color: accentColor
  };

  return (
    <>
      <Hero img="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_lfill,h_150/v1494856803/krk0kc4dlidrctj7xddh.png" />
      <h1 style={headerStyle}>{t('hello.user')}, {name} </h1>
      Testing the build and deploy process (now with meta!).
      <ul>
        <li className="text-accent">Rendered to HTML.</li>
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
