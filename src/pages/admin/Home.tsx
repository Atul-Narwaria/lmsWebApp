import React, { useState } from 'react'
import { FaUserTie,FaUserFriends,FaStickyNote,FaBullhorn,FaTh } from "react-icons/fa";
import IconCard from '../../component/cards/IconCard';
import MatrialTable from '../../component/table/MatrialTable';
import { Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { Getusers } from '../../services/Users.service';


function Home() {
  const [userData , setuserData] = useState();
  const TopIconCard = [
    {name:'New Students',count:100,tagBg:'#00b5ad',icon:FaUserTie},
    {name:'Total Courses',count:1000,tagBg:'#00b5ad', icon:FaUserFriends},
    {name:'Total Teacher ',count:300,tagBg:'#00b5ad',icon:FaStickyNote},
    {name:'Fees Collection',count:100,tagBg:'#00b5ad',icon:FaTh},
  ]

  const {isLoading:userLoading, isError:userError } = useQuery({
    queryKey:['users'],
    queryFn:()=>Getusers(),
    onSuccess:(data)=>{
      setuserData(data);
    }
  });


  return (
  <>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
     {TopIconCard?.map((e,i)=>(
      <IconCard name={e.name} key={i} icon={e.icon} number={e.count} tagBg={e.tagBg} />
     ))}
   </section>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
    <div className="flex w-full justify-center items-center gap-3 flex-col md:flex-row">
     
    </div>
    <div className="flex w-full justify-center items-center gap-3 flex-col md:flex-row">

    </div>
    <div className="flex w-full justify-center items-center gap-3 flex-col md:flex-row">

    </div>
   </section>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
      <MatrialTable data={userData} title='users' />
      
   </section>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
      <MatrialTable data={userData} title='users' />
      
   </section>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
      <MatrialTable data={userData} title='users' />
      
   </section>
  
  
  </>
  )
}

export default Home