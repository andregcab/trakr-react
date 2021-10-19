import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import SessionModal from "../SessionModal";

const DEFAULT_SESSION = {
  id: "",
  user_id: "",
  activity_id: "",
  created_at: "",
  last_started: null,
  elapsed_time: null,
  in_session: false,
  comment: "",
  activities: [
    {
      id: "",
      activity_type: "",
      eng_name: "",
      charge_code: "",
      client_name: "",
      client_number: "",
      comment: "",
    },
  ],
};

const SessionItem = ({ session }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentSession, setCurrentSession] = useState(
    session || DEFAULT_SESSION
  );

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const listCurrentActivity = session.activities[0];
  const currentActivity = currentSession.activities[0];

  const handleChange = (value, field) => {
    return setCurrentSession((prev) => ({
      ...prev,
      activities: [{ ...prev.activities[0], [field]: value }],
    }));
  };

  return (
    <>
      <ListGroup horizontal className="my-2" key={currentSession.id}>
        <ListGroup.Item>{session.created_at}</ListGroup.Item>
        <ListGroup.Item>
          Client #: {listCurrentActivity.client_number}
        </ListGroup.Item>
        <ListGroup.Item>
          {listCurrentActivity.activity_type === "BILLABLE"
            ? "Client Name: "
            : "Name: "}
          : {listCurrentActivity.client_name}
        </ListGroup.Item>
        <ListGroup.Item>
          Eng Name: {listCurrentActivity.eng_name}
        </ListGroup.Item>
        <ListGroup.Item>
          Charge Code: {listCurrentActivity.charge_code}
        </ListGroup.Item>
        <ListGroup.Item>Elapsed Time: {session.elapsed_time}</ListGroup.Item>
        <ListGroup.Item>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <SessionModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleClose}
        modalTitle={listCurrentActivity.client_name}
        currentActivity={currentActivity}
        handleChange={handleChange}
      />
    </>
  );
};

export default SessionItem;
