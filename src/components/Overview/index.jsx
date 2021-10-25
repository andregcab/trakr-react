import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { SESSIONS } from 'graphql/queries';
import SessionItem from './SessionItem';

const Overview = () => {
  const { loading, data } = useQuery(SESSIONS, { variables: { userId: '1' } });
  if (loading) return '';

  return (
    <div className="overview-container">
      <h2 className="my-3 mb-5">My overview</h2>
      <Container>
        <Row className="justify-content-center">
          {data.sessions.map((session) => (
            <SessionItem key={session.id} session={session} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
