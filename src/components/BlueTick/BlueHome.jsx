import React, { useEffect, useState } from 'react'
import BlueCard from './BlueCard'
import filter from "../../assets/filter.png"
import axios from "axios"
import url from '../../url'
import Cookie from "js-cookie"

const  BlueHome = () => {
  const token=Cookie.get("token");
  const [blue,getBlue]=useState([])
    useEffect(()=>{
      axios.get(`${url}getBlueTick`,{
        headers:{
          token
        }
      }).then(res=>getBlue(res.data.data))
    },[])
    const filterElement=blue.filter(user=>user.status!="Approve")
    console.log(filterElement);
    const elements=filterElement.map(b=><BlueCard proImg={b.proImage} email={b.email} username={b.username} joinCom={b.Join_Community} Xv_token={b.XV_Token}  uid={b.userId}/>)
  return (
    <div className='main  min-h-[89.5vh]  ml-[18rem] w-[100vw] max-w-screen-xl  ' >
        <div className="items ml-[6rem] mt-8">
            <div className='flex justify-between w-[35rem] items-center mb-2'>
            <p className="white text-2xl font-bold">Posts </p>
            <img src={filter} alt="" className=" filter h-6 w-6"  />
            </div>
                {elements}
          </div>
    </div>
  )
}

 export default  BlueHome 