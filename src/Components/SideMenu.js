import React, {useState, useEffect} from 'react'

import { Link, Outlet } from 'react-router-dom'

import {AiFillHome,
        AiOutlineShoppingCart,
        AiFillMessage,
        
} from 'react-icons/ai'

import {  IoIosLogOut } from 'react-icons/io'

import {  MdDashboard } from 'react-icons/md'

import {  FiUsers } from 'react-icons/fi'
const SideMenu = () => {

  const [isBreakpointsLarge, setIsBreakPOintsLarge] = useState(false)
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsBreakPOintsLarge(true);
      } else {
        setIsBreakPOintsLarge(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    //     <div className='h-screen flex items-end'>

    //     <div className='bg-black w-full p-3 flex justify-between md:w-auto  md:grid md:grid-cols-1 md:items-center md:h-screen lg:w-80 lg:justify-items-center '>
        
    //     <div className='flex items-center '>
    //     <AiFillHome className={`'mx-5 md:mx-2 ${isBreakpointsLarge ? '' : 'hidden'}'`} size={30} color='white'/>
    //     <h1 className={`text-white text-md font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Home</h1>
    //     </div>

    //     <div className='flex items-center '>
    //     <MdDashboard className={`'mx-5 md:mx-2 ${isBreakpointsLarge ? '' : 'hidden'}'`} size={30} color='white'/>
    //     <h1 className={`text-white  text-md font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Dashboard</h1>
    //     </div>

    //     <div className='flex items-center '>
    //     <AiOutlineShoppingCart className={`'mx-5 md:mx-2 ${isBreakpointsLarge ? '' : 'hidden'}'`} size={30} color='white'/>
    //     <h1 className={`text-white  text-md font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Orders</h1>
    //     </div>

    //     <div className='flex items-center '>
    //     <FiUsers className={`'mx-5 md:mx-2 ${isBreakpointsLarge ? '' : 'hidden'}'`} size={30} color='white'/>
    //     <h1 className={`text-white  text-md font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Users</h1>
    //     </div>

    //     <div className='flex items-center '>
    //     <AiFillMessage className={`'mx-5 md:mx-2 ${isBreakpointsLarge ? '' : 'hidden'}'`} size={30} color='white'/>
    //     <h1 className={`text-white  text-md font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Message</h1>
    //     </div>

    //     <div className='flex items-center '>
    //     <IoIosLogOut className={`'mx-5 md:mx-2 ${isBreakpointsLarge ? '' : 'hidden'}'`} size={30} color='white'/>
    //     <h1 className={`text-white  text-md font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Log Out</h1>
    //     </div>

    //     </div>
    // </div>
    <div className='w-full h-screen bg-slate-400 grid content-between md:relative '>
        {/* <div className='w-full h-16 bg-orange-500 flex justify-center md:w-2/3 md:ml-auto md:absolute md:right-0 lg:w-3/4'></div> */}
        <div className='w-full order-last bg-black flex justify-between p-3 md:grid md:grid-cols-1 md:items-center md:place-items-center md:w-1/3 md:h-screen lg:w-1/4'>

          <Link to='home'>
          <div className='flex items-center'>
          <AiFillHome className='mx-5' size={30} color='white'/>
          <h1 className={`text-white text-md font-medium ml-2 hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Home</h1>
          </div>
          </Link>
          
          <Link to='dashboard'>
          <div className='flex items-center'>
          <MdDashboard className='mx-5' size={30} color='white'/>
          <h1 className={`text-white text-md font-medium ml-2 hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Dashboard</h1>
          </div>
          </Link>

          <Link to='orders'>
          <div className='flex items-center'>
          <AiOutlineShoppingCart className='mx-5' size={30} color='white'/>
          <h1 className={`text-white text-md font-medium ml-2 hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Orders</h1>
          </div>
          </Link>


          <Link to='users'>
          <div className='flex items-center'>
          <FiUsers className='mx-5' size={30} color='white'/>
          <h1 className={`text-white text-md font-medium ml-2 hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Users</h1>
          </div>
          </Link>


          <Link to='message'>
          <div className='flex items-center'>
          <AiFillMessage className='mx-5' size={30} color='white'/>
          <h1 className={`text-white text-md font-medium ml-2 hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Message</h1>
          </div>
          </Link>

          <Link to='/'>
          <div className='flex items-center'>
          <IoIosLogOut className='mx-5' size={30} color='white'/>
          <h1 className={`text-white text-md font-medium ml-2 hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Log Out</h1>
          </div>
          </Link>

        </div>

        <Outlet/>
    </div>

 
  )
}

export default SideMenu