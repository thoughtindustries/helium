const { gql } = require('@apollo/client');

// eslint-disable-next-line
const query = gql`
  query CompanyDetailsQuery {
    CompanyDetails {
      name
    }
  }
`;
