//This page is under home.js, contains all the Pants of RTU Apparel.


import React from 'react'
import POSPicture from '../Assets/mainPOS.png'

const Pants = () => {

  return (

    
    <div className='bg-white rounded-lg font-fontP mt-3 p-5 font-semibold text-black'>  {/* main item div */}

    <h1 className='text-xl'>Pants</h1>

    <div className='grid gap-4 2xl:grid-cols-3 my-2'>

  
    <button>
    <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center '>
    
        <div>
        <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
        </div>

        <div className='ml-4'>
        <div className='flex justify-between  w-[420px] md:w-[205px] lg:w-[235px] xl:w-[338px] 2xl:w-[195px] items-center text-sm'>

        <h1 className=''>P.E Tshirt</h1>
        <h1 className='tracking-stocks text-red-600 text-right'>25</h1>

        </div>

        <h1 className='text-gray-500 text-left text-sm'>₱ 100 / <span className='' > Package</span></h1>

        <div className='text-left'>
        <h1 className='text-sm mt-4 -mb-2 text-left text-[#034C3C] '>Sizes:</h1>
        <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>S</button>
        <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>M</button>
        <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>L</button>
        <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>XL</button>
        </div>
        </div>
      
    </div>
    </button>



  

     </div>

  


{/* main item div end */}
</div>   
  )
}

export default Pants