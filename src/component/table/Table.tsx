import React from 'react'
import avtar from '../../assets/imgs/avtar.jpg';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { generateRandomAttendance, generateRandomClass, generateRandomClassSection } from '../../helpers/randomAlphaNum';


function BasicTable(props:{data:any,title:string,name?:string,heigth?:number}) {
    var columns:GridColDef[] = [];
    var rows:any = [];
    if(props.title  === 'teacherAttendance'){
      columns.push(
        { field: 'id', headerName: 'Id', flex:0.1, },
        { field: 'name', headerName: 'Teacher Name', flex:0.5 },
        { field: 'class', headerName: 'class', flex:0.1},
        { field: 'section', headerName: 'section', flex:0.1},
        { field: 'attendance', headerName: 'attendance', flex:0.2 }
    )
        if(props.data != undefined && props.data.length != 0){
          let datas = props.data.users;
          datas.map((e:any,i:any)=>{
            return rows.push({
                id:e.id,
                name:e.username,
                class:generateRandomClass(),
                section:generateRandomClassSection(),
                attendance:generateRandomAttendance()
            })
        })
        }
    }


  return (
    <Box sx={{ height: props.heigth?props.heigth:500,  flex:1 ,flexGrow:1, background:'white', position:'relative'}}>
    <h1 className=" font-bold sm:top-1   text-xl absolute top-3 left-5 z-20 ">{props.name ? props.name :''}</h1>
    
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
   
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      columns={columns}
    />
  </Box>
  )
}

export default BasicTable