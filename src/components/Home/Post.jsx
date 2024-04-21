import { MoreOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import EditDelete from "./EditDelete";
import axios from "axios";
import url from "../../url.js";
import Cookies from "js-cookie"
import noProfile from "../../assets/profile.png"

const Post = ({id, adsAppFunc,deleteAdsPost,apUid ,boost,ads,proImg,userName,userEmail,likes,share,Comments,time,postId,postUserId,deleteBoost,text,pic,video,approveBoost,uid}) => {
  const token=Cookies.get("token");
  console.log("uiddokd",uid);
  const payload={
    postUserId,
    post_Id:postId
  }
  console.log(postId);

  const [deleted,setDelete]=useState(false);
   async function handleState(tokem){
      const del=await axios.delete(`${url}adminDeletePost`, {
        data: {
            post_Id:postId,
            postUserId
        },
        headers: {
            'token': tokem
        }
    
      }).then(res=>console.log(res))
      
    setDelete(true)
  }
  console.log("post id is ",postId);

  return (
    <div className={` mb-4 bg-[#0E151B] ${deleted ? "hidden" : ""}`} >

      <div className="info  h-16 flex items-center px-4">

        <div className="container flex items-center p-2">
          <img
            src={proImg || noProfile}
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-2">
            <h2 className="white">{userName}</h2>
            <p className="white text-xs">{userEmail} </p>
            <p className="white text-xs">{time} </p>
          </div>
        </div>
        {(!boost && !ads)&&         <EditDelete postId={postId} proImg={proImg} text={text} video={video} pic={pic} email={userEmail} username={userName} handleState={handleState} />} 
      </div>
      <p className="m-4">{text}</p>
      
      { 
       (pic || video) &&
      <div className="post postContainer bg-purple-600 h-[22rem]">
        {
          pic ? <img src={pic} className="w-full h-full" /> :<video src={video} controls className="w-full h-full object-cover" />
        }
        
      </div>
}
      <div className="post-detail  p-5  white flex justify-between">
        <div className="flex">
            <p className="mr-4">{likes?.length} Likes</p>
            <p>{Comments?.length} comments</p>
        </div>
        <p>{share?.length} shares</p>
      </div>
      {
        boost ?(
      <div className="button p-3 ">
        {
          ads ?

        <button onClick={()=>{adsAppFunc(id,token);setDelete(true)}} className="blue w-[50%] p-2 rounded-xl ">Approve</button>
        : 
        <button onClick={()=>{approveBoost(postId,apUid,token);setDelete(true)}}  className="blue w-[50%] p-2 rounded-xl ">Boost</button>
}


      {ads ? 
              <button onClick={()=>{deleteAdsPost(uid,token);setDelete(true)}} className="grey w-[50%] p-2 rounded-xl">Delete ad</button>

      :
      <button onClick={()=>{deleteBoost(uid,token);setDelete(true);}} className="grey w-[50%] p-2 rounded-xl">Delete</button>

      }

      </div>
        )
        : null
}
    </div>
      
  );
};

export default Post;
