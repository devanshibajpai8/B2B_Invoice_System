import { Button } from '@mui/material'
import React from 'react'

export const Predict = (props) => {
  return (
    <div>
      <Button
        disabled={!props.currentRow}
        variant="contained"
        style={{ color: "white",backgroundColor:'blue',marginLeft:'10px'}}
        size="medium"
      >
        Predict
      </Button>
    </div>
  );

 }