import React from 'react'

function ButtonRedirect(props:{title:string,url?:string,icon?:string,bg?:string}) {
  return (
    <button className={`border px-4 py-2 ${props.bg?props.bg:'bg-secondary'} text-white font-medium rounded-[20px] shadow-lg `}>
        {props.title?props.title:''}
    </button>
  )
}

export default ButtonRedirect