import { gql } from '@apollo/client';

export const CREATE_SESSION = gql`
  mutation CreateSession($data: CreateSessionInput!) {
    createSession(data: $data) {
      id
      createdAt
      updatedAt
      inSession
      lastStarted
      elapsedTime
      activities {
        id
        engName
        chargeCode
        clientName
        clientNumber
        createdAt
        updatedAt
        activityType
      }
    }
  }
`;

export const UPDATE_SESSION = gql`
  mutation UpdateSession($id: ID!, $data: UpdateSessionInput!) {
    updateSessionAndActivity(id: $id, data: $data) {
      id
      createdAt
      updatedAt
      inSession
      lastStarted
      elapsedTime
      activities {
        id
        engName
        chargeCode
        clientName
        clientNumber
        createdAt
        updatedAt
        activityType
      }
    }
  }
`;
