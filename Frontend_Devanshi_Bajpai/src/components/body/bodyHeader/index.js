import React from "react";
import AddDialog from "./addDialog";
import DeleteDialog from "./deleteDialog";
import EditDialog from "./editDialog";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@material-ui/core";
import AdvanceSearch from "./advanceSearch";
import TextField from "@mui/material/TextField";
import "./style.css";
import { Predict } from "./predict";
import RefreshIcon from "@material-ui/icons/Refresh";
import { AnalyticsView } from "./analyticsView";

const BodyHeader = (props) => {
  console.log(props.currentRow);
  return (
    <div className="parentBodyHeader">
      <Button 
        variant="outlined"
        onClick={() => window.location.reload(true)}
        className="refreshBtn"
        style={{height:'30px',width:'2px',borderRadius:'50px',color: "white",backgroundColor:'#fc7500'}}
        ><RefreshIcon />
        </Button>
      <ButtonGroup>
        
        <button  variant="outlined" style={{border:'none',backgroundColor:'#a9a9a9',color:'white'}}><a href="/">HOME PAGE</a></button>
      <AddDialog />
      <AnalyticsView />
        
        <AdvanceSearch adv_Search={props.adv_Search} />
      </ButtonGroup>
      <TextField
        type="search"
        variant="outlined"
        label="Search Customer Id"
        onChange={(e) => props.searchItems(e.target.value)}
        className="searchBox"
        size="small"
        style={{position: "absolute",
        top: "120px",
        right: "145px",
  }}  />
      <ButtonGroup className="btnGrp">
        <EditDialog currentRow={props.currentRow} select={props.select}/>
        <DeleteDialog currentRow={props.currentRow} select={props.select} />
        <Predict currentRow={props.currentRow} />
      </ButtonGroup>
    </div>
  );
};

export default BodyHeader;
