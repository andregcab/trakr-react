import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SessionItem from './SessionItem';
import { CURRENT_USER_SESSIONS } from '../../fakedata/data';

const Overview = () => {
  return (
    <div className="overview-container">
      <h2 className="my-3 mb-5">My overview</h2>
      <Container>
        <Row className="justify-content-center">
          {CURRENT_USER_SESSIONS.map((session) => (
            <SessionItem key={session.id} session={session} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
