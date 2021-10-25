import { gql } from '@apollo/client';

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      uuid
    }
  }
`;

export const USER_WITH_SESSIONS_AND_ACTIVITIES = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      uuid
      sessions {
        id
        createdAt
        updatedAt
        inSession
        lastStarted
        elapsedTime
        activity {
          id
          engName
          chargeCode
          clientName
          clientNumber
          createdAt
          updatedAt
          activityType
          comment
        }
      }
    }
  }
`;
