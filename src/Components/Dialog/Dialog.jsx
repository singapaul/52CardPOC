import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from "@material-ui/core";

const DialogComp = ({
  showModal,
  title,
  children,
  buttonLabel,
  buttonAction,
}) => {
  return (
    <Dialog
      open={showModal}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={buttonAction} color="primary">
          {buttonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComp;
