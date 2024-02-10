import React from 'react'

const SidebarButtons = ({text,logo}) => {
  return (
    <div className=' w-[18rem] p-4 flex h-14 items-center place-content-between'>
     
        <p className='flex  items-center font-bold place-content-evenly text-2xl text-white'>
        {logo} 
            {text}
        </p>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.97641 6.00058L0.851593 1.87577L2.03011 0.697266L7.33341 6.00058L2.03011 11.3038L0.851593 10.1253L4.97641 6.00058Z" fill="white"/>
</svg>

    </div>
  )
}

export default SidebarButtons