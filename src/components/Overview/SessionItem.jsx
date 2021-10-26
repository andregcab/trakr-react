import React, { useState } from 'react';
import { useSession } from 'lib/useSession';
import BillableItem from './BillableItem';
import PersonalItem from './PersonalItem';
import SessionModal from '../SessionModal';
import DeleteModal from '../DeleteModal';
import SnackBar from '../SnackBar';
import { sessionPropTypes } from '../lib';

const SessionItem = ({ session }) => {
  const [showModal, setShowModal] = useState({ edit: false, delete: false });
  const [showSnack, setShowSnack] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(session.activity);
  const { handleDelete, handleSave } = useSession({
    currentActivity,
    setCurrentActivity,
    showModal,
    setShowModal,
    setShowSnack,
  });

  const closeModal = () => {
    setCurrentActivity(session.activity);
    setShowModal({ edit: false, delete: false });
  };

  const handleShow = (type) => setShowModal((prev) => ({ ...prev, [type]: true }));
  const handleChange = (value, field) => {
    setCurrentActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { activity } = session;

  return (
    <>
      {activity.activityType === 'BILLABLE' ? (
        <BillableItem session={session} activity={activity} handleShow={handleShow} />
      ) : (
        <PersonalItem session={session} activity={activity} handleShow={handleShow} />
      )}
      <SessionModal
        showModal={showModal.edit}
        handleClose={closeModal}
        handleSave={handleSave}
        modalTitle="Edit Session"
        currentActivity={currentActivity}
        handleChange={handleChange}
      />
      <DeleteModal
        showModal={showModal.delete}
        handleDelete={handleDelete}
        handleClose={closeModal}
      />
      <SnackBar showSnack={showSnack} hideSnack={() => setShowSnack(false)} />
    </>
  );
};

SessionItem.propTypes = {
  session: sessionPropTypes.isRequired,
};

export default SessionItem;
