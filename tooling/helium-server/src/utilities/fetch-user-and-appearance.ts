import fetch from 'node-fetch';

const USER_QUERY = /* GraphQL */ `
  query UserAndAppearanceQuery {
    CurrentUser {
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
`;

export default async function fetchUserAndAppearance(tiInstance: Record<string, string>) {
  let currentUser = {};
  let appearanceBlock = {};

  if (tiInstance) {
    const endpoint = `${tiInstance.instanceUrl}/helium?apiKey=${tiInstance.apiKey}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: USER_QUERY,
        variables: { email: tiInstance.email },
        user: tiInstance.email
      })
    };

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
  }

  return { currentUser, appearanceBlock };
}
