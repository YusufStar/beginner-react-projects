import React, { useState } from 'react'
import { EmployeeData } from "../seed"

function EmployeeList() {
    const [page, SetPage] = useState(1)
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
        <div className="h-[75vh] w-[75vw] flex items-center justify-center flex-col rounded-md bg-gray-900">
            <p className='mt-10'>Page {page} of 7</p>
            <div className="h-[75vh] w-[75vw] flex items-center justify-center flex-row rounded-md bg-gray-900">
            {page == 1 ? <button disabled className='w-[50px] h-[50px] mr-20 rounded-full bg-red-800 hover:scale-110 transition-all'>{"<"}</button>:<button className='w-[50px] h-[50px] mr-20 rounded-full bg-red-800 hover:scale-110 transition-all' onClick={() => {SetPage(page-1)}}>{"<"}</button>}
            <div className="h-[50vh] w-[50vw] flex flex-col gap-3 bg-gray-800 rounded-md">
                {EmployeeData.map((data) => (
                    page == data.page ?
                    <div title={data.email} className='w-[100%] h-[33.3333333333%] flex items-center justify-center bg-slate-700' key={data.id}>
                        <div className="w-[20%] h-[100%] flex flex-col items-center justify-evenly">
                            <img src={data.image} className="w-[75px] rounded-full" alt={data.name} />
                            <p>{data.age}</p>
                            <p>{data.name}</p>
                        </div>
                    </div>
                    :""
                ))}
            </div>
            {page == 7 ? <button className='w-[50px] h-[50px] ml-20 rounded-full bg-green-800 hover:scale-110 transition-all' disabled>{">"}</button>:<button className='w-[50px] h-[50px] ml-20 rounded-full bg-green-800 hover:scale-110 transition-all' onClick={() => {SetPage(page+1)}}>{">"}</button>}
            </div>
        </div>
    </div>
  )
}

export default EmployeeList