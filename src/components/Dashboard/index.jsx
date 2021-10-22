import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SessionModal from '../SessionModal';

const DEFAULT_SESSION = {
  id: '',
  user_id: '',
  activity_id: '',
  created_at: '',
  last_started: null,
  elapsed_time: null,
  in_session: false,
  comment: '',
  activities: [
    {
      id: '',
      activity_type: '',
      eng_name: '',
      charge_code: '',
      client_name: '',
      client_number: '',
      comment: '',
    },
  ],
};
const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSession, setCurrentSession] = useState(DEFAULT_SESSION);

  const currentActivity = currentSession.activities[0];

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (value, field) => {
    return setCurrentSession((prev) => ({
      ...prev,
      activities: [{ ...prev.activities[0], [field]: value }],
    }));
  };

  return (
    <>
      <div>Dashboard</div>
      <div>
        <Button onClick={handleShow}> + </Button>
      </div>
      {/* <SessionModal
        newSession
        show={showModal}
        handleSave={handleClose}
        handleClose={handleClose}
        handleChange={handleChange}
        currentActivity={currentActivity}
      /> */}
    </>
  );
};

export default Dashboard;
