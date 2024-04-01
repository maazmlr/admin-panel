import React from 'react'
import Header from '../Header'
import Profile from './Profile'
import { NavLink, Outlet } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div>
        <Header/>
        <Profile/>
        
        
    </div>
  )
}

export default UserProfile