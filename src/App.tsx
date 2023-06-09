import React,{lazy, Suspense, useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,
  Route,
  Link, 
  } from "react-router-dom";
import SideNav from './component/nav/SideNav';
import TopNav from './component/nav/TopNav';
import Teacher from './pages/admin/teacher/Teacher';
import { QueryClient, QueryClientProvider } from 'react-query';

const AdminHome = lazy(()=> import('./pages/admin/Home'))
const WebSiteHome =  lazy(()=>import('./pages/website/Home'))
const WebsiteLogin = lazy(()=>import('./pages/website/Login'))
const queryClient = new QueryClient()
  // console.log(location.pathname)
function App() {
  const [sideopen, setSideopen] = useState(false)
  const URLPathName = window.location.pathname;
  // console.log(URLPathName.split('/')[1])
  return (
    <>
    <QueryClientProvider client={queryClient}>
       <main className='w-[100%]  relative '>
       <Router>
     {
      URLPathName.split('/')[1] === 'admin' ?
      (
        <>
        <SideNav sideopen={sideopen} setSideopen={setSideopen} />
      <TopNav sideopen={sideopen} setSideopen={setSideopen} />
      <section className={`pt-[8vh] absolute   z-[-99] ${sideopen ? 'left-[0.0]  md:left-[0] lg:left-[17vw] md:w-[100vw] lg:w-[81.92vw] w-[100vw] ' : 'left-[0.0rem] sm:left-[0.0rem] md:left-[0] lg:left-[4rem] md:w-[100vw] lg:w-[94.7vw] w-[100vw]'} duration-500 `}>
       <div className=' min-h-[92vh]'>
       <section className='p-2 lg:p-10 md:p-5 '>
         <Suspense fallback={<h1>Loading</h1>}>
       <Routes>
        <Route path="/admin/dashboard"  element={    <AdminHome />} />
        <Route path="/admin/teacher" element={    <Teacher />} />
        
        <Route path="/admin/user" element={    <AdminHome />} />
        <Route path="/admin/message" element={    <AdminHome />} />
        <Route path="/admin/setting" element={    <AdminHome />} />
      </Routes>
      </Suspense>
       </section>
       </div>
      </section>
        </>
       )
     :
     
     <Routes>
     <Route path="/" element={<WebSiteHome />} />
     <Route path="/login" element={<WebsiteLogin />} />
     
     </Routes>
     } 
     
       
   </Router>
       </main>
       </QueryClientProvider>
   
    </>
    
  );
}

export default App;
