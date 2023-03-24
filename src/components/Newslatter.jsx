import React from 'react'

function Newslatter() {
  return (
    <div>
    <div className='w-full py-16 text-white px-4 grid grid-flow-col'>
        <div className='mx-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='log:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 max-w-3'>Want tips & tricks to optmize your code?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full space-x-5'>
                <input className='p-4 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#00df9a] w-[299px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Notify Me</button>
            </div>
        </div>
        <p className='items-center pt-10 pl-9'>We care about the protection of your data. Read our <span className='text-[#00df9a]'> privacy policy.</span></p>
        </div>
      
    </div>
    </div>
  )
}

export default Newslatter
