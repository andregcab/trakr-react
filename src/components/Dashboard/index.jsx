import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { useQuery, useMutation } from '@apollo/client';
import { SESSIONS } from 'graphql/queries';
import { CREATE_SESSION } from 'graphql/mutations';
import NoSessions from './NoSessions';
import CardGrid from './CardGrid';
import SessionModal from '../SessionModal';
import Snackbar from '../SnackBar';
import { DEFAULT_ACTIVITY, activityUpdateData } from '../lib';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(DEFAULT_ACTIVITY);
  const [sessionCreate] = useMutation(CREATE_SESSION, {
    onCompleted: () => {
      setShowModal(false);
      setShowSnack('added');
    },
  });

  const { loading, data } = useQuery(SESSIONS, { variables: { userId: '1' } });

  if (loading) return '';

  const handleClose = () => {
    setCurrentActivity(DEFAULT_ACTIVITY);
    setShowModal(false);
  };
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
      refetchQueries: [{ query: SESSIONS, variables: { userId: '1' } }],
    });
  };

  const userHasSessions = !!data.sessions.length;

  return (
    <>
      <div className="dashboard-container">
        <h2 className="my-3 mb-5">My Overview</h2>
        <Container>
          {userHasSessions ? <CardGrid sessions={data.sessions} /> : <NoSessions />}
        </Container>
        <Fab onClick={handleShow} aria-label="add" className="add-btn">
          <AddIcon />
        </Fab>
      </div>
      <SessionModal
        newSession
        showModal={showModal}
        handleSave={handleSave}
        handleClose={handleClose}
        handleChange={handleChange}
        currentActivity={currentActivity}
        modalTitle="Create Session"
      />
      <Snackbar showSnack={showSnack} hideSnack={() => setShowSnack(false)} />
    </>
  );
};

export default Dashboard;
