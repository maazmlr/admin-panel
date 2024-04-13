import React, { useState } from 'react'
import axios from "axios"
import url from '../../url'
import Cookie from "js-cookie"
const BlueCard = ({email,proImg,username,whyChoose,joinCom,Xv_token,uid}) => {
    const token=Cookie.get('token')
    const [isApproved,setIsAppreoved]=useState(false)
    const approveRequest=async()=>{
        const req=await axios.put(`${url}changeStatusBlueTick/${uid}`,{},{
            headers:{
                token
            }
        }

    )
    setIsAppreoved(true)

    }

  return (
    <div className={`w-[35rem]  bg-[#0E151B]  flex rounded-xl  mb-8 ${isApproved?"hidden":""} `}>
        <div className="card-side w-1/6  flex justify-center mt-2 ">
            <img src={proImg} alt="" className='h-16 w-16 rounded-full' />
        </div>
        <div className="ml-1   w-[80%]  ">
            <div className="info mt-3">
                <p>{username}</p>
                <p>{email}</p>
            </div>
            <div className="field flex flex-col justify-between ">
                <input type="text" disabled className='w-[27rem] bg-[#18222F] rounded-md h-8 mt-2' value={email} />
                <div className=' p-3 w-[27rem] bg-[#18222F] rounded-md min-h-8  mt-2'>
                <p className='text-lg font-bold'>Explain why do you want to verified ?</p>
                <p className='mt-2'>{whyChoose}</p>
                </div>
                <div className='bg-[#18222F] p-3 w-[27rem] rounded-md min-h-8  mt-2'>
                <p className='text-lg font-bold'>Have you join XV community</p>
                <p className='mt-2'>{joinCom? "yes" :"no"}</p>
                </div>
                <div className='bg-[#18222F] p-3 w-[27rem] rounded-md min-h-8 mt-2'>
                <p className='text-lg font-bold'>Do you have any XV Token</p>
                <p className='mt-2'>{Xv_token ? "yes" :"no"}</p>
                </div>
            </div>
            <div className="button w-[27rem] my-2">
                <button onClick={()=>approveRequest()} className='text-center w-1/2 p-2 rounded-lg blue'>approve</button>
                <button className='text-center w-1/2 p-2 rounded-lg bg-[#121A21]'>delete</button>
            </div>
        </div>
    </div>
  )
}

export default BlueCard