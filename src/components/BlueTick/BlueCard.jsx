import React from 'react'

const BlueCard = () => {
  return (
    <div className='w-[35rem]  bg-[#0E151B] flex rounded-xl  '>
        <div className="card-side w-1/6  flex justify-center mt-2 ">
            <img src="https://s3-alpha-sig.figma.com/img/45a3/56e4/f10cd9ceea2070e3f09e534010575a1f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nrmuu5-Uv1Zuauq1mTqndG-37KY-LPNcUKOlnI-VFLg2Pili0vLvRqCSbQW9hYx4KkH5fjElTSc2OV9MviduuFY3hZX1tY3ahHzVPXTbw4Ga7prQ2fm8rSI64sD8hTtyHMWc4omLtKXCadPZrXB1O4r0h83KrEdCJ0XMVkTaPzOsCETcKx1HQ4PHq02y98Qp9FtjEww9Fx3We0oAx4eXiCubZwrWJADgV9Ucm~F6hFkjp2jEJO1i6HeeGRf17j9wPiOSEdoynUMJe8v5eDBCUf5aJkzCrcWIjnfJxI7iRCJQsKTqXO60qWan0N~ClacsptmB5hoY-dluIiv8osFbUQ__" alt="" className='h-16 w-16 rounded-full' />
        </div>
        <div className="ml-1   w-[80%]  ">
            <div className="info mt-3">
                <p>Jordan</p>
                <p>@hordan</p>
            </div>
            <div className="field flex flex-col justify-between ">
                <input type="text" disabled className='w-[27rem] bg-[#18222F] rounded-md h-8 mt-2' value={"@maaz"} />
                <div className=' p-3 w-[27rem] bg-[#18222F] rounded-md min-h-8  mt-2'>
                <p className='text-lg font-bold'>Explain why do you want to verified ?</p>
                <p className='mt-2'>lorem ipsum haelldkandkankdand kadnkadkndak</p>
                </div>
                <div className='bg-[#18222F] p-3 w-[27rem] rounded-md min-h-8  mt-2'>
                <p className='text-lg font-bold'>hAVE you join XV community</p>
                <p className='mt-2'>no</p>
                </div>
                <div className='bg-[#18222F] p-3 w-[27rem] rounded-md min-h-8 mt-2'>
                <p className='text-lg font-bold'>hAVE you join XV token</p>
                <p className='mt-2'>no</p>
                </div>
            </div>
            <div className="button w-[27rem] my-2">
                <button className='text-center w-1/2 p-2 rounded-lg blue'>approve</button>
                <button className='text-center w-1/2 p-2 rounded-lg bg-[#121A21]'>delete</button>
            </div>
        </div>
    </div>
  )
}

export default BlueCard