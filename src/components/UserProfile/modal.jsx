import { useState } from "react";

export default function Modal(){
    const [inputValue, setInputValue] = useState(365);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleSaveChanges = () => {
        setSavedValue(inputValue);
        // Additional logic for saving changes if needed
    }
    return(
        <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<p className="mt-4 " onClick={()=>document.getElementById('my_modal_3').showModal()}>points</p>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="flex ">
    <img src="data:image/webp;base64,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REVSREFMRSwgRkxPUklEQSAtIE1BUkNIIDEzOiBMaW9uZWwgTWVzc2kgIzEwIG9mIEludGVyIE1pYW1pIENGIHRha2VzIHRoZSBmaWVsZCBwcmlvciB0byB0aGUgQ29uY2FjYWYgQ2hhbXBpb25zIEN1cCBSb3VuZCBvZiAxNiBtYXRjaCBhZ2FpbnN0IHRoZSBOYXNodmlsbGUgU0MgYXQgQ2hhc2UgU3RhZGl1bSBvbiBNYXJjaCAxMywgMjAyNCBpbiBGb3J0IExhdWRlcmRhbGUsIEZsb3JpZGEuIChQaG90byBieSBSaWNoIFN0b3JyeS9HZXR0eSBJbWFnZXMpMjAyNCBHZXR0eSBJbWFnZXMsAQAAAQAAACwBAAABAAAAAFhNUCAgBgAAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyNCBHZXR0eSBJbWFnZXMiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjIwODIyMDA1MDUiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+UmljaCBTdG9ycnk8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkZPUlQgTEFVREVSREFMRSwgRkxPUklEQSAtIE1BUkNIIDEzOiBMaW9uZWwgTWVzc2kgIzEwIG9mIEludGVyIE1pYW1pIENGIHRha2VzIHRoZSBmaWVsZCBwcmlvciB0byB0aGUgQ29uY2FjYWYgQ2hhbXBpb25zIEN1cCBSb3VuZCBvZiAxNiBtYXRjaCBhZ2FpbnN0IHRoZSBOYXNodmlsbGUgU0MgYXQgQ2hhc2UgU3RhZGl1bSBvbiBNYXJjaCAxMywgMjAyNCBpbiBGb3J0IExhdWRlcmRhbGUsIEZsb3JpZGEuIChQaG90byBieSBSaWNoIFN0b3JyeS9HZXR0eSBJbWFnZXMpPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvMjA4MjIwMDUwNT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/Pgo=" alt="" className="h-16 w-16 rounded-full" />
    <div className="ml-4">
    <h3 className="font-bold text-lg">Name</h3>
    <p className="">Usermname</p>
    
    </div>
    </div>
    <input type="text" className="font-bold text-3xl my-8" value={inputValue} onChange={handleChange} />
{/* <input className="font-bold text-3xl my-4">365 /<span>pts</span>/> */}

<button className="absolute bottom-2 right-2 blue p-2" onClick={handleSaveChanges}>Save Changes</button>
    </div>
</dialog>
        </>
    )
}