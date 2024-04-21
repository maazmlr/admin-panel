import React, { useEffect, useState } from 'react'
import Post from '../Home/Post'
import Date from '../Home/Date'
import filter from "../../assets/filter.png"
import Cookie from "js-cookie"
import axios from "axios"
import url from '../../url'
const Ads = () => {
    const token=Cookie.get("token");
    const [change,setChange]=useState(false);
    const [posts,setPosts]=useState()
    const [show,setShow]=useState(false)
    useEffect(()=>{
        axios.get(`${url}getAdds`,{
            headers:{
                token
            }
        }).then(res=>setPosts(res.data.data))

    },[])
    console.log(posts)
    async function approvedAds(id,token){
        console.log(id);
        try 
        {
            const response=await axios.put(`${url}approveAdsReq/${id}`,{},{
                headers:{
                    token:token
                }
                
            })
            setShow(true)
            console.log(response);
        } catch (error) {
                console.log(error);
        }
          
    }
    async function deleteAds(uid,token){
        console.log(uid)
        try {   

            const response=await axios.delete(`${url}deleteAdsReq/${uid}`,{
                headers:{
                    token
                }
            })
            console.log(response);
            setShow(true)
            return response
        } catch (error) {
            console.log(error
            )
            
        }
    }
    
    console.log(posts);
    const elements=posts?.map(post=>< Post key={post._id} id={post._id} deleteAdsPost={deleteAds} 
         postId={post.userId} pic={post.pic} adsAppFunc={approvedAds} proImg={post.user.proImage} userName={post.user.username} userEmail={post.user.email} time={post.time} share={"0"} likes={post.like} Comments={post.comments} boost={true} uid={post.userId} ads={true}/>)

        const showElement=posts?.filter(post=>post.status!=="Approved")
    return (
  
      <div className={`main pl-24  min-h-[100vh]`}>
          <div className="info flex justify-between items-center w-[560px] mb-3">
          {change ? <Date/> :
              <>
              <p className="white text-2xl font-bold ">Ads </p>
              <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />
              </> }        
              </div>
          <div className="boost-post w-[560px]">
            {showElement}
              
          </div>
      </div>
    )
}


export default Ads