import React from 'react'
import logo from "../assets/logo.jpg"

const SidebarButtons = ({text}) => {
  return (
    <div className='bg-purple-500'>
        <img src={logo} alt="" />
        <p>
            {text}
        </p>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.97641 6.00058L0.851593 1.87577L2.03011 0.697266L7.33341 6.00058L2.03011 11.3038L0.851593 10.1253L4.97641 6.00058Z" fill="white"/>
</svg>

    </div>
  )
}

export default SidebarButtons