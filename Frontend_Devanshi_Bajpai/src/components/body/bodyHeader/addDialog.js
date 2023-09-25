import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxWidth: "60rem !important",
    backgroundColor: "#a9a9a9 !important",
    color: "black !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
    width: "100% !important",
    color:'black'
  },
}));

const AddDialog = (props) => {
  const classes = useStyles();

  const [cust_id, setID] = useState("");
  const [sales_org, setSALES_ORG] = useState("");
  const [dist_channel, setDISTRIBUTION_CHANNEL] = useState("");
  const [cust_num, setCUSTOMER_NUMBER] = useState("");
  const [com_code, setCOMPANY_CODE] = useState("");
  const [ord_curr, setORDER_CURRENCY] = useState("");
  const [amnt_usd, setAMOUNT_IN_USD] = useState("");
  const [crea_date, setORDER_CREATION_DATE] = useState(new Date());
  

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/hrc/AddServlet?business_code=${cust_id}&cust_number=${sales_org}&clear_date=${dist_channel}&buisness_year=${cust_num}&doc_id=${com_code}&posting_date=${ord_curr}&document_create_date=${amnt_usd}&due_in_date=${crea_date}`;

    try {
      axios.get(url).then((res) => console.log(res.data));
    } catch (err) {
      console.log(err);
    }

    handleClose();
  };

  return (
    <>
      <Button
        style={{ color: "white", paddingLeft: "2rem", paddingRight: "2rem" }}
        onClick={handleClickOpen}
        size="medium"
      >
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>ADD DATA</DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item md={3}>
                <TextField
                  name="cust_id"
                  variant="outlined"
                  label="CUSTOMER ORDER ID"
                  size="small"
                  onChange={(e) => setID(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="sales_org"
                  variant="outlined"
                  label="SALES ORG"
                  size="small"
                  onChange={(e) => setSALES_ORG(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="dist_channel"
                  variant="outlined"
                  label="DISTRIBUTION CHANNEL"
                  size="small"
                  onChange={(e) => setDISTRIBUTION_CHANNEL(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="cust_num"
                  variant="outlined"
                  label="CUSTOMER NUMBER"
                  size="small"
                  onChange={(e) => setCUSTOMER_NUMBER(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="com_code"
                  variant="outlined"
                  label="COMPANY CODE"
                  size="small"
                  onChange={(e) => setCOMPANY_CODE(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="ord_curr"
                  variant="outlined"
                  label="ORDER CURRENCY"
                  size="small"

                  onChange={(e) => setORDER_CURRENCY(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="amnt_usd"
                  variant="outlined"
                  label="AMOUNT IN USD"
                  size="small"
                  onChange={(e) => setAMOUNT_IN_USD(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="crea_date"
                  variant="outlined"
                  label="Due Date"
                  size="small"
                  type="date"
                  
                  onChange={(e) => setORDER_CREATION_DATE(e.target.value)}
                  className={classes.txtBox}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
        <Button
            onClick={handleSubmit}
            variant="outlined"
            style={{ color: "white", borderColor: "white",backgroundColor:'#fc7500',width:'50%'}}
          >
            Add
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: "white", borderColor: "white" ,backgroundColor:' #db4437',width:'50%'}}
          >
            Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddDialog;
