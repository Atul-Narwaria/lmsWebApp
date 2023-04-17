import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MatrialTable from '../../../component/table/MatrialTable'
import { Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { Getusers } from '../../../services/Users.service';
function Teacher() {
  const [userData , setuserData] = useState();
  const {isLoading:userLoading, isError:userError } = useQuery({
    queryKey:['users'],
    queryFn:()=>Getusers(),
    onSuccess:(data)=>{
      setuserData(data);
    }
  });

  return (
 <>
  <div className='flex justify-between gap-3 w-full  items-center my-3'>
    <h1 className=' text-xl font-medium font-sans'>Teacher</h1>
   
  </div>
    <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
      <MatrialTable data={userData} title='users' />
      
   </section>
 </>
  )
}

Teacher.propTypes = {}

export default Teacher
