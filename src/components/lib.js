import PropTypes from 'prop-types';

export const activityPropTypes = PropTypes.shape({
  id: PropTypes.string,
  activityType: PropTypes.string,
  engName: PropTypes.string,
  chargeCode: PropTypes.string,
  clientName: PropTypes.string,
  clientNumber: PropTypes.string,
  comment: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  sessionId: PropTypes.string,
});

export const sessionPropTypes = PropTypes.shape({
  id: PropTypes.string,
  lastStarted: PropTypes.string,
  elapsedTime: PropTypes.number,
  inSession: PropTypes.bool,
  createdAt: PropTypes.string,
  userId: PropTypes.number,
  activities: PropTypes.arrayOf(activityPropTypes),
});
