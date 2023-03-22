import React from 'react'
import RTUlogo from '../Components/RTUlogo'

const Users = () => {
  return (
    <div className='w-full h-auto  md:w-2/3 md:w-4/5 md:ml-auto md:absolute md:right-0 lg:w-11/12 '>
    <div className='navigation py-5 border-b border-gray-400  '>
      <div className='flex items-center mx-5 '>
        <RTUlogo />
        <h1 className='text-lg text-white font-fontNav  ml-2'>CONTACT US</h1>  
        </div>
        
    </div>

    <div className='mx-2 mt-2'>
    <p className='text-sm md:text-base uppercase font-semibold text-white'>This page presents a list of all the users of RTU Apparel, offering an overview of our customer base and their preferences.</p>

  


    </div>

    
</div>
  )
}

export default Users