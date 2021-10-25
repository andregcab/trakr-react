import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import MenuButton from '../MenuButton';
import { activityPropTypes, sessionPropTypes } from '../lib';

const BillableItem = ({ activity, handleShow, session }) => {
  const minutes = session.elapsedTime % 60;
  const hours = Math.floor(session.elapsedTime / 60);

  return (
    <ListGroup horizontal="md" className="my-3 pe-0">
      <ListGroup.Item>
        <span className="item-label">Created on</span>
        <span>{moment(session.createdAt).format('L')}</span>
      </ListGroup.Item>
      <ListGroup.Item id="client-num">
        <span className="item-label">Client#</span>
        <span className="item-text client-number">{activity.clientNumber}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Client name</span>
        <span className="item-text">{activity.clientName}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Eng name</span>
        <span className="item-text">{activity.engName}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Charge code</span>
        <span className="item-text">{activity.chargeCode}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Time spent</span>
        <span>{`${hours}h ${minutes}m`}</span>
      </ListGroup.Item>
      <MenuButton handleShow={handleShow} />
    </ListGroup>
  );
};

BillableItem.propTypes = {
  activity: activityPropTypes.isRequired,
  handleShow: PropTypes.func.isRequired,
  session: sessionPropTypes.isRequired,
};

export default BillableItem;
