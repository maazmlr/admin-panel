import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import filter from "../../assets/filter.png"

import Date from "../Home/Date"
import axios from 'axios'
import url from '../../url'
import Cookies from "js-cookie"
import noProfile from "../../assets/profile.png"
import { NavLink } from 'react-router-dom'


const Users = () => {
  const [users,setUsers]=useState([])

  const token =Cookies.get("token")

  useEffect(()=>{

    axios.get(`${url}getAllUsers`,{
      headers:{
        'token': token
      }
    }).then(res=>setUsers(res.data.allUsers))
    
  },[])
  

  
  const [change,setChange]=useState(false);
  console.log(users);
  const elements=users.map(user=><NavLink to={`/user-profile/${user.email}`}><UserCard username={user.username} proImg={user?.proImage} email={user.email}/></NavLink>)
  return (
    <div className="main-section main  p-10" >
      <div className='flex justify-between mx-16'>
      <h2>Users </h2>
      <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />

      </div>
    <div className='  flex flex-wrap justify-center'>

      
        {elements}

    </div>
    </div>
  )
}

export default Users