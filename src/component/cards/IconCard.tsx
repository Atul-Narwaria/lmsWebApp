import React from 'react'

function IconCard(props:any) {
  return (
    <div className=' bg-white border-r-4 border-r-primary relative w-full flex  border border-gray-200   px-[1rem] py-[1rem] hover:shadow-lg shadow-md  cursor-pointer rounded-xl  text-gray-700 justify-between item-center '  >
      <div >
      { React.createElement(props.icon,{ size: '40', color: "#1e2121" })}
      </div>
     <div className='text-right'>
     <p className=' text-lg font-mono font-bold '>{props.name}</p>
     <p className=' text-cyan-600  font-medium'>{props.number}  </p>
     </div>
</div> 
  )
}

export default IconCard