import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { activityPropTypes } from '../lib';

const BillableForm = ({ activity, handleChange }) => {
  return (
    <Box className="d-flex flex-column" component="form" autoComplete="off">
      <TextField
        id="outlined-required"
        label="Client name"
        className="m-3"
        variant="standard"
        value={activity.clientName}
        onChange={(e) => {
          handleChange(e.target.value, 'clientName');
        }}
      />
      <TextField
        id="outlined-required"
        label="Client number"
        className="m-3"
        variant="standard"
        value={activity.clientNumber}
        onChange={(e) => {
          handleChange(e.target.value, 'clientNumber');
        }}
      />
      <TextField
        id="outlined-required"
        label="Charge code"
        className="m-3"
        variant="standard"
        value={activity.chargeCode}
        onChange={(e) => {
          handleChange(e.target.value, 'chargeCode');
        }}
      />
      <TextField
        id="outlined-required"
        className="m-3"
        multiline
        rows="3"
        label="Comment"
        variant="standard"
        value={activity.comment}
        onChange={(e) => {
          handleChange(e.target.value, 'comment');
        }}
      />
    </Box>
  );
};

BillableForm.propTypes = {
  activity: activityPropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BillableForm;
