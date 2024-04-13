import React, { useEffect, useState } from 'react'
import Post from '../Home/Post'
import Date from '../Home/Date'
import filter from "../../assets/filter.png"
import axios from "axios"
import url from '../../url'
import Cookie from "js-cookie"

const Boost = () => {
    const [change,setChange]=useState(false);
    const [posts ,setPosts]=useState([])
    const [show,setShow]=useState(false)
    const token=Cookie.get("token")
    useEffect(()=>{
      axios.get(`${url}getBoostPostReq`,{
        headers:{
          token
        }
      }).then(res=>setPosts(res.data.extractedPosts))
    },[])
    console.log(posts);

    const delBoostPost=async(uid,token)=>{
      console.log(uid);
      try{
      const res=await axios.delete(`${url}deleteBostsPost/${uid}`,{
        headers:{
          token
        }
      }).then(res=>console.log(res))
    
    }
    catch(err){
      console.log(err)
    }
    
    }

    const approveBoost=async(post_Id,uid,token)=>{
      try {
        const res=await axios.put(`${url}approveBoostPostReq/`,{
          userId:uid,
          post_Id
        },{
          headers:{
            token
          }
        })
      } catch (error) {
        
        console.log(error);
      }
    }
    
    const elements=posts.map((post,i)=><Post key={i} pic={post.post.pic} video={post.post.video}  boost={true} proImg={post.proImage} userEmail={post.email} userName={post.username} Comments={post.post.comments} likes={post.post.likes} share={post.post.share} time={post.post.time}  deleteBoost={delBoostPost} postId={post.post.id} approveBoost={approveBoost} uid={post.userId}/>)
  
    return (

    <div className={`main pl-24 ${show && "hidden"} min-h-[100vh]`}>
        <div className="info flex justify-between items-center w-[35rem] mb-3">
        {change ? <Date/> :
            <>
            <p className="white text-2xl font-bold ">Boost </p>
            <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />
            </> }        
            </div>
        <div className="boost-post w-[35rem]">
          {elements}
        </div>
    </div>
  )
}

export default Boost