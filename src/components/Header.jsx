import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div  className='bg-[#0E151B] h-16 flex place-content-between items-center px-5'>
        <img src={logo} alt="" className='h-8'/>
        <div className="sub-cont flex ">
        <div className="search h-12 bg-[#121A21] flex items-center rounded-2xl place-content-evenly	w-[27rem]">
        <SearchOutlined style={{color:"white"}} />
            <input type="text" className='w-96 bg-inherit text-[white]' placeholder='Search'/>
            
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/14bf/2706/c31209d5ad5324dd7e5f3ab55fe4d6ac?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ggfT65IaFIodFCLYbE0bFijrGcq3RZU4NI92kSpMGW76hepgF7ufooMrFWk3avrifK3PbMxtmUbFn2PRLoucb0dbKCJwvrfBChcfTRgfFzxQM-0vn5QnkZu9TQf4MTg6JH~BYbHr7BP641W7pRVCdrB9K3OMcRP-moF6gH~uy7MfaF3pMo6WZ7wYnHRLxYb0wsgLxKrhgk0gYO8wLmqBnLoE5fA34E9agaODeBee7vwmdunKhM2oHKWjcKQrSCezUqlOs7slRxGNx1clOGhJIybuWpAUKM6jEBiyQbjn6DzJr1Vm95dcvrL694IfmPLFVOWVFyErowSqikNKgBC6iw__" alt="" className='h-12 rounded-full w-12'/>
    </div>
    </div>
  )
}

export default Header