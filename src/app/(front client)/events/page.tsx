import React from 'react'


export default function page() {
  return (
    <div className='w-auto h-screen flex flex-col justify-center items-center bg-gray-100 gap-5'>
        
        <div className="w-5/6 h-1/3 bg-slate-400 flex justify-center items-center p-3 m-3">
        
        <h1 className="text-3xl">Carrousel</h1>
        
        </div>
        
        <div className="w-11/12 h-3/4 flex flex-wrap gap-4 p-3 m-3 justify-center items-center bg-slate-700">
        
        <h1 className="text-3xl text-white">cards</h1>
        
        </div>

        

    </div>
  )
}
