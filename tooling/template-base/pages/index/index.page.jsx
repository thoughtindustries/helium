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
      <Hero
        title="Dolor Nullam Mattis Sem"
        subtitle="Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        asset="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg"
      />
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
