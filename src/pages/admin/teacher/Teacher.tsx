import React, { useState } from 'react'
import MatrialTable from '../../../component/table/MatrialTable'
import { useQuery } from 'react-query';
import { Getusers } from '../../../services/Users.service';
import IconCard from '../../../component/cards/IconCard';
import { FaUserTie,FaUserFriends,FaStickyNote,FaBullhorn,FaTh } from "react-icons/fa";
function Teacher() {
  const [userData , setuserData] = useState();
  const TopIconCard = [
    {name:'New Teacher',count:100,tagBg:'#00b5ad',icon:FaUserTie},
    {name:'Total Teacher',count:1000,tagBg:'#00b5ad', icon:FaUserFriends},
    {name:'Absent Teacher ',count:300,tagBg:'#00b5ad',icon:FaStickyNote},
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
  <div className=' w-100  items-center my-3 w-100 relative'>
    <section className='flex justify-between'>
      <h1 className=' font-medium text-[2rem] '>Teacher</h1>
      <button  className={`border px-4 py-2 bg-primary text-white font-medium rounded-[20px] shadow-lg `}>
        Add Teacher
      </button>
    </section>
  <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
     {TopIconCard?.map((e,i)=>(
      <IconCard name={e.name} key={i} icon={e.icon} number={e.count} tagBg={e.tagBg} />
     ))}
   </section>
   <div>

   </div>
  </div>
    <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
      <MatrialTable data={userData} title='teachers' heigth={600} />
      
   </section>
 </>
  )
}

Teacher.propTypes = {}

export default Teacher
