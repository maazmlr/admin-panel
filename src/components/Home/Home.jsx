import React, { useEffect, useState } from "react";
import filter from "../../assets/filter.png"
import Post from "./Post";
import Date from "./Date";
import SiderProfile from "../SiderProfile";
import UsersList from "../UsersList";
import axios from "axios";
import url from "../../url.js"
import Cookies from "js-cookie"
const Home = () => {
  const token=Cookies.get("token")
  const [post,setPost]=useState([])

    useEffect(()=>{
      axios.get(`${url}getAllPosts`,{
        headers:{
          'token':`${token}`
        }
      }).then(res=>setPost(res.data.allPosts))
    },[])
    console.log(post);
    const [change,setChange]=useState(false);
    const element=post?.filter(pos=> !pos.hasOwnProperty("groupId"))
    console.log(element);
    const elements =element?.map(posts=><Post video={posts.video} pic={posts.pic} text={posts.text} postId={posts.post_Id} postUserId={posts.user.userId} proImg={posts.user.proImage} likes={posts.likes} share={posts.share} userName={posts.user.username} userEmail={posts.user.email} time={posts.time} Comments={posts.comments} />)
  return (
    <div className="    main min-h-[100vh] pl-[8rem] ">
      <div className="home-container flex place-content-between">
        <div className="post-conatiner w-[30rem]">
          <div className="props flex place-content-between items-center pt-10 py-4">
            {change ? <Date/> :
            <>
            <p className="white text-2xl font-bold">Posts </p>
            <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />
            </> }
            

          </div>
{
  elements
}          

        </div>
        <div className="users w-[18rem]">
        <UsersList/>
        </div>
      </div>
    </div>
  );
};

export default Home;
