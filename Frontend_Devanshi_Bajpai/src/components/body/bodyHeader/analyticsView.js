import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxWidth: "60rem !important",
    backgroundColor: " #a9a9a9 !important",
    color: "#FFFFFF !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
    width: "100% !important",
  },
}));

export const AnalyticsView = (props) => {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [start_cl_date, set_start_cl_date] = useState(new Date());
  const [end_cl_date, set_end_cl_date] = useState(new Date());
  const [start_due_date, set_start_due_date] = useState(new Date());
  const [end_due_date, set_end_due_date] = useState(new Date());
  const [start_base_date, set_start_base_date] = useState(new Date());
  const [end_base_date, set_end_base_date] = useState(new Date());
  const [curr, setCurr] = useState(new Date());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("Submit");
    //console.log(cl_date);
    handleClose();
  };
  return (
    <div>
      <Button
        style={{ color: "white", paddingLeft: "1.2rem", paddingRight: "1.2rem" }}
        size="medium"
        onClick={handleClickOpen}
      >
        Analytics View
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        // aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Analytics View</DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={5}>
              <Grid item>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  label="Distribution Channel"
                  size="small"
                  className={classes.txtBox}
                  onChange={(e) => set_start_cl_date(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="clear_date"
                  variant="outlined"
                  //label="Clear Date"
                  size="small"
                  label="CUSTOMER NUMBER"
                  className={classes.txtBox}
                  onChange={(e) => set_start_due_date(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            View
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
