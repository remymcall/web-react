import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 space-x-5'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mange data analytics centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem, omnis! Eligendi debitis nobis commodi praesentium soluta repellendus nesciunt consequatur, 
            suscipit consequuntur ullam porro molestiae vero fugiat, eos numquam exercitationem quibusdam.
            </p>
            <button className='bg-black w-[299px] rounded-md font-medium my-6 mx-auto md:m-0   py-3 text-[#00df9a]'>Get Started</button>
        </div>
        </div>
      
    </div>
  )
}

export default Analytics
