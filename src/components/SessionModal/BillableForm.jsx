import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';
import { activityPropTypes } from '../lib';
// import SearchInput from './SearchInput';

const BillableForm = ({ activity, handleChange }) => {
  return (
    <Box className="d-flex flex-column" component="form" autoComplete="off">
      {/* <SearchInput /> */}
      <TextField
        label="Client name"
        className="m-3"
        variant="standard"
        value={activity.clientName}
        onChange={(e) => {
          handleChange(e.target.value, 'clientName');
        }}
      />
      <TextField
        label="Client number"
        className="m-3"
        variant="standard"
        value={activity.clientNumber}
        onChange={(e) => {
          handleChange(e.target.value, 'clientNumber');
        }}
      />
      <TextField
        label="Eng name"
        className="m-3"
        variant="standard"
        value={activity.engName}
        onChange={(e) => {
          handleChange(e.target.value, 'engName');
        }}
      />
      <TextField
        label="Charge code"
        className="m-3"
        variant="standard"
        value={activity.chargeCode}
        onChange={(e) => {
          handleChange(e.target.value, 'chargeCode');
        }}
      />
      <TextField
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
