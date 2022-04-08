const { gql } = require('@apollo/client');

// eslint-disable-next-line
const CompanyTestQuery = gql`
  query CompanyDetailsTestQuery {
    CompanyDetails {
      name
    }
  }
`;
