import React, {useState, useEffect, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {collection, where, query, getDocs, addDoc} from 'firebase/firestore'
import {  useAuth } from '../Functions/authContext'
import { db } from '../Database/firebase'

import {AiFillMail,
        AiFillFacebook,
        AiFillInstagram,
        AiOutlineEye,
        AiOutlineEyeInvisible,
        AiOutlineMail

} from 'react-icons/ai'

import signin from './signin.css'
import AlertErr from './AlertErr'
import posUI from '../Assets/mainPOS.png'

import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";



const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userCollectionRef = collection(db, "users-info" )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {signIn} = useAuth()
  const mounted = useRef(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    mounted.current = true
    return() => {
        mounted.current = false
    }
}, [])

const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')

  if (!email || !password) {
    setError('')
    return
  }

  setIsSubmitting(true)

  signIn(email, password)
    .then(async (response) => {
      console.log(response)

      // Check if a document with this email exists
      const existingUserQuery = query(userCollectionRef, where('email', '==', email))
      const existingUserDocs = await getDocs(existingUserQuery)

      if (existingUserDocs.size === 0) {
        setError('User does not exist')
        return
      }

      // Get the role of the user
      const role = existingUserDocs.docs[0].data().role

      // Check if the user is an admin
      if (role === 'admin') {
        navigate('/RTUApparel/home')
      } else {
        navigate('/restricted')
      }
    })
    .catch((error) => {
      console.log(error.message)
      setError(error.message)
    })
    .finally(() => mounted.current && setIsSubmitting(false))
}
const [show, setShow] = React.useState(true);

  return (
    
    <div className='h-screen bg-black md:flex justify-center items-center'>
  

        <img className='order-last md:w-3/5 lg:w-6/12 2xl:w-8/12 2xl:h-screen' src={posUI} alt=''/>
        
        <div className='md:w-2/5 md:h-[460px] lg:h-[520px] lg:w-6/12 xl:mx-10 2xl:w-4/12  '>
                

          <form onSubmit={handleSubmit}>
        
            <div className='mx-5 mt-5 md:mt-20'>

            {/* {error && (
              <AlertErr type='error'>
                {error}
              </AlertErr>
            )} */}

            {/* <div className='mb-5'>

              {error && (
                <React.Fragment>
                <Alert
                show={show}
                color="red"
                icon={<ExclamationTriangleIcon className="h-6 w-6" />}
                dismissible={{
                  onClose: () => setShow(false),
                  action: (
                    <Button variant="text" color="white" size="sm">
                      Close
                    </Button>
                  ),
                }}
              >
              {error}
              </Alert>
              </React.Fragment>
              )}
              </div> */}
              <label className='font-semibold text-sm text-gray-500'>EMAIL</label>
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email' 
              placeholder='Enter your email' 
              className='w-full p-3 bg-transparent border rounded-sm text-white outline-none text-sm'/>
            </div>

            <div className='mx-5 mt-5'>
              <label className='font-semibold text-sm text-gray-500'>PASSWORD</label>
              <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password' 
              placeholder='Enter your password' 
              className='w-full p-3 bg-transparent border text-white rounded-sm outline-none text-sm'/>
            </div>

            <div className='mx-5 mt-10'>
          
            <button className='bg-indigo-600 w-full p-3 rounded-lg text-white font-medium hover:opacity-80 '>Sign In</button>
            { error && <p className='mt-2 text-center text-red-500 font-semibold italic text-md'>{error}</p>}
          

          </div>
          </form>

         
        </div>
    </div>
  )
}

export default Signin

