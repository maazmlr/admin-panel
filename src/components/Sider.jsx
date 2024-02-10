import React from 'react'
import SidebarButtons from './SidebarButtons'

const Sider = () => {
  
  const logo1=<svg width="22" height="22" viewBox="0 0 22 22" fill="none" className='mr-4' xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0.5C16.3513 0.5 21.5 5.64873 21.5 12C21.5 12.3369 21.4855 12.6704 21.4571 13H19.9506C19.4489 18.0533 15.1853 22 10 22C4.47715 22 0 17.5228 0 12C0 6.81465 3.94668 2.5511 9 2.04938V0.542876C9.3296 0.514488 9.6631 0.5 10 0.5ZM9 4.06189C5.05369 4.55399 2 7.92038 2 12C2 16.4183 5.58172 20 10 20C14.0796 20 17.446 16.9463 17.9381 13H9V4.06189ZM11 2.552V11H19.448C18.9827 6.55197 15.448 3.01732 11 2.552Z" fill="white"/>
  </svg>
  return (
    <div className='sidebar-container bg-[#457F] h-[89.6vh]  w-[18rem]'>
        <h1 className='text-4xl text-center font-bold text-white py-10'>Control Panel </h1>
        <br className='line' />
        <SidebarButtons logo={logo1} text={"Post"}/>
        <SidebarButtons logo={logo1} text={"Users"}/>
        <SidebarButtons logo={logo1} text={"Blue Tick"}/>
        <SidebarButtons logo={logo1} text={"Boost posts"}/>
        <SidebarButtons logo={logo1} text={"Ads"}/>


        

        </div>
  )
}

export default Sider