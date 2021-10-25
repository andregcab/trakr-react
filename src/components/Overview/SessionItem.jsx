import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_SESSION, DELETE_SESSION } from 'graphql/mutations';
import { SESSIONS } from 'graphql/queries';
import BillableItem from './BillableItem';
import PersonalItem from './PersonalItem';
import SessionModal from '../SessionModal';
import DeleteModal from '../DeleteModal';
import SnackBar from '../SnackBar';
import { activityUpdateData, sessionPropTypes } from '../lib';

const SessionItem = ({ session }) => {
  const [showModal, setShowModal] = useState({ edit: false, delete: false });
  const [showSnack, setShowSnack] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(session.activity);

  const handleShow = (type) => setShowModal((prev) => ({ ...prev, [type]: true }));
  const closeModal = () => {
    setCurrentActivity(session.activity);
    setShowModal({ edit: false, delete: false });
  };

  const [sessionUpdate] = useMutation(UPDATE_SESSION, {
    onCompleted: () => {
      closeModal();
      setShowSnack('updated');
    },
  });
  const [sessionDelete] = useMutation(DELETE_SESSION, {
    onCompleted: () => {
      closeModal();
      setShowSnack('deleted');
    },
  });

  const handleChange = (value, field) => {
    return setCurrentActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    sessionUpdate({
      variables: {
        id: session.id,
        data: { activityAttributes: activityUpdateData(currentActivity) },
      },
    });
  };
  const handleDelete = () => {
    sessionDelete({
      variables: { id: session.id },
      refetchQueries: [{ query: SESSIONS, variables: { userId: '1' } }],
    });
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
