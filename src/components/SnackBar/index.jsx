import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({ showSnack, hideSnack }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={4000}
      open={showSnack}
      onClose={hideSnack}
    >
      <Alert onClose={hideSnack} severity="success">
        {`Session ${showSnack}!`}
      </Alert>
    </Snackbar>
  );
};

SnackBar.propTypes = {
  showSnack: PropTypes.shape({ updated: PropTypes.bool, deleted: PropTypes.bool }).isRequired,
  hideSnack: PropTypes.func.isRequired,
};

export default SnackBar;
