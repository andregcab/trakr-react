import React from 'react';
import { Button, Card, CardHeader, CardActions, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { UPDATE_SESSION } from 'graphql/mutations';
import { sessionPropTypes } from 'components/lib';
import { useElapsedTime } from './useElapsedTime';
import MenuButton from '../MenuButton';

const SessionCard = ({ session, handleShow }) => {
  const [sessionUpdate] = useMutation(UPDATE_SESSION);

  const handleUpdate = (data) => {
    sessionUpdate({
      variables: {
        id: session.id,
        data,
      },
    });
  };

  const { hours, minutes, seconds, displayedTime } = useElapsedTime(session);
  const { inSession } = session;
  const billableActivity = session.activity.activityType === 'BILLABLE';
  const timeColor = inSession ? '#91b194' : '#ff4646d1';

  return (
    <Card elevation={8} className="session-card">
      <CardHeader
        action={<MenuButton noCopy handleShow={handleShow} session={session} />}
        title={session.activity.clientName}
        subheader={`${billableActivity ? 'Billable' : 'Personal'} task`}
      />
      <CardContent>
        <Typography variant="h5" sx={{ mb: 3 }} color={timeColor} gutterBottom>
          {`${hours}h ${minutes}m ${seconds}s`}
        </Typography>
        <Typography className="billable-text" sx={{ mb: 1.5 }} color="text.secondary">
          {billableActivity && `Eng name: ${session.activity.engName}`}
        </Typography>
        <Typography className="billable-text" sx={{ mb: 1.5 }} color="text.secondary">
          {billableActivity && `Charge code: ${session.activity.chargeCode}`}
        </Typography>
      </CardContent>
      <CardActions className="justify-content-center">
        {inSession ? (
          <Button
            color="error"
            variant="outlined"
            onClick={() => handleUpdate({ inSession: false, elapsedTime: displayedTime })}
          >
            Stop
          </Button>
        ) : (
          <Button
            color="success"
            variant="outlined"
            onClick={() => handleUpdate({ inSession: true, lastStarted: new Date().toISOString() })}
          >
            Start
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

SessionCard.propTypes = {
  handleShow: PropTypes.func.isRequired,
  session: sessionPropTypes.isRequired,
};

export default SessionCard;
