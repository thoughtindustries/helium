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
  const { data } = useQuery(query);
  const companyName = data && data.CompanyDetails ? data.CompanyDetails.name : 'No name';

  const { t } = useTranslation();
  const translatedCompanyNameString = t('home.meta-title', { companyName });

  const authors = ['Jack', 'Jill'];
  const translatedAuthorString = t('course-group-authors', { count: authors.length });

  const { accentColor } = pageProps;
  const headerStyle = {
    color: accentColor
  };

  return (
    <>
      <Hero img="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_lfill,h_150/v1494856803/krk0kc4dlidrctj7xddh.png" />
      <h1 style={headerStyle}>Welcome to {translatedCompanyNameString}!</h1>
      <h2>
        {translatedAuthorString} {authors.join(' and ')}
      </h2>
      Testing the build and deploy process (now with meta!).
      <ul>
        <li className="text-accent">Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
