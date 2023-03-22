import React, {useState, useEffect} from 'react'

import { Link, Outlet, useNavigate } from 'react-router-dom'

import {AiFillHome,
        AiOutlineShoppingCart,
        AiFillMessage,
        
} from 'react-icons/ai'

import {  IoIosLogOut } from 'react-icons/io'

import {  MdDashboard } from 'react-icons/md'

import {  FiUsers } from 'react-icons/fi'
import {  useAuth } from '../Functions/authContext'
const SideMenu = () => {

  const { logOut } = useAuth()
  const navigate = useNavigate()

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

  const handleLogOut = async () =>{

    try{
      await logOut()
      navigate('/')
    
    }catch(error){
      console.log(error.message)

    }

  }
  return (


    <div className='w-[720px] h-screen  grid content-between md:w-[1080px] lg:w-full md:relative '>
        {/* <div className='w-full h-16 bg-orange-500 flex justify-center md:w-2/3 md:ml-auto md:absolute md:right-0 lg:w-3/4'></div> */}
        <div className='w-full order-last border-t border-gray-400  md:border-t-0 md:border-r bg-black flex justify-between p-3 md:grid md:grid-cols-1 md:items-center md:place-items-center md:w-1/5 md:h-screen lg:w-1/12 xl:w-1/12'>

          <Link className='' to='home'>
          <div className='grid justify-items-center p-2 '>
          <AiFillHome className='text-[#EAEFD3] hover:text-orange-500' size={25} color=''/>
          <h1 className={`text-[#EAEFD3] text-sm font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Home</h1>
          </div>
          </Link>
          
          <Link to='dashboard'>
          <div className='grid justify-items-center p-2 '>
          <MdDashboard className='text-[#EAEFD3] hover:text-orange-500' size={25} color=''/>
          <h1 className={`text-[#EAEFD3]  text-sm font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Dashboard</h1>
          </div>
          </Link>

          <Link to='orders'>
          <div className='grid justify-items-center p-2 '>
          <AiOutlineShoppingCart className='text-[#EAEFD3] hover:text-orange-500' size={25} color=''/>
          <h1 className={`text-[#EAEFD3]  text-sm font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Orders</h1>
          </div>
          </Link>


          <Link to='users'>
          <div className='grid justify-items-center p-2 '>
          <FiUsers className='text-[#EAEFD3] hover:text-orange-500' size={25} color=''/>
          <h1 className={`text-[#EAEFD3]  text-sm font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Users</h1>
          </div>
          </Link>


          <Link to='message'>
          <div className='grid justify-items-center p-2 '>
          <AiFillMessage className='text-[#EAEFD3] hover:text-orange-500' size={25} color=''/>
          <h1 className={`text-[#EAEFD3]  text-sm font-medium  hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>Message</h1>
          </div>
          </Link>

         
          <div  onClick={handleLogOut} className='grid justify-items-center p-2 '>
       
          <IoIosLogOut className='text-[#EAEFD3] hover:text-orange-500' size={25} color=''/>
          <button className={`text-[#EAEFD3]  text-sm font-medium hover:text-orange-500 focus:text-orange-500 ${isBreakpointsLarge ? 'hidden' : ''} `}>SignOut</button>
       
          </div>
          

        </div>

        <Outlet/>
    </div>

 
  )
}

export default SideMenu