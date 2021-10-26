import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NoSessions = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="no-sessions">
      <h2>Hey, let&apos;s get your day started</h2>

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Ready to start your day?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Click on the &quot;+&quot; button to the bottom right of the screen to add a new
              session. Once you do, it will appear here on your dashboard.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Got it</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default NoSessions;
