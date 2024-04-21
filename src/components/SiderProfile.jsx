import React from 'react';
import { NavLink } from 'react-router-dom';

function logout() {
    // Remove the token from cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
    // Redirect the user to the login page or any other desired page
    window.location.href = '/login'; // Redirect to the login page
  }

const SiderProfile = () => (
    
    <div className="dropdown dropdown-top">
    <div role='button' tabIndex={0}  className=" flex w-[17rem] justify-between bg-[#131A23] h-16 rounded-lg px-2">
        <div className="right w-[20%] mt-2">
            <img src="https://s3-alpha-sig.figma.com/img/14bf/2706/c31209d5ad5324dd7e5f3ab55fe4d6ac?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwPNXdutbSseKnzEkSgUjKxL9tkBhDwVoa97DClx5xr0ptEz8B3FcuMXpfR0ySkMI2JEAmISjNa5vjGYqR4jlOCs~4VfGobHRkwS5yKsJsoDhq3lFsKDoLpJn-BWHZhLt9NL41oAkMfsJkVqoYtYkwReRcdA-HxOCC7Si0GuuG7P9LmmAykr9g7wtTpPrfgZr4V3zS3byESO3~Wa5-T63nGjiPmr68GEvhEApdd9F9SNrvsrFUMVqQt64J6bby9ndpXI244KdcAiMX9LSfw8-1pfa312KArwwCJy5LHT8EuezfToNEMjwz1NCdORxLbLcH2G5dyheNYi7d1rlW24xA__" alt="" className='rounded-full h-12 w-12'/>
        </div>
        <div className="left flex items-center justify-between w-[80%] ml-2">
            <div>
                <p>Admin</p>
                <p className='font-bold'>faheem Abbasi</p>
            </div>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99969 13.4362L0.230469 9.667L0.943269 8.9542L3.99969 11.9978L7.0561 8.9542L7.7689 9.667L3.99969 13.4362ZM0.953535 5.03622L0.230469 4.33367L3.99969 0.564453L7.7689 4.33367L7.04584 5.03622L3.99969 2.00289L0.953535 5.03622Z" fill="#A1A1A1"/>
</svg>


        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 ml-6 mb-1 shadow bg-base-100 rounded-box w-64">
    <li><NavLink to={"/adminpro"}>Profile</NavLink></li>
    <li onClick={()=>logout}><a>logout</a></li>
  </ul>
    </div>
    </div>
);
export default SiderProfile;