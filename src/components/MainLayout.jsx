import React from 'react'
import Header from './Header'
import Sider from './Sider'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=''>
        <Header/>
        <div className='flex'><Sider/>
        <Outlet/></div>
        
    </div>
  )
}

export default MainLayout