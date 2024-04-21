import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../url";
import Cookies from "js-cookie";

export default function Modal({point,proImg,name,email,id}){

    const token =Cookies.get("token")
    
    const [inputValue, setInputValue] = useState(null);

    useEffect(() => {
        // Update inputValue whenever point prop changes
        setInputValue(point);
      }, [point]);
  
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleSaveChanges = (value) => {
        console.log();
        // Additional logic for saving changes if needed
        axios.post(`${url}addPoints`, {
            userId: id, // Correct field name and data type
            pointsToAdd: inputValue // Correct data type
        },{
            headers:{
                token
            }
        }).then(res=>console.log(res))
    }
    return(
        <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<p className="mt-4 " onClick={()=>document.getElementById('my_modal_3').showModal()}>{point} points</p>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="flex ">
    <img src={proImg} alt="" className="h-16 w-16 rounded-full" />
    <div className="ml-4">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="">{email}</p>
    
    </div>
    </div>
    <input type="text" className="font-bold text-3xl my-8" value={inputValue} onChange={handleChange} />
{/* <input className="font-bold text-3xl my-4">365 /<span>pts</span>/> */}

<button className="absolute bottom-2 right-2 blue p-2" onClick={()=>handleSaveChanges(inputValue)}>Save Changes</button>
    </div>
</dialog>
        </>
    )
}