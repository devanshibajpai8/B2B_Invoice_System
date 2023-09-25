import React,{useState} from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";


const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    backgroundColor: "white !important",
    color: "black !important",
  },
  txtBox: {
    backgroundColor: "#FFFFFF !important",
    borderRadius: "0.3rem !important",
  },
}));


const AdvanceSearch = (props) => {
    const classes = useStyles();
    const [doc_id,set_doc_id] = useState("");
    const [inv_id,set_inv_id] = useState("");
    const [cust_num,set_cust_num] = useState("");
    const [bus_year,set_bus_year] = useState("");

    const [open, setOpen] = useState(false);

    const handleSearch = () =>{
      const advSearch_arr = [];
      advSearch_arr.push(doc_id);
      advSearch_arr.push(inv_id);
      advSearch_arr.push(cust_num);
      advSearch_arr.push(bus_year);
      console.log(advSearch_arr);
      props.adv_Search(advSearch_arr);
      setOpen(false)
    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
      <Button
        variant="outlined"
        style={{ color: "black",
        position: "absolute",
        top: "110px",
        right: "25px",
        height:'60px',
        width:'100px',
        backgroundColor: "#8fd163"}}
        onClick={handleClickOpen}
        size="medium"
      >
      ADVANCED SEARCH
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Advance Search</DialogTitle>
        <DialogContent >
          <form noValidate autoComplete="off"  >
            <Grid item md={2}>
              <Grid item md={6}>
                <TextField
                  name="doc_id"
                  variant="outlined"
                  label="Customer Order ID"
                  onChange={(e) => set_doc_id(e.target.value)}
                  className={classes.txtBox}
                  style={{marginTop:'10px'}}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  name="inv_id"
                  variant="outlined"
                  label="Customer Number"
                  onChange={(e) => set_inv_id(e.target.value)}
                  className={classes.txtBox}
                  style={{marginTop:'10px'}}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="cust_num"
                  variant="outlined"
                  label="Sales Org"
                  onChange={(e) => set_cust_num(e.target.value)}
                  className={classes.txtBox}
                  style={{marginTop:'10px'}}
                />
                <Grid>
                <Button
            onClick={handleSearch}
            variant="outlined"
            style={{ color: "black", borderColor: "black",marginTop:'20px' }}
          >
          Search
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: "black", borderColor: "black",marginTop:'20px',marginLeft:'27px'}}
          >
          CANCEL
          </Button>
          </Grid>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );

 }

 export default AdvanceSearch