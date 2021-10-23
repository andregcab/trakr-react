import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { sessionPropTypes } from 'components/lib';
import { UPDATE_SESSION } from 'graphql/mutations';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import BillableItem from './BillableItem';
import PersonalItem from './PersonalItem';
import SessionModal from '../SessionModal';
import { DEFAULT_ACTIVITY, activityUpdateData } from './lib';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SessionItem = ({ session }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(DEFAULT_ACTIVITY);
  const [sessionUpdate] = useMutation(UPDATE_SESSION, {
    onCompleted: () => {
      setShowModal(false);
      setShowSnack(true);
    },
  });

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

  const handleSave = () => {
    sessionUpdate({
      variables: {
        id: session.id,
        data: { activitiesAttributes: activityUpdateData(currentActivity) },
      },
    });
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
        handleSave={handleSave}
        modalTitle="Edit Activity"
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
          Activity updated!
        </Alert>
      </Snackbar>
    </>
  );
};

SessionItem.propTypes = {
  session: sessionPropTypes.isRequired,
};

export default SessionItem;
