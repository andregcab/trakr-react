import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { sessionPropTypes } from 'components/lib';
import { useElapsedTime } from './useElapsedTime';

const SessionCard = ({ session }) => {
  const { inSession } = session;
  const { hours, minutes } = useElapsedTime(session);
  const billableActivity = session.activity.activityType === 'BILLABLE';
  return (
    <Card elevation={8} className="session-card">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={session.activity.clientName}
        subheader={`${billableActivity ? 'Billable' : 'Personal'} task`}
      />
      <CardContent>
        <Typography variant="h5" sx={{ mb: 3 }} color="text.secondary" gutterBottom>
          {`${hours}h ${minutes}m`}
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
          <Button color="error" variant="outlined">
            Stop
          </Button>
        ) : (
          <Button color="success" variant="outlined">
            Start
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

SessionCard.propTypes = {
  session: sessionPropTypes.isRequired,
};

export default SessionCard;
