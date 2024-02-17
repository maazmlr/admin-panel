import React from 'react'
import BlueCard from './BlueCard'
import filter from "../../assets/filter.png"


const  BlueHome = () => {
  return (
    <div className='main  min-h-[89.5vh]  ml-[18rem] w-[100vw] max-w-screen-xl ' >
        <div className="items ml-[6rem] mt-8">
            <div className='flex justify-between w-[35rem] items-center mb-2'>
            <p className="white text-2xl font-bold">Posts </p>
            <img src={filter} alt="" className=" filter h-6 w-6"  />
            </div>
            <BlueCard/>
        </div>
    </div>
  )
}

 export default  BlueHome 