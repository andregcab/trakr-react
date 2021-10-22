import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { activityPropTypes } from '../lib';

const PersonalForm = ({ activity, handleChange }) => (
  <Box className="d-flex flex-column" component="form" autoComplete="off">
    <TextField
      id="outlined-required"
      label="Comment"
      className="m-3"
      variant="standard"
      value={activity.comment}
      onChange={(e) => {
        handleChange(e.target.value, 'comment');
      }}
    />
    <TextField
      id="outlined-required"
      label="Name"
      className="m-3"
      variant="standard"
      value={activity.clientName}
      onChange={(e) => {
        handleChange(e.target.value, 'clientName');
      }}
    />
  </Box>
);

PersonalForm.propTypes = {
  activity: activityPropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PersonalForm;
