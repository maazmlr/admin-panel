import React, { useState } from "react";
import filter from "../../assets/filter.png"
import Post from "./Post";
import Date from "./Date";
import SiderProfile from "../SiderProfile";
import UsersList from "../UsersList";

const Home = () => {

    const [change,setChange]=useState(false);
    console.log(change);

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
          <Post/>
          

        </div>
        <div className="users w-[18rem]">
        <UsersList/>
        </div>
      </div>
    </div>
  );
};

export default Home;
