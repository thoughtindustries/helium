import React from 'react';
import { useTranslation } from 'react-i18next';
import { gql, useQuery } from '@apollo/client';
import { Appearance, CurrentUser } from '../types';
import { NavigationBar, NavigationBarLink } from '@thoughtindustries/navigation-bar';

export default function Layout({
  appearance,
  currentUser,
  children
}: {
  appearance: Appearance;
  currentUser: CurrentUser;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-gray-100">
      <div className="h-full max-w-screen-lg mx-auto bg-white shadow-sm font-primary">
        <Header appearance={appearance} currentUser={currentUser} />
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

function Header({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  const { t } = useTranslation();
  const dashboard = t('student-dashboard');
  const signIn = t('login');

  return (
    <div className="flex items-center justify-between px-2 border-b border-gray-200">
      <div className="p-2">
        {appearance.logoAsset ? (
          <img src={appearance.logoAsset} />
        ) : (
          <img src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_lfill,h_150/v1494856803/krk0kc4dlidrctj7xddh.png" />
        )}
      </div>
      <div className="text-right">
        {currentUser.id ? <a href="/learn/">{dashboard}</a> : <a href="/sign_in">{signIn}</a>}
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="px-4 relative z-10">
      <NavigationBar>
        <NavigationBarLink label="Home" href="/" />
        <NavigationBarLink label="Catalog" href="/catalog" />
        <NavigationBarLink label="Custom Catalog" href="/catalog/custom" />
      </NavigationBar>
    </div>
  );
}

const query = gql`
  query CompanyDetailsQuery {
    CompanyDetails {
      __typename
      name
    }
  }
`;

function Footer() {
  const { t } = useTranslation();
  const { data } = useQuery(query);
  const companyName = data && data.CompanyDetails ? data.CompanyDetails.name : 'No name';
  const poweredBy = t('powered-by');

  return (
    <div className="pt-4">
      <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
        <span className="text-gray-500">
          &copy; {new Date().getFullYear()} {companyName}
          <span className="inline-block pl-4 ml-4 text-sm border-l border-gray-200">
            {poweredBy}{' '}
            <a href="https://www.thoughtindustries.com/" target="_blank" rel="noreferrer">
              Thought Industries
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}
