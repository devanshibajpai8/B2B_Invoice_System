import React, { useState, useEffect } from "react";
import BodyHeader from "./bodyHeader";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Refresh } from '@material-ui/icons';
import { XGrid } from '@mui/x-data-grid';

const columns = [
  { field: "SI_No", headerName: "SI No", width: 60 },
  { field: "cust_ord", headerName: "CUSTOMER ORDER ID",width: 180 },
  { field: "sales_org", headerName: "SALES ORG" },
  { field: "dist_channel", headerName: "DISTRIBUTION CHANNEL", width: 200 },
  { field: "com_code", headerName: "COMPANY CODE",width:150 },
  { field: "order_creat_date", headerName: "ORDER CREATION DATE", width: 200 },
  { field: "ord_amnt", headerName: "ORDER AMOUNT", width: 150 },
  { field: "ord_curr", headerName: "ORDER CURRENCY", width: 150},
  { field: "cust_num", headerName: "CUSTOMER NUMBER",width:170 },
  { field: "amnt_usd", headerName: "AMOUNT IN USD",width:150 },
];

export const Body = (props) => {
  const [checkboxSelection, setCheckboxSelection] = useState(true);
  const [currentRow, setCurrentRow] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [tableData, setTableData] = useState([]);
  const [searched, setSearched] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [select, setSelection] = useState([]);
  const [adv_arr, setAdv_arr] = useState([]);

  const adv_Search = (advSearch_arr) => {
    console.log(advSearch_arr);

    if (advSearch_arr.length !== 0) {
      const filteredRows = tableData.filter((row) => {
        return (
          row.buisness_year
            .toLowerCase()
            .includes(advSearch_arr[3].toLowerCase()) &&
          row.cust_number
            .toString()
            .toLowerCase()
            .includes(advSearch_arr[2].toLowerCase()) &&
          row.invoice_id
            .toString()
            .toLowerCase()
            .includes(advSearch_arr[1].toLowerCase()) &&
          row.doc_id.toLowerCase().includes(advSearch_arr[0].toLowerCase())
        );
      });
      setFilteredData(filteredRows);
      setAdv_arr(advSearch_arr);
    } else {
      setFilteredData(tableData);
    }
  };

  const searchItems = (searchVal) => {
    setSearched(searchVal);
    if (searched !== "") {
      const filteredRows = tableData.filter((row) => {
        return (
          row.buisness_year.toLowerCase().includes(searched.toLowerCase()) ||
          row.cust_number
            .toString()
            .toLowerCase()
            .includes(searched.toLowerCase()) ||
          row.invoice_id
            .toString()
            .toLowerCase()
            .includes(searched.toLowerCase()) ||
          row.doc_id.toLowerCase().includes(searched.toLowerCase())
        );
      });
      setFilteredData(filteredRows);
    } else {
      setFilteredData(tableData);
    }
  };

  const handleRowSelection = (e) => {
    setSelection(e);
    if (e.length > 0) setCurrentRow(true);
    else setCurrentRow(false);
    console.log(select);
  };



  const addRow = () => {
    const newRow = {
      SI_No: 1,
      cust_ord: 754349803,
      sales_org: 3911,
      dist_channel: "United Arab Emirates",
      com_code: 3290,
      order_creat_date: "01-01-2022",
      ord_amnt: 1405.54,
      ord_curr: "AED",
      cust_num: 1210499770,
      amnt_usd: 0,
    };
    setTableData((prevData) => [...prevData, newRow]);
  };
  
  
  return (
    <div style={{ backgroundColor: "#a9a9a9",border:' 5px solid #fc7500',borderColor:'orange' }}>
      <BodyHeader
        currentRow={currentRow}
        searchItems={searchItems}
        select={select}
        adv_Search={adv_Search}
      />

      <div style={{ height: 400, width: "100%" }}>
        {searched.length > 1 || adv_arr.length > 1 ? (
          <DataGrid
            getRowId={(r) => r.sl_no}
            sx={{
              ".MuiDataGrid-columnSeparator": {
                display: "none",
              },
              ".MuiDataGrid-row:nth-child(even)": {
                backgroundColor: " #a9a9a9",
              },
              ".MuiTablePagination-root, .MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
              "& .MuiDataGrid-columnHeaderTitle": {

                lineHeight: "1.5rem",
                whiteSpace: "normal",
              },
              border: "none",
              color: "#FFFFFF",
            }}
            rows={filteredData}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection={checkboxSelection}
            onSelectionModelChange={handleRowSelection}
            selectionModel={select}
            disableSelectionOnClick={true}
          />
        ) : (
          <DataGrid
            getRowId={(r) => r.sl_no}
            sx={{
              ".MuiDataGrid-columnSeparator": {
                display: "none",
              },
              ".MuiDataGrid-row:nth-child(even)": {
                backgroundColor: "#a9a9a9",
              },
              ".MuiTablePagination-root, .MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                overflow: "visible",
                lineHeight: "1.5rem",
                whiteSpace: "normal",
              },
              // ".MuiDataGrid-columnHeaders":{
              //   paddingBottom: "0.5rem",
              // },
              border: "none",
              color: "#FFFFFF",
            }}
            rows={tableData}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection={checkboxSelection}
            onSelectionModelChange={handleRowSelection}
            selectionModel={select}
            disableColumnFilter={true}
          />
        )}
      </div>
    </div>
  );
};

