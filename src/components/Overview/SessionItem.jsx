import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_SESSION, DELETE_SESSION } from 'graphql/mutations';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import BillableItem from './BillableItem';
import PersonalItem from './PersonalItem';
import SessionModal from '../SessionModal';
import { activityUpdateData, sessionPropTypes } from '../lib';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SessionItem = ({ session }) => {
  const [showModal, setShowModal] = useState({ edit: false, delete: false });
  const [showSnack, setShowSnack] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(session.activity);
  const [sessionUpdate] = useMutation(UPDATE_SESSION, {
    onCompleted: () => {
      setShowModal(false);
      setShowSnack(true);
    },
  });
  const [sessionDelete] = useMutation(DELETE_SESSION, {
    onCompleted: () => {
      setShowModal(false);
      setShowSnack(true);
    },
  });

  const handleClose = (type) => setShowModal((prev) => ({ ...prev, [type]: false }));
  const handleShow = (type) => setShowModal((prev) => ({ ...prev, [type]: true }));
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

  const { activity } = session;

  return (
    <>
      {session.activity.activityType === 'BILLABLE' ? (
        <BillableItem session={session} activity={activity} handleShow={handleShow} />
      ) : (
        <PersonalItem session={session} activity={activity} handleShow={handleShow} />
      )}
      <SessionModal
        show={showModal.edit}
        handleClose={handleClose}
        handleSave={handleSave}
        modalTitle="Edit Session"
        currentActivity={currentActivity}
        handleChange={handleChange}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        open={showSnack}
        onClose={() => setShowSnack(false)}
      >
        <Alert onClose={() => setShowSnack(false)} severity="success">
          Session updated!
        </Alert>
      </Snackbar>
    </>
  );
};

SessionItem.propTypes = {
  session: sessionPropTypes.isRequired,
};

export default SessionItem;
