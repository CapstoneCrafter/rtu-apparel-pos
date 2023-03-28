import React, { useEffect, useState } from 'react'
import RTUlogo from '../Components/RTUlogo'
import DashboardModal from './DashboardModal'
import TableDashboard from './TableDashboard'
import { db } from '../Database/firebase'
import { collection, getDocs, onSnapshot  } from 'firebase/firestore'

const Dashboard = () => {

  const [productCount, setProductCounts] = useState(0)
  const [userCount, setUserCount] = useState(0)
  
  useEffect(() => {
    const productsRef = collection(db, "products");
  
    const unsubscribe = onSnapshot(productsRef, (querySnapshot) => {
      setProductCounts(querySnapshot.size);
    });
  
    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const usersRef = collection(db, 'users-info')

    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
      setUserCount(querySnapshot.size)
    })

    return() => {
      unsubscribe()
    }
  }, [])


  return (
    <div className='w-full h-auto md:w-4/5 md:ml-auto md:absolute md:right-0 lg:w-11/12'> 
  
    <div className='flex'>
      <div className='w-1/2 bg-[#001D4A] h-72 m-2 flex justify-center items-center rounded-lg  text-white '>

      <div className='font-bold uppercase text-xl 2xl:text-5xl font-fontDash mx-2'>
      <h1>users: <span className='text-5xl md:text-7xl text-orange-500'>{userCount}</span></h1>
      <h1>products: <span className='text-5xl md:text-7xl text-orange-500'> {productCount}</span></h1>
      </div>
        
      </div>

      <div className='w-1/2 bg-[#1E555C] h-72 m-2 flex justify-center items-center rounded-lg  text-white '>

      <div className='font-bold uppercase text-xl 2xl:text-5xl font-fontDash mx-2'>
      <h1>total orders: <span className='text-5xl md:text-7xl text-orange-500'>23</span></h1>
      <h1>total revenue: <span className='text-5xl md:text-7xl text-orange-500'>1000</span></h1>
      </div>

      </div>

    </div>

  
    <div className='p-3'>
      <DashboardModal/>
    </div>

   <div>
    <TableDashboard/>
   </div>

    
</div>
  )
}

export default Dashboard