import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import MenuButton from './MenuButton';
import { activityPropTypes, sessionPropTypes } from '../lib';

const PersonalItem = ({ activity, handleShow, session }) => {
  const minutes = session.elapsedTime % 60;
  const hours = Math.floor(session.elapsedTime / 60);

  return (
    <ListGroup horizontal="md" className="my-2 pe-0">
      <ListGroup.Item>
        <span className="item-label">Created at</span>
        <span>{moment(session.createdAt).format('L')}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Name</span>
        <span className="personal-item-text">{activity.clientName}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Time spent</span>
        <span>{`${hours}h ${minutes}m`}</span>
      </ListGroup.Item>
      <MenuButton handleShow={handleShow} />
    </ListGroup>
  );
};

PersonalItem.propTypes = {
  activity: activityPropTypes.isRequired,
  handleShow: PropTypes.func.isRequired,
  session: sessionPropTypes.isRequired,
};

export default PersonalItem;
