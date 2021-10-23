import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import { activityPropTypes, sessionPropTypes } from '../lib';

const BillableItem = ({ activity, handleShow, session }) => {
  const hours = Math.floor(session.elapsedTime / 60);
  const minutes = session.elapsedTime % 60;

  return (
    <ListGroup horizontal="md" className="my-3 pe-0">
      <ListGroup.Item>
        <span className="item-label">Created on</span>
        <span>{moment(session.createdAt).format('L')}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Client#</span>
        <span className="client-number">{activity.clientNumber}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Client name</span>
        <span className="set-width">{activity.clientName}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Eng name</span>
        <span className="set-width">{activity.engName}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="item-label">Charge code</span>
        <span className="set-width">{activity.chargeCode}</span>
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

BillableItem.propTypes = {
  activity: activityPropTypes.isRequired,
  handleShow: PropTypes.func.isRequired,
  session: sessionPropTypes.isRequired,
};

export default BillableItem;
