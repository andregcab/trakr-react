import { gql } from '@apollo/client';

export const SESSIONS = gql`
  query Sessions($userId: ID!) {
    sessions(where: { userId: $userId }) {
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
        sessionId
      }
    }
  }
`;
