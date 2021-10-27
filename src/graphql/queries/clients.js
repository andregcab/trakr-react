import { gql } from '@apollo/client';

export const CLIENTS = gql`
  query Clients($searchTerm: String!) {
    clients(searchTerm: $searchTerm) {
      id
      name
      clientName
    }
  }
`;
