import React, { useEffect, useState } from 'react'
import { CameraOutlined } from '@ant-design/icons'
import Links from './Links'
import Modal from './modal'
import noProfile from "../../assets/profile.png"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import url from '../../url'


const Profile = ({proImg,bgImg,name,email}) => {
  const [user,setUser]=useState({})


  

    const [modal_points,setModal_points]=useState(308)
    // let modal=
    // <>
    // <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>{modal_points}</button>
    // <dialog id="my_modal_4" className="modal">
    //   <div className="modal-box w-11/12 max-w-5xl">
    //     <div className='flex justify-between items-center' >
    //     <h3 className="font-bold text-lg">Hello!</h3>
    //     <h2>cross</h2>
    //     </div>
    //     <input type="number" name="" id="" value={modal_points}  />
    //     <div className="modal-action">  
    //       <form method="dialog">
    //         {/* if there is a button, it will close the modal */}
    //         <button className="btn">Save Changes</button>
    //       </form>
    //     </div>
    //   </div>
    // </dialog>
    // </>

  const {id} =useParams();


  useEffect(()=>{
    axios.get(`${url}otherUser/${id}`).then(res=>setUser(res.data.message))
  },[])
  console.log(user)
 
  return (
<div className="content flex justify-center  ">
        <div className="profiles ">
          <div className="background-img  relative">
            <img src={user.coverImage} alt="" className='bg-black h-80 w-[65rem]' />
            <CameraOutlined height={20} width={20} className=' p-4 bg-black rounded-full  absolute bottom-6 right-4 ' />

          </div>
          <div className="info px-12 relative bottom-16   ">
          <div className="profile-img relative ">
            <img src={user.proImage || noProfile} alt="" className='h-32 w-32 rounded-full border-4 border-sky-950  ' />
            <CameraOutlined height={16} width={16} className=' p-2 bg-black rounded-full  absolute bottom-4 left-24  '/>

          </div>

          <div className="name mt-4">
            <h2 className='font-bold text-3xl'>{user.lastName}</h2>
            <h2 className='text-xl'>{user.email}</h2>
            <Modal id={user._id} point={user?.points?.totalPoints} proImg={user.proImage} name={user.lastName} email={user.email}/>
            <p>{user.bio}</p>
            <p>{user.followers?.length} followers &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;           {user.following?.length} following</p>
          </div>

          <hr className='mt-12'/>
          {/* <Links/> */}

          </div>



        </div>
    </div>  )
}

export default Profile