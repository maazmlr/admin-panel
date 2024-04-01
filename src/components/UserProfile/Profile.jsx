import React, { useState } from 'react'
import { CameraOutlined } from '@ant-design/icons'
import Links from './Links'

const Profile = () => {

    // const [modal_points,setModal_points]=useState(308)
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
  return (
<div className="content flex justify-center  ">
        <div className="profile ">
          <div className="background-img  relative">
            <img src="" alt="" className='bg-slate-100 h-80 w-[65rem]' />
            <CameraOutlined height={20} width={20} className=' p-4 bg-black rounded-full  absolute bottom-6 right-4 ' />

          </div>
          <div className="info px-12 relative bottom-16   ">
          <div className="profile-img relative ">
            <img src="" alt="" className='h-32 w-32 rounded-full border-4 border-sky-950  ' />
            <CameraOutlined height={16} width={16} className=' p-2 bg-black rounded-full  absolute bottom-4 left-24  '/>

          </div>

          <div className="name mt-4">
            <h2 className='font-bold text-3xl'>Slyfer2428</h2>
            <h2 className='text-xl'>@slyfer</h2>
            <p className='mt-4'>points</p>
            <p>Senior blockchain developer @Brand</p>
            <p>328 following &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;           200 follwers</p>
          </div>

          <hr className='mt-12'/>
          <Links/>

          </div>



        </div>
    </div>  )
}

export default Profile