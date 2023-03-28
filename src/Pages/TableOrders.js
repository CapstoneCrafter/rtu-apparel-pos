import React from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'
import {AiFillPrinter} from 'react-icons/ai'

const TableOrders = () => {
  return (
    <div className='m-2'>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center text-white ">
        <caption class="bg-black p-5 text-lg font-semibold text-left  text-white ">
            Purchase Item
            <p class="mt-1 text-sm font-normal text-gray-500">If you're looking for information about orders placed by users on the RTU Apparel website,
             you've come to the right place as this page displays all of that data.</p>
        </caption>
        <thead class="text-[#EFDD8D] text-sm uppercase bg-black ">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Student Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Delivery Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Message
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment Option
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Variations
                </th>
                <th scope="col" class="px-6 py-3">
                    Size
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Payment
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>

              
            </tr>
        </thead>
        <tbody>
            <tr class="bg-black border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 text-sm whitespace-nowrap text-white font-font">
                   siuzysaur@gmail.com
                </th>
                <td class="px-6 py-4 font-font">
                    2021-105772
                </td>
                <td class="px-6 py-4 font-font">
                    Metro Manila, Mandaluyong City, 1550, Addition hills
                </td>
                <td class="px-6 py-4 font-font">
                    Justin Peligro
                </td>
                <td class="px-6 py-4 font-font">
                    12345678901
                </td>
                <td class="px-6 py-4 font-font">
                    No signal in my place
                </td>
                <td class="px-6 py-4 font-font">
                    Cash on Delivery
                </td>
                <td class="px-6 py-4 font-font">
                   PE TShirt
                </td>
                <td class="px-6 py-4 font-font">
                   Package
                </td>
                <td class="px-6 py-4 font-font">
                    L
                </td>
                <td class="px-6 py-4 font-font">
                    2
                </td>
                <td class="px-6 py-4 font-font">
                    ₱ 500
                </td>
                <td class="px-6 py-4">
                    <div className='flex justify-center items-center'>

                    <div className='mx-2'>
                   <FcCheckmark size={20}/>
                   </div>

                   <div className='mx-2'>  
                   <RxCross2 size={20} color='red'/>
                   </div>

                   <div className='mx-2'>
                    <AiFillPrinter size={20}/>
                   </div>
                    </div>
                </td>

                
                  
            </tr>

     

            
      
          
        </tbody>
    </table>
</div>



    </div>
  )
}

export default TableOrders