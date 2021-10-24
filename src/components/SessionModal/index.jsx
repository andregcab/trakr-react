import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import useFormType from './useFormType';
import { activityPropTypes } from '../lib';

const SessionModal = ({
  show,
  newSession,
  handleSave,
  modalTitle,
  handleClose,
  handleChange,
  currentActivity,
}) => {
  const modalForm = useFormType({ currentActivity, handleChange });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{modalTitle || 'Create New Session'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalForm}</Modal.Body>
      <Modal.Footer>
        <Button className="ms-4" variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="ms-4" variant="contained" color="success" onClick={handleSave}>
          {newSession ? 'Create' : 'Save'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

SessionModal.defaultProps = {
  newSession: false,
  modalTitle: 'Create new session',
};

SessionModal.propTypes = {
  modalTitle: PropTypes.string,
  newSession: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentActivity: activityPropTypes.isRequired,
};

export default SessionModal;
