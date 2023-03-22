import React from 'react'
import RTUlogo from '../Components/RTUlogo'

const Home = () => {
  return (
    
    <div className='w-full h-auto  md:w-2/3 md:w-4/5 md:ml-auto md:absolute md:right-0 lg:w-11/12 '>
        <div className='navigation m-5 flex items-center'>
            <RTUlogo/>
            <h1 className='text-lg text-white font-fontNav ml-2'>RTU<span className='text-orange-500'>POS</span></h1>  
        </div>

        
    </div>
    
  )
}

export default Home