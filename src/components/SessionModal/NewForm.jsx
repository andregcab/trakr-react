import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { modalFormType } from './modalFormType';
import { activityPropTypes } from '../lib';

const NewForm = ({ currentActivity, handleChange }) => {
  const [activityType, setActivityType] = useState('');
  const formType = modalFormType({ activity: currentActivity, handleChange });

  return (
    <Box>
      <FormControl className="activity-select">
        <InputLabel>Activity Type</InputLabel>
        <Select
          variant="standard"
          value={activityType}
          label="Activity Type"
          onChange={(e) => {
            handleChange(e.target.value, 'activityType');
            setActivityType(e.target.value);
          }}
        >
          <MenuItem value="BILLABLE">Billable</MenuItem>
          <MenuItem value="PERSONAL">Personal</MenuItem>
        </Select>
      </FormControl>
      {formType}
    </Box>
  );
};

NewForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currentActivity: activityPropTypes.isRequired,
};

export default NewForm;
