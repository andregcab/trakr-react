import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const NewForm = ({ handleChange }) => {
  const [activityType, setActivityType] = useState('');

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Activity Type</InputLabel>
        <Select
          className="mb-4"
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
    </Box>
  );
};

NewForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default NewForm;
