import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import { activityPropTypes } from '../lib';

const PersonalForm = ({ activity, handleChange }) => (
  <Box className="d-flex flex-column" component="form" autoComplete="off">
    <TextField
      label="Name"
      className="m-3"
      variant="standard"
      value={activity.clientName}
      onChange={(e) => {
        handleChange(e.target.value, 'clientName');
      }}
    />
    <TextField
      className="m-3"
      label="Comment"
      multiline
      rows="3"
      variant="standard"
      value={activity.comment}
      onChange={(e) => {
        handleChange(e.target.value, 'comment');
      }}
    />
  </Box>
);

PersonalForm.propTypes = {
  activity: activityPropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PersonalForm;
