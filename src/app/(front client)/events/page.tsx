import React from 'react'
import Cards from '@/components/Cards'

export default function page() {
  return (
    <div className='w-auto h-auto flex flex-col justify-center items-center bg-gray-100 gap-5'>
        
        <div className="w-5/6 h-1/3 bg-slate-400 flex justify-center items-center p-3 m-3">
        
        <h1 className="text-3xl">Carrousel</h1>
        
        </div>
        
        <h1 className='text-3xl font-bold'> Popular events : </h1>

        <Cards/>
        
    </div>
  )
}
