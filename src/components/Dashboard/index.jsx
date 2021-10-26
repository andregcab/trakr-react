import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { useQuery } from '@apollo/client';
import { SESSIONS } from 'graphql/queries';
import { useSession } from 'lib/useSession';
import NoSessions from './NoSessions';
import CardGrid from './CardGrid';
import SessionModal from '../SessionModal';
import DeleteModal from '../DeleteModal';
import Snackbar from '../SnackBar';
import { DEFAULT_ACTIVITY } from '../lib';

const Dashboard = () => {
  const [currentActivity, setCurrentActivity] = useState(DEFAULT_ACTIVITY);
  const [showModal, setShowModal] = useState({ new: false, edit: false, delete: false });
  const [showSnack, setShowSnack] = useState(false);
  const { loading, data } = useQuery(SESSIONS, { variables: { userId: '1' } });
  const { handleDelete, handleSave } = useSession({
    currentActivity,
    setCurrentActivity,
    showModal,
    setShowModal,
    setShowSnack,
  });

  if (loading || !data) return '';

  const closeModal = () => {
    setCurrentActivity(DEFAULT_ACTIVITY);
    setShowModal({ new: false, edit: false, delete: false });
  };

  const handleShow = (type, activity) => {
    if (type === 'edit' || type === 'delete') {
      setCurrentActivity(activity);
    }
    setShowModal((prev) => ({ ...prev, [type]: true }));
  };
  const handleChange = (value, field) => {
    setCurrentActivity((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const userHasSessions = !!data.sessions.length;
  const modalTitle = showModal.new ? 'Create Session' : 'Edit Session';

  return (
    <>
      <div className="dashboard-container">
        <h2 className="my-3 mb-5">Daily Dashboard</h2>
        <Container>
          {userHasSessions ? (
            <CardGrid sessions={data.sessions} handleShow={handleShow} />
          ) : (
            <NoSessions />
          )}
        </Container>
        <Tooltip title="Add a new Session" placement="top" arrow>
          <Fab onClick={() => handleShow('new')} aria-label="add" className="add-btn">
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <SessionModal
        newSession={showModal.new}
        showModal={showModal.new || showModal.edit}
        handleSave={handleSave}
        handleClose={closeModal}
        handleChange={handleChange}
        currentActivity={currentActivity}
        modalTitle={modalTitle}
      />
      <DeleteModal
        showModal={showModal.delete}
        handleDelete={handleDelete}
        handleClose={closeModal}
      />
      <Snackbar showSnack={showSnack} hideSnack={() => setShowSnack(false)} />
    </>
  );
};

export default Dashboard;
