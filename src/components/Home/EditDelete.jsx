import { MoreOutlined } from '@ant-design/icons'
import React from 'react'
import PostModal from './PostModal'

const EditDelete = () => {
  const Modal =()=>{
    return(
      <PostModal/>
    )
  }
  return (
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1"><MoreOutlined/></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>{<Modal/>}</a></li>
    <li><a>Delete</a></li>
  </ul>
</div>  )
}

export default EditDelete