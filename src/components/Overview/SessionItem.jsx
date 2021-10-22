import React, { useState } from 'react';
import { sessionPropTypes } from 'components/lib';
import BillableItem from './BillableItem';
import PersonalItem from './PersonalItem';
import SessionModal from '../SessionModal';
import { DEFAULT_ACTIVITY } from './lib';

const SessionItem = ({ session }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(DEFAULT_ACTIVITY);

  const handleClose = () => setShowModal(false);
  const handleShow = (activityId) => {
    const selectedActivity = session.activities.find((a) => a.id === activityId);
    setCurrentActivity(selectedActivity);
    setShowModal(true);
  };
  const handleChange = (value, field) => {
    return setCurrentActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      {session.activities.map((activity) => {
        return activity.activityType === 'BILLABLE' ? (
          <BillableItem
            key={activity.id}
            session={session}
            activity={activity}
            handleShow={handleShow}
          />
        ) : (
          <PersonalItem
            key={activity.id}
            session={session}
            activity={activity}
            handleShow={handleShow}
          />
        );
      })}
      <SessionModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleClose}
        modalTitle="Edit Activity"
        currentActivity={currentActivity}
        handleChange={handleChange}
      />
    </>
  );
};

SessionItem.propTypes = {
  session: sessionPropTypes.isRequired,
};

export default SessionItem;
