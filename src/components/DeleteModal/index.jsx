import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';

const DeleteModal = ({ showModal, handleDelete, handleClose }) => {
  return (
    <Modal show={showModal} onHide={() => handleClose('delete')}>
      <Modal.Header>
        <Modal.Title>Delete session</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this session?</Modal.Body>
      <Modal.Footer>
        <Button className="ms-4" variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="ms-4" variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeleteModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteModal;
