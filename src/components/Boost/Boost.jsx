import React, { useState } from 'react'
import Post from '../Home/Post'
import Date from '../Home/Date'
import filter from "../../assets/filter.png"


const Boost = () => {
    const [change,setChange]=useState(false);
  return (

    <div className='main pl-24 min-h-[100vh]'>
        <div className="info flex justify-between items-center w-[35rem] mb-3">
        {change ? <Date/> :
            <>
            <p className="white text-2xl font-bold ">Boost </p>
            <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />
            </> }        
            </div>
        <div className="boost-post w-[35rem]">
            <Post boost={true}/>
        </div>
    </div>
  )
}

export default Boost