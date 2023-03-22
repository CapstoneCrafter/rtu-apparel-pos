import React from 'react'

const TableOrders = () => {
  return (
    <div className='mx-5 my-10'>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center text-white ">
        <caption class="bg-black p-5 text-lg font-semibold text-left  text-gray-900  dark:text-white ">
            Purchase Item
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">If you're looking for information about orders placed by users on the RTU Apparel website,
             you've come to the right place as this page displays all of that data.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-black dark:text-gray-400">
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
                <th scope="row" class="px-6 py-4 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                   siuzysaur@gmail.com
                </th>
                <td class="px-6 py-4">
                    2021-105772
                </td>
                <td class="px-6 py-4">
                    Metro Manila, Mandaluyong City, 1550, Addition hills
                </td>
                <td class="px-6 py-4">
                    Justin Peligro
                </td>
                <td class="px-6 py-4">
                    12345678901
                </td>
                <td class="px-6 py-4">
                    No signal in my place
                </td>
                <td class="px-6 py-4">
                    Cash on Delivery
                </td>
                <td class="px-6 py-4">
                   PE TShirt
                </td>
                <td class="px-6 py-4">
                   Package
                </td>
                <td class="px-6 py-4">
                    L
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    ₱500
                </td>
                <td class="px-6 py-4">
                    <div className='flex justify-center items-center'>
                       <h1 className='mr-2'>Delete</h1>
                        <h1>Done</h1>
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