import React, { Component } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import ButtonRedirect from "../button/ButtonRedirect";



function MatrialTable(props:{data:any,title:string,name?:string,heigth?:number}) {
  
  
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
     }else if(props.title === 'teachers'){
      columns.push(
        { field: 'id', headerName: 'Id', flex:1 },
        { field: 'name', headerName: 'Full Name', flex:1 },
        { field: 'email', headerName: 'email', flex:1 },
        { field: 'phone', headerName: 'Phone', flex:1 },
        { field: 'department', headerName: 'Department', flex:1 },
        { field: 'gender', headerName: 'Gender', flex:1 },
        { field: 'joinDate', headerName: 'joining Date', flex:1 },
        { field: 'action', headerName: 'Action', flex:1, sortable: false, renderCell: ({ row }) =>
        <div className="flex gap-2">
        <button className="border  px-4 py-2 text-white font-medium rounded-[20px] shadow-lg bg-dark-purple" onClick={()=>{alert("btn1");console.log(row.name)}}  > Edit</button>
        <button className="border px-4 py-2 text-white font-medium rounded-[20px] shadow-lg bg-[red]" onClick={()=>alert("btn2")}  > Delete</button>
        </div>
        
    },
    )
    if(props.data !== null  && props.data !== undefined){
      if(props.data.length !== 0){
       let datas = props.data.users;
       datas.map((e:any,i:any)=>{
           return rows.push({
               id:e.id,
               name:e.firstName+" "+e.lastName,
               email:e.email,
               phone:e.phone,
               gender:e.gender,
               department:"department",
               joinDate:e.birthDate,


           })
       })
      }
   }
     }
     
    

      return (
        <Box sx={{ height: props.heigth?props.heigth:500, width: 1, background:'white', position:'relative'}}>
          <h1 className=" font-bold text-xl absolute top-3 left-5 z-20">{props.name ? props.name :''}</h1>
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