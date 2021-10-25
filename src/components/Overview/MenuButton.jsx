import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Menu, IconButton } from '@mui/material';
import { ContentCopy, Delete, MoreVert, Edit } from '@mui/icons-material';

const BillableItem = ({ handleShow }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="btn-icons">
      <IconButton
        id="actions-btn"
        aria-controls="item-actions"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="item-actions"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'actions-btn',
        }}
      >
        <MenuItem onClick={() => handleShow('edit')}>
          <IconButton aria-label="edit">
            <Edit className="icon" />
          </IconButton>
          <span id="menu-text">Edit</span>
        </MenuItem>
        <MenuItem onClick={() => handleShow('edit')}>
          <IconButton aria-label="copy">
            <ContentCopy className="icon" />
          </IconButton>
          <span>Copy</span>
        </MenuItem>
        <MenuItem onClick={() => handleShow('delete')}>
          <IconButton aria-label="delete">
            <Delete className="icon" />
          </IconButton>
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

BillableItem.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default BillableItem;
