import React, { useState } from 'react'
import UserCard from './UserCard'
import filter from "../../assets/filter.png"

import Date from "../Home/Date"

const Users = () => {
  
  
  const [change,setChange]=useState(false);
  console.log(change);
  return (
    <div className="main-section main  p-10" >
      <div className='flex justify-between mx-16'>
      <h2>Users </h2>
      <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />

      </div>
    <div className='  flex flex-wrap justify-center'>

      
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>

    </div>
    </div>
  )
}

export default Users