import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { sessionPropTypes } from 'components/lib';
import SessionCard from './SessionCard';

const CardGrid = ({ sessions, handleShow }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start">
      {sessions.map((session) => (
        <Grid item xs={12} md={4}>
          <SessionCard key={session.id} session={session} handleShow={handleShow} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

CardGrid.propTypes = {
  handleShow: PropTypes.func.isRequired,
  sessions: PropTypes.arrayOf(sessionPropTypes).isRequired,
};

export default CardGrid;
