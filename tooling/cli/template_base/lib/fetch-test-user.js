const fetch = require('isomorphic-unfetch');

module.exports = { fetchTestUser };

const USER_QUERY = /* GraphQL */ `
  query UserByEmailQuery($email: String!) {
    UserByEmail(email: $email) {
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
  }
`;

async function fetchTestUser(tiInstance) {
  let user = {};

  if (tiInstance) {
    const endpoint = `${tiInstance.instanceUrl}/helium?apiKey=${tiInstance.apiKey}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: USER_QUERY,
        variables: { email: tiInstance.email }
      })
    };

    const userDataResponse = await fetch(endpoint, options).then(r => r.json());

    if (userDataResponse && userDataResponse[0].data) {
      const {
        data: { UserByEmail }
      } = userDataResponse[0];

      user = UserByEmail || {};
    }
  }

  return user;
}
