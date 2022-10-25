import { ReactNode } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export type PageProps = any;

export type Appearance = {
  backgroundAsset?: string;
  backgroundAssetTiled?: boolean;
  logoAsset?: string;
  retinaLogo?: boolean;
  altFont: string;
  font: string;
  accentColor: string;
  secondaryColor: string;
  linkColor: string;
};

export type CurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address1?: string;
  address2?: string;
  asset: string;
  roleKey: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  telephone?: string;
  externalCustomerId?: string;
  lang?: string;
  ref1?: string;
  ref2?: string;
  ref3?: string;
  ref4?: string;
  ref5?: string;
  ref6?: string;
  ref7?: string;
  ref8?: string;
  ref9?: string;
  ref10?: string;
};

export type PageContext = {
  _pageId: string;
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps: PageProps;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
  redirectTo?: string;
  documentProps?: {
    title?: string;
    description?: string;
  };
  pageHtml: string;
  routeParams: Record<string, string>;
  urlOriginal: string;
  urlPathname: string;
  urlParsed: {
    pathname: string;
    searchOriginal?: string;
    search: null | Record<string, string>;
    hash: null | string;
  };
  heliumEndpoint: string;
  apolloInitialState: Record<string, unknown>;
  isProduction: boolean;
  queryParams: Record<string, string>;
  authToken?: string;
  currentUser?: CurrentUser;
  appearance?: Appearance;
  apolloClient: ApolloClient<NormalizedCacheObject>;
};

export type PageWrapperProps = {
  pageContext: PageContext;
  children: ReactNode;
};
