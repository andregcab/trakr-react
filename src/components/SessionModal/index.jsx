import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const BillableForm = ({ data, handleChange }) => (
  <Form>
    <Form.Label>Client Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="client name"
      value={data.client_name}
      onChange={(e) => {
        handleChange(e.target.value, "client_name");
      }}
    />
    <Form.Label>Client #</Form.Label>
    <Form.Control
      type="text"
      placeholder="123456789"
      value={data.client_number}
      onChange={(e) => {
        handleChange(e.target.value, "client_number");
      }}
    />
    <Form.Label>Eng Name</Form.Label>
    <Form.Control type="text" placeholder="eng name" value={data.eng_name} />
    <Form.Label>Charge Code</Form.Label>
    <Form.Control
      type="text"
      placeholder="charge code"
      value={data.charge_code}
      onChange={(e) => {
        handleChange(e.target.value, "charge_code");
      }}
    />
    <Form.Label>Comment</Form.Label>
    <Form.Control
      type="textarea"
      placeholder="a comment"
      value={data.comment}
      onChange={(e) => {
        handleChange(e.target.value, "comment");
      }}
    />
  </Form>
);

const PersonalForm = ({ data, handleChange }) => (
  <Form>
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="name"
      value={data.client_name}
      onChange={(e) => {
        handleChange(e.target.value, "client_name");
      }}
    />
    <Form.Label>Comment</Form.Label>
    <Form.Control
      type="textarea"
      placeholder="a comment"
      value={data.comment}
      onChange={(e) => {
        handleChange(e.target.value, "comment");
      }}
    />
  </Form>
);

const SessionModal = ({
  show,
  newSession,
  handleClose,
  handleSave,
  handleChange,
  currentActivity,
  modalTitle,
}) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{modalTitle || "Create New Session"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentActivity.activity_type === "BILLABLE" ? (
          <BillableForm data={currentActivity} handleChange={handleChange} />
        ) : (
          <PersonalForm data={currentActivity} handleChange={handleChange} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SessionModal;
