import React from 'react'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white justify-between'>
      <div className='max-w-[1240px] max-auto md:grid grid-cols-3 gap-8'>
       <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-105 duration-300'>
      
         <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
         <p className='text-center text-4xl font-bold'>$149</p>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
          <p className='py-2 border-b mx-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8'>Send Up To 2 GB</p>
         </div>
         <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
       </div>

       <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-log hover:scale-105 duration-300'>
      
         <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
         <p className='text-center text-4xl font-bold'>$149</p>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
          <p className='py-2 border-b mx-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8'>Send Up To 2 GB</p>
         </div>
         <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Start Trial</button>
       </div>

       <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-105 duration-300'>
       
         <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
         <p className='text-center text-4xl font-bold'>$149</p>
         <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
          <p className='py-2 border-b mx-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8'>Send Up To 2 GB</p>
         </div>
         <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my- mx-auto py-3 text-black'>Start Trial</button>
       </div>
       
      </div>
    </div>
  )
}

export default Cards
