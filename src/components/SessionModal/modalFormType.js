import React from 'react';
import { Box, TextField } from '@mui/material';

export const modalFormType = ({ activity, handleChange }) => {
  return {
    PERSONAL: (
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
    ),
    BILLABLE: (
      <Box className="d-flex flex-column" component="form" autoComplete="off">
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
          label="Client name"
          className="m-3"
          variant="standard"
          value={activity.clientName}
          onChange={(e) => {
            handleChange(e.target.value, 'clientName');
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
    ),
  }[activity.activityType];
};
