import React from 'react'
import {GrStatusWarning} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import rtulogo from '../Assets/rtu-logo.png'

const NonAdmin  = () => {
  return (
    <div className="mx-auto max-w-7xl h-screen flex justify-center items-center">
      
    <div className='text-center'>

    <div className='flex justify-center'>
    <img src={rtulogo} alt='' className='w-56' />
    </div>
 
    <p className='text-orange-600 font-bold'>404</p>
    <h1 className='font-black text-3xl mb-5 '>Uh oh! I think you're lost.</h1>
    <div className='font-medium text-center text-sm mx-5 mb-10'>
    <p >I'm sorry, but access to this page is restricted.</p>
    <p>For any inquiries, please feel free to email us at <span className='text-orange-500'>rtustore@gmail.com.</span></p>
    <p>To purchase RTU merchandise, please visit RTU Apparel's website.</p>
    </div>
    <Link to='/' className="rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-orange-500 focus-visible:outline uppercase ">RTU Apparel <span aria-hidden="true">→</span></Link>
  
    </div>
</div>
  )
}

export default NonAdmin