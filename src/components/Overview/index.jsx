import React from 'react';
import { CURRENT_USER_SESSIONS } from '../../fakedata/data';
import SessionItem from './SessionItem';

const Overview = () => {
  return (
    <div className="overview-container">
      {CURRENT_USER_SESSIONS.map((session) => (
        <SessionItem session={session} />
      ))}
    </div>
  );
};

export default Overview;
