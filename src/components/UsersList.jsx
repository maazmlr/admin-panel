import {  Typography } from '@mui/material';

import SiderProfile from './SiderProfile'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import UsersListDetails from './UserListDetails';
import { useEffect, useState } from 'react';
import axios from "axios"
import url from '../url.js';
import Cookies from "js-cookie"

const UsersList = () => {
  const token =Cookies.get("token")
  const [users,setUsers]=useState([])
  
  useEffect(()=>{
    axios.get(`${url}getAllUsers`,{
      headers:{
        'token': token
      }
    }).then(res=>setUsers(res.data.allUsers))
    
  },[])
  const elements=users?.map(user=><UsersListDetails email={user.email} proImg={user.proImage} userName={user.username} />)
  
  return (
    <div>
        <SiderProfile/>
        <div className="list mt-2   rounded-3xl">
        <List sx={{  width: '96%', maxWidth: "19rem", maxHeight:"20rem",overflow:"scroll", bgcolor: ''  }} className='grey'>
          <div className='w-full  flex justify-between px-4'>
            <p>Users</p>
            <a href="">See all</a>
          </div>
      {
        elements
      }
      
    </List>
        </div>

    </div>
  )
}

export default UsersList