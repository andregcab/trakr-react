import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { activityPropTypes, sessionPropTypes } from '../lib';

const PersonalItem = ({ activity, handleShow, session }) => {
  const hours = Math.floor(session.elapsedTime / 60);
  const minutes = session.elapsedTime % 60;

  return (
    <ListGroup horizontal="md" className="my-2 pe-0">
      <ListGroup.Item>
        <span className="item-label">Created at</span>
        <span>{moment(session.createdAt).format('L')}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Name</span>
        <span className="personal-set-width">{activity.clientName}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Time spent</span>
        <span>{`${hours}h ${minutes}m`}</span>
      </ListGroup.Item>
      <div className="btn-icons">
        <Tooltip title="copy" placement="right" arrow>
          <IconButton aria-label="copy" onClick={() => handleShow(activity.id)}>
            <ContentCopyIcon className="icon" />
          </IconButton>
        </Tooltip>
        <Tooltip title="edit" placement="right" arrow>
          <IconButton aria-label="edit" onClick={() => handleShow(activity.id)}>
            <EditIcon className="icon" />
          </IconButton>
        </Tooltip>
      </div>
    </ListGroup>
  );
};

PersonalItem.propTypes = {
  activity: activityPropTypes.isRequired,
  handleShow: PropTypes.func.isRequired,
  session: sessionPropTypes.isRequired,
};

export default PersonalItem;
