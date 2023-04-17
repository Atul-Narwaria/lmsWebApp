import React, { Component } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';



function MatrialTable(props:{data:any,title:string}) {
  
  
    var columns:GridColDef[] = [];
    var rows:any = [];
      // Otherwise filter will be applied on fields such as the hidden column id
     if(props.title === 'users'){
        columns.push(
            { field: 'id', headerName: 'Id', flex:1 },
            { field: 'username', headerName: 'User Name', flex:1 },
            { field: 'name', headerName: 'Full Name', flex:1 },
            { field: 'email', headerName: 'email', flex:1 },
            { field: 'phone', headerName: 'Phone', flex:1 }
        )
     }
     console.log(props.data);
     
    if(props.data !== null  && props.data !== undefined){
       if(props.data.length !== 0){
        let datas = props.data.users;
        datas.map((e:any,i:any)=>{
            return rows.push({
                id:e.id,
                username:e.username,
                name:e.name,
                email:e.email,
                phone:e.phone
            })
        })
       }
    }

      return (
        <Box sx={{ height: 400, width: 1, background:'white'}}>
          <DataGrid
           sx={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            border: 1,
            borderColor: 'rgb(229 231 235)',
            borderRadius:3,
            padding:2,
            lineHeight: '24px',
           
            
          }}
          
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 30, page: 0 },
            },
          }}
          pageSizeOptions={[30, 60, 100]}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            componentsProps={{
                toolbar: {
                  csvOptions: { disableToolbarButton: true },
                  printOptions: { disableToolbarButton: true },
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
          />
        </Box>
      );
}

export default MatrialTable