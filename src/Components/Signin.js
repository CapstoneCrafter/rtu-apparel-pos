import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {AiFillMail,
        AiFillFacebook,
        AiFillInstagram,
        AiOutlineEye,
        AiOutlineEyeInvisible

} from 'react-icons/ai'


const Signin = () => {

  const [showPassword, setShowPassword] = useState(false)

  const showPasswordIcon = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <div className='bg-gradient-to-r from-stone-200 via-stone-200 to-stone-200 h-screen flex justify-center items-center'>
    <div className='max-w-7xl mx-auto'>
    <div className='md:flex md:items-center  '>
    <div className='mx-5 h-32   md:h-44 lg:h-52 '>
    
    <div className='text-center md:text-left md:w-80 lg:w-[40rem]'>
      <h1 className='text-3xl font-bold text-indigo-600 font-mono md:text-5xl lg:text-6xl '>Howdy!</h1>
      <h1 className='text-xl font-bold text-orange-500 font-mono md:text-left md:text-2xl lg:text-5xl '>Welcome to RTU Apparel's points of sale</h1>
      <p className='text-md text-gray-500 italic  md:text-justify '>To begin processing transactions at RTU Apparel POS, please login using your credentials.</p>
    </div>
      
    </div>

    <div className='mx-5 h-auto lg:w-96'>
    <div>
      <form>
        <div className='mx-5 mb-5 pt-5 '>
        <input type='email' placeholder='Email' className='w-full p-3  border bg-transparent rounded-lg border-black outline-orange-500' required />
        </div>

        <div className='mx-5 mb-10 flex '>
        <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full p-3 border bg-transparent rounded-lg border-black outline-orange-500' required />

        <div onClick={showPasswordIcon} className='-ml-10 mt-4'>
        {showPassword ?  <AiOutlineEye size={20}/> :  <AiOutlineEyeInvisible size={20}/>} 
        </div>
        </div>

       

        <div className='mx-5 border-b border-gray-400 pb-10 '>
       <Link to='RTUApparel/home'> <button className='w-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 text-white p-3 rounded-md hover:opacity-50'>Sign in</button></Link>
        </div>
      </form>

     
    </div>

    <div className='mx-5 text-justify text-sm italic text-gray-500 pt-10 lg:pt-5'>
    <p className=''>Before logging in, please be aware that the credentials you will need to use have been provided by the system operator; if you have any questions or concerns, 
    please don't hesitate to contact us at <span className='text-orange-500 font-semibold'>rtustore@gmail.com.</span></p>
    </div>

    <div className='flex justify-center mt-10 pb-5'>
      <AiFillFacebook className='mx-5' size={30}/>
      <AiFillInstagram  className='mx-5'size={30}/>
      <AiFillMail  className='mx-5'size={30}/>

    </div>

    </div>
    </div>


    </div>
    </div>
  )
}

export default Signin