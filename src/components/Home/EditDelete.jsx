  import { MoreOutlined } from '@ant-design/icons'
import React from 'react'
import PostModal from './PostModal'
import cookies from "js-cookie"

const EditDelete = ({proImg,username,email,postId,postUserId,handleState,text,pic,video}) => {
  const token=cookies.get("token")
  const handleDelete=(token)=>{
    console.log("dele")
    handleState(token)
  }
  const Modal =()=>{

    return(
      <PostModal proImg={proImg} userEmail={email} text={text} pic={pic} video={video} userName={username}/>
    )
  }
  return (
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1"><MoreOutlined/></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>{<Modal/>}</li>
    <li onClick={()=>handleDelete(token)} ><a>Delete</a></li>
  </ul>
</div>  )
}

export default EditDelete