import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import BillableForm from './BillableForm';
import PersonalForm from './PersonalForm';
import { activityPropTypes } from '../lib';

const SessionModal = ({
  show,
  handleClose,
  handleSave,
  handleChange,
  currentActivity,
  modalTitle,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{modalTitle || 'Create New Session'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentActivity.activityType === 'BILLABLE' ? (
          <BillableForm activity={currentActivity} handleChange={handleChange} />
        ) : (
          <PersonalForm activity={currentActivity} handleChange={handleChange} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="ms-4" variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="ms-4" variant="contained" color="success" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

SessionModal.defaultProps = {
  modalTitle: 'Create new session',
};

SessionModal.propTypes = {
  modalTitle: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentActivity: activityPropTypes.isRequired,
};

export default SessionModal;
