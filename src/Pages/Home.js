import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

import {RxCross2} from 'react-icons/rx'

import home from './home.css'
import POSPicture from '../Assets/mainPOS.png'

const Home = () => {

  const [showOutlet, setShowOutlet] = useState(true)
  return (
    
    <div className='w-full h-auto md:w-4/5 md:ml-auto md:absolute md:right-0 lg:w-11/12 border'> 

      <div>
        <Navbar/>
      </div>


        <div className='div-container md:flex'>  {/* div container start */}



            <div className='main-div h-auto pb-5 m-5 bg-[#D9D7DD] md:w-3/5 md:mx-5 md:pb-0 2xl:w-3/4 '> {/* main div start */}

                <div className='m-5 text-white'>
                  <h1 className='pt-5 md:pt-0 font-fontP uppercase font-bold'>RTU<span className='text-orange-600'>POS</span></h1>

                  <div className='bg-white rounded-lg font-fontP mt-3 p-5 uppercase font-semibold text-black'> {/* category div */}

                    <h1>Categories</h1>


                    <div className='grid gap-4 grid-cols-4 2xl:grid-cols-7 my-2'>

                        <div><Link to='/RTUApparel/home' onClick={() => setShowOutlet(true)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>All</button></Link></div>
                        <div><Link to='uniform' onClick={() => setShowOutlet(false)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>Uniform</button></Link></div>
                        <div><Link to='pants' onClick={() => setShowOutlet(false)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>Pants</button></Link></div>
                        <div><Link to='jersey' onClick={() => setShowOutlet(false)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>Jersey</button></Link></div>
                        <div><Link to='idlace' onClick={() => setShowOutlet(false)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>ID Lace</button></Link></div>
                        <div><Link to='patch' onClick={() => setShowOutlet(false)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>Patch</button></Link></div>
                        <div><Link to='accessory' onClick={() => setShowOutlet(false)}><button className='w-full bg-gray-300 rounded-full p-1 hover:bg-orange-600'>Accessory</button></Link></div>

                    </div>

                    
                    
                  </div> {/* category div end */}


                 
                {showOutlet && (  <div className='bg-white rounded-lg font-fontP mt-3 p-5 font-semibold text-black'>  {/* main item div */}

                      <h1>All</h1>

                      <div className='grid gap-4 2xl:grid-cols-3 my-2'>

                      <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center'>
                          
                          <div>
                          <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
                          </div>

                          <div className='ml-4'>
                          <h1 className=''>P.E TSHIRT</h1>
                          <h1 className='text-[#FA9500] text-sm'>₱ 100 <span >/ Package</span></h1>


                          <h1 className='text-sm mt-4 -mb-2 '>Sizes</h1>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>S</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>M</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>L</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>XL</button>
                          </div>
                        
                      </div>

                      <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center'>
                          
                          <div>
                          <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
                          </div>

                          <div className='ml-4'>
                          <h1 className=''>P.E TSHIRT</h1>
                          <h1 className='text-[#FA9500] text-sm'>₱ 100 <span >/ Package</span></h1>


                          <h1 className='text-sm mt-4 -mb-2 '>Sizes</h1>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>S</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>M</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>L</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>XL</button>
                          </div>
                        
                      </div>


                      <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center'>
                          
                          <div>
                          <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
                          </div>

                          <div className='ml-4'>
                          <h1 className=''>P.E TSHIRT</h1>
                          <h1 className='text-[#FA9500] text-sm'>₱ 100 <span >/ Package</span></h1>


                          <h1 className='text-sm mt-4 -mb-2 '>Sizes</h1>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>S</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>M</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>L</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>XL</button>
                          </div>
                        
                      </div>


                      <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center'>
                          
                          <div>
                          <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
                          </div>

                          <div className='ml-4'>
                          <h1 className=''>P.E TSHIRT</h1>
                          <h1 className='text-[#FA9500] text-sm'>₱ 100 <span >/ Package</span></h1>


                          <h1 className='text-sm mt-4 -mb-2 '>Sizes</h1>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>S</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>M</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>L</button>
                          <button className='m-2 bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#EDD9A3] '>XL</button>
                          </div>
                        
                      </div>

    
        
                    

                      </div>

                    



                  </div>/* main item div end */
                    
                  )}
                  <Outlet/>


                </div>



            </div> {/* main div end */}


            <div className='receipt-div bg-[#011627] h-auto pb-5 m-5 md:w-2/5 md:mx-5 md:pb-0 2xl:w-1/4'>  {/* receipt div start */}

                <div className='m-5 text-white'>
                      <h1 className='font-fontP uppercase font-bold mb-5 pt-5 md:pt-0'>Current Order</h1>

  
                    <div className='font-fontP uppercase font-semibold text-sm mt-3 p-5 rounded-lg bg-[#30343F]'>    {/* item order */}

                      <div className='flex justify-between'>
                      <h1>P.E TShirt</h1>
                      <RxCross2 size={20} color='red'/>

                      </div>

                      <h1>PACKAGE</h1>
                      <h1>XL</h1>
                      <h1 className='mb-2'>₱ 100</h1>
                        
                        <div className='flex items-center'>
                          <button className='w-8 text-base border mr-5'>+</button>
                          <h1>1</h1>
                          <button className='w-8 text-base border ml-5'>-</button>
                        </div>

                    </div>   {/* item order end */}

                      
                    <div className='font-fontP uppercase font-semibold text-sm mt-3 p-5 rounded-lg bg-[#30343F]'>    {/* item order */}

                      <div className='flex justify-between'>
                      <h1>P.E TShirt</h1>
                      <RxCross2 size={20} color='red'/>

                      </div>

                      <h1>PACKAGE</h1>
                      <h1>XL</h1>
                      <h1 className='mb-2'>₱ 100</h1>
                        
                        <div className='flex items-center'>
                          <button className='w-8 text-base border mr-5'>+</button>
                          <h1>1</h1>
                          <button className='w-8 text-base border ml-5'>-</button>
                        </div>

                    </div>   {/* item order end */}

                      

                      
                     
                     
                      <div className='mt-10 p-5 font-fontP  font-bold text-gray-400 rounded-lg bg-[#30343F]'> {/* receipt-of-order */}

                         <div className=''>   
                            <h1 className='flex justify-between'>SubTotal <span>₱ 300.00</span></h1>
                            <h1 className='flex justify-between'>VAT Sales <span>₱ 0.00</span></h1>
                            <h1 className='border-b-2 pb-2 border-dashed flex justify-between '>VAT Amount <span>₱ 0.00</span></h1>
                            <h1 className='pt-2 flex justify-between'>Total <span>₱ 300.00</span></h1>
                        </div>

                      </div> {/* receipt-of-order end */}



                      <div className='mt-5 p-5 font-fontP uppercase font-bold rounded-lg bg-[#30343F]'> {/*place-order div */}

                        <div className='flex justify-between items-center text-sm'>
                          <button className='bg-[#011627] p-2 w-2/4 mr-2 rounded-full hover:bg-red-600'> Cash </button>
                          <button className='bg-[#011627] p-2 w-2/4 ml-2 rounded-full hover:bg-red-600'> G-Wallet </button>
                        </div>

                        <button className='my-5 text-center w-full bg-white p-3 text-[#011627] rounded-lg'>Place Order</button>

                      </div> {/*place-order div end */}

                

    
                  
                </div>


            </div> {/* receipt div end */}




        </div> {/* div container end */}










  
    {/* <div className='md:flex'>

      <div className='main-item  w-auto h-auto mb-5  mt-5 md:w-2/4 border border-black md:mb-0 md:mr-12 '>

        <div className='mx-5 pt-5'>
          <h1 className='font-fontP font-bold text-lg '>CATEGORIES</h1>
        </div>

        <div className='text-white grid grid-cols-3 gap-2 mx-5 lg:grid-cols-4 xl:grid-cols-6'>

          <div className='bg-black w-auto h-auto flex items-center justify-center mt-5 lg:mt-0 xl:mb-10  rounded-lg hover:bg-indigo-600'>
            
            <Link onClick={() => setShowOutlet(false)} to='uniform' className='ml-2 font-semibold text-lg p-2 '>Uniform</Link>
          </div>

          <div  className='bg-black w-auto h-auto flex items-center justify-center mt-5 lg:mt-0 xl:mb-10 rounded-lg'>
          <Link to='pants' className='ml-2 font-semibold text-lg p-2'>Pants</Link>
          </div>

          <div className='bg-black w-auto h-auto flex items-center justify-center mt-5 lg:mt-0 xl:mb-10 rounded-lg'>
          <Link to='' className='ml-2 font-semibold text-lg p-2'>Jersey</Link>
          </div>

          <div  className='bg-black w-auto h-auto flex items-center justify-center mb-10 lg:mb-0 xl:mb-10  rounded-lg'>
          <Link to='' className='ml-2 font-semibold text-lg p-2'>ID Lace</Link>
          </div>

          <div  className='bg-black w-auto h-auto flex items-center justify-center mb-10  rounded-lg'>
          <Link to='' className='ml-2 font-semibold text-lg p-2'>Patch</Link>
          </div>

          <div  className='bg-black w-auto h-auto flex items-center justify-center mb-10  rounded-lg'>
          <Link to='' className='ml-2 font-semibold text-lg p-2'>Accessory</Link>
          </div>

        </div>

        {showOutlet && (<div className='grid grid-cols-2 gap-5 mx-5 border-b pb-10 border-black md:border-none'>

          <div className='border shadow-2xl p-3 rounded-xl '>
            <img className='bg-orange-500 w-full h-41 rounded-lg' src={POSPicture} alt=''/>

            <div className='mt-5'>
            <h1 className='text-lg font-bold uppercase font-fontP'>P.E T-Shirt</h1>
            <p className='text-sm text-gray-500 text-justify font-fontP font-bold mt-3'>PE T-shirt RTU apparel is a type of t-shirt worn during physical education at Rizal Technical University</p>

            <h1 className='text-lg text-orange-600 font-fontP font-bold mt-3 uppercase'>₱ 100.00 <span className='text-gray-500'>/ TSHIRT</span></h1>
            </div>

            
          </div>

          <div className='border shadow-2xl p-3 rounded-xl '>
            <img className='bg-orange-500 w-full h-41 rounded-lg' src={POSPicture} alt=''/>

            <div className='mt-5'>
            <h1 className='text-lg font-bold uppercase font-fontP'>P.E Pants</h1>
            <p className='text-sm text-gray-500 text-justify font-fontP font-bold mt-3'>PE T-shirt RTU apparel is a type of t-shirt worn during physical education at Rizal Technical University</p>
            <h1 className='text-lg text-orange-600 font-fontP font-bold mt-3 uppercase'>₱ 100.00 <span className='text-gray-500'>/ PANTS</span></h1>
            </div>

            
          </div>
          
         
        </div>
        )}
        <Outlet/>

   
      </div>

      <div className='receipt-div bg- text-  w-full h-auto border border-black md:w-2/4 md:mt-5 '>

        <div className='mx-5 pt-5'>
          <h1 className='font-fontP font-bold text-lg uppercase'>Current Order</h1>

          <div className='main-order  flex items-center justify-between shadow-lg'>

          <div className='flex w-full border m-5'>
            <div>
            <img className='bg-orange-500 h-32 w-32 rounded-md' src='' alt='' />
            </div>
            
            <div className='ml-5 font-fontP font-semibold text-sm uppercase mt-2'>
             
              <h1 className='md:text-orange-600'>P.E T-Shirt</h1>

              <h1>Package</h1>
              
              <div className='flex items-center font-fontP  font-bold'>
         
                <h1>SIZES:</h1>
            
              
                <button className='border-b border-black px-1 mx-2 hover:text-orange-600'>S</button>
                <button className='border-b border-black px-1 mx-2 hover:text-orange-600'>M</button>
                <button className='border-b border-black px-1 mx-2 hover:text-orange-600'>L</button>
                <button className='border-b border-black px-1 mx-2 hover:text-orange-600'>XL</button>
          
            
                </div>

                <div className='font-fontP mt-2 font-bold flex items-center'>

                <div className='mr-2'>
                <h1 className=''>QUANTITY:</h1>  
                </div>

                <div className='border border-black  flex items-center'>
                <button className='border-r border-black w-10 text-sm'>+</button>
                <h1 className='px-5 border'>1</h1>
                <button className='border-l border-black w-10 text-sm'>-</button>
                </div>

                </div>

           
              <h1 className=''>₱ 100</h1>

              
            </div>
            <div className='flex ml-36 md:ml-0 '>
              <button className=' uppercase font-fontP font-bold p-3 w-32 text-red-600 hover:text-orange-600'>Remove</button>
            </div>

            </div>

           

          </div>

          <div className='main-receipt mt-10 py-10 mb-10 border-y border-dashed border-black'>

              <h1 className='font-fontP font-bold text-lg uppercase'>Purchase Details</h1>
              <input className='border w-full p-3 font-bold outline-none text-orange-500 appearance-none m-0 border-indigo-600  placeholder:font-fontP placeholder:font-bold' type='number' placeholder='ENTER CUSTOMER AMOUNT TENDERED' required />

          <div className='mt-10 font-fontP font-semibold text-base uppercase text-gray-500 flex items-center justify-between'>

            <div>
            <h1 className=''>VAT Sales</h1>
            <h1>VAT Amount</h1>
            <h1>TOTAL</h1>
            <h1>CASH</h1>
            <h1>CHANGE</h1>
            <h1>No. of Items</h1>
            </div>

            <div className=' text-indigo-600'>
            <h1 className=''>₱ 0.00</h1>
            <h1>₱ 0.00</h1>
            <h1>₱ 310.00</h1>
            <h1>₱ 500.00</h1>
            <h1>₱ 190.00</h1>
            <h1>₱ 1.00</h1>
            </div>

            
          </div>


          </div>

          <div className='pb-10'>
            <button className='bg-orange-500 p-4  text-xl font-semibold w-full tracking-wide text-white  '>Print</button>
          </div>
          
        </div>

      </div>


    </div> */}
    
</div>
    
  )
}

export default Home