import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import { Snackbar, Fab } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useQuery, useMutation } from '@apollo/client';
import { SESSIONS } from 'graphql/queries';
import { CREATE_SESSION } from 'graphql/mutations';
import NoSessions from './NoSessions';
import SessionCard from './SessionCard';
import SessionModal from '../SessionModal';
import { DEFAULT_ACTIVITY, activityUpdateData } from '../lib';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(DEFAULT_ACTIVITY);
  const [sessionCreate] = useMutation(CREATE_SESSION, {
    onCompleted: () => {
      setShowModal(false);
      setShowSnack(true);
    },
  });

  const { loading, data } = useQuery(SESSIONS, { variables: { userId: '1' } });

  if (loading) return '';

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleChange = (value, field) => {
    return setCurrentActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSave = () => {
    sessionCreate({
      variables: {
        data: { userId: '1', activityAttributes: activityUpdateData(currentActivity) },
      },
    });
  };

  const userHasSessions = !!data.sessions.length;

  return (
    <>
      <div className="dashboard-container">
        <h2 className="my-3 mb-5">My overview</h2>
        <Container>
          {userHasSessions ? (
            data.sessions.map((session) => <SessionCard key={session.id} session={session} />)
          ) : (
            <NoSessions />
          )}
        </Container>
        <Fab onClick={handleShow} aria-label="add" className="add-btn">
          <AddIcon />
        </Fab>
      </div>
      <SessionModal
        newSession
        show={showModal}
        handleSave={handleSave}
        handleClose={handleClose}
        handleChange={handleChange}
        currentActivity={currentActivity}
        modalTitle="Create Session"
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5000}
        open={showSnack}
        onClose={() => setShowSnack(false)}
      >
        <Alert onClose={() => setShowSnack(false)} severity="success">
          Session created!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Dashboard;
