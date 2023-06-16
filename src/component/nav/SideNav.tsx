import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function SideNav(props:any) {
  const URLPathName = window.location.pathname;
  var menus:any = [];
  if( URLPathName.split('/')[1] === 'admin' ){
    menus = [
      { name: "dashboard", link: "/admin/dashboard", icon: MdOutlineDashboard },
      { name: "Teacher", link: "/admin/teacher", icon: AiOutlineUser },
      { name: "user", link: "/admin/user", icon: AiOutlineUser },
      { name: "messages", link: "/admin/message", icon: FiMessageSquare, margin: true },
      { name: "Setting", link: "/admin/setting", icon: RiSettings4Line },
    ];
  }
     
  return (
    <section className={`flex gap-6 fixed shadow-lg  `}>
      <div
        className={`   bg-gradient-to-r from-primary shadow-md to-secondary min-h-screen ${
          props.sideopen ? "w-[60vw]  md:w-[25vw] lg:w-[18vw]   lg:block md:block   " : "lg:w-[5vw] md:w-[0]  hidden lg:block md:hidden  "
        } duration-500 text-gray-100 px-4  `}
      >
        <div className={`  mt-4   hidden sm:hidden md:block text-center  ` }>
            <div className="flex justify-center">
            <img
              className="block h-8 w-auto lg:hidden "
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            </div>
            
          </div>
        <div className={`top-[13vh]  absolute  md:top-[13vh] flex flex-col gap-4 ${
          props.sideopen ? "w-[11vw]  md:w-[20vw] lg:w-[16vw]    " : "w-[3vw]   "
        } `}>
          {menus?.map((menu:any, i:any) => (
            <NavLink
              key={i}
              to={menu.link} 
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-lg  gap-3.5 font-sm p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="p-1" >{React.createElement(menu?.icon, { size: "23" })}</div>
              <h2
                style={{
                  transitionDelay: `50ms`,
                }}
                className={`whitespace-pre duration-500  ${
                  !props.sideopen && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  props.sideopen && "hidden"
                } absolute left-48 bg-gradient-to-r from-primary to-secondary  font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
    
    </section>
  )
}

export default SideNav