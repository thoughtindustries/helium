import fetch, { RequestInit } from 'node-fetch';

const USER_FRAGMENT = /* GraphQL */ `
  fragment UserFragment on User {
    id
    firstName
    lastName
    email
    address1
    address2
    roleKey
    city
    state
    zipCode
    country
    telephone
    externalCustomerId
    asset
    ref1
    ref2
    ref3
    ref4
    ref5
    ref6
    ref7
    ref8
    ref9
    ref10
  }
`;

const USER_QUERY = /* GraphQL */ `
  query UserQuery {
    CurrentUser {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;

const USER_AND_APPEARANCE_QUERY = /* GraphQL */ `
  query UserAndAppearanceQuery {
    CurrentUser {
      ...UserFragment
    }
    CompanyDetails {
      settings {
        backgroundAsset
        backgroundAssetTiled
        logoAsset
        retinaLogo
        altFont
        font
        accentColor
        secondaryColor
        linkColor
      }
    }
  }
  ${USER_FRAGMENT}
`;

type TiInstance = Record<string, string>;
type FetchRequest = {
  endpoint: string;
  options: RequestInit;
};

const composeFetchRequest = (tiInstance: TiInstance, authToken?: string): FetchRequest => {
  const requestHeaders: any = { 'Content-Type': 'application/json' };
  if (authToken) {
    requestHeaders['authToken'] = authToken;
  }
  const endpoint = `${tiInstance.instanceUrl}/helium?apiKey=${tiInstance.apiKey}`;
  const options = {
    method: 'POST',
    headers: requestHeaders
  };
  return { endpoint, options };
};

const fetchUser = async (tiInstance: TiInstance, authToken: string) => {
  let currentUser = {};

  const { endpoint, options } = composeFetchRequest(tiInstance, authToken);
  options.body = JSON.stringify({
    query: USER_QUERY
  });

  const userDataResponse = await fetch(endpoint, options).then(r => r.json());

  if (userDataResponse && userDataResponse.data) {
    const {
      data: { CurrentUser }
    } = userDataResponse;

    currentUser = CurrentUser || {};
  }

  return currentUser;
};

const fetchUserAndAppearance = async (tiInstance: TiInstance, authToken?: string) => {
  let currentUser = {};
  let appearanceBlock = {};

  const { endpoint, options } = composeFetchRequest(tiInstance, authToken);
  options.body = JSON.stringify({
    query: USER_AND_APPEARANCE_QUERY
  });

  const userDataResponse = await fetch(endpoint, options).then(r => r.json());

  if (userDataResponse && userDataResponse.data) {
    const {
      data: { CurrentUser, CompanyDetails }
    } = userDataResponse;

    currentUser = CurrentUser || {};

    if (CompanyDetails && CompanyDetails.settings) {
      appearanceBlock = CompanyDetails.settings;
    }
  }

  return { currentUser, appearanceBlock };
};

export { fetchUser, fetchUserAndAppearance };
