import React, { useState } from "react";
import filter from "../../assets/filter.png"
import Post from "./Post";

const Home = () => {

    const [change,setChange]=useState(false);
    console.log(change);

  return (
    <div className="  bg-[#0B0E12] flex-1  pl-[10rem] ">
      <div className="home-container flex place-content-between">
        <div className="post-conatiner w-[30rem]">
          <div className="props flex place-content-between items-center pt-10 py-4">
            <p className="white text-2xl font-bold">Posts </p>
            <img src={filter} alt="" className=" filter h-6 w-6" onClick={()=>setChange(true)} />

          </div>
          <Post/>
          <Post/>

        </div>
        <div className="users bg-slate-300 h-7 w-[18rem]"></div>
      </div>
    </div>
  );
};

export default Home;
