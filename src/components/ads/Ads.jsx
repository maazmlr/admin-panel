import React, { useEffect, useState } from 'react'
import Post from '../Home/Post'
import Date from '../Home/Date'
import filter from "../../assets/filter.png"
import Cookie from "js-cookie"
import axios from "axios"
import url from '../../url'
const Ads = () => {
    const token=Cookie.get("token")
    const [change,setChange]=useState(false);
    const [posts,setPosts]=useState()
    const [show,setShow]=useState(false)
    useEffect(()=>{
        axios.get(`${url}getAdds`,{
            headers:{
                token
            }
        }).then(res=>setPosts(res.data.data)).then(res=>setShow(true))

    },[])
    console.log(posts)
    async function approvedAds(id,token){
        console.log("id",id);
        try 
        {
            const response=await axios.put(`${url}approveAdsReq/${id}`,{},{
                headers:{
                    token
                }
                
            })
            console.log(response);
        } catch (error) {
                console.log(error);
        }
          
    }
    async function deleteAds(uid,token){
        try {   

            const response=await axios.delete(`${url}deleteAdsReq/${uid}`,{
                headers:{
                    token
                }
            })
            console.log(response);
            return response
        } catch (error) {
            return error
            
        }
    }
    
    console.log(posts);
    const elements=posts?.map(post=><Post deleteAdsPost={deleteAds}  postId={post.userId} pic={post.pic} adsAppFunc={approvedAds} proImg={post.user.proImage} userName={post.user.username} userEmail={post.user.email} time={post.time} share={"0"} likes={post.like} Comments={post.comments} boost={true} ads={true}/>)
    return (
  
      <div className={`main pl-24 ${show && ""} min-h-[100vh]`}>
          <div className="info flex justify-between items-center w-[35rem] mb-3">
          {change ? <Date/> :
              <>
              <p className="white text-2xl font-bold ">Ads </p>
              <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />
              </> }        
              </div>
          <div className="boost-post w-[35rem]">
            {elements}
              
          </div>
      </div>
    )
}


export default Ads