import React from 'react'

const TableMessage = () => {
  return (
    <div className='mx-5 my-10'>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center text-white ">
        <caption class="bg-black p-5 text-lg font-semibold text-left  text-gray-900  dark:text-white ">
            Contact
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">This page serves as a comprehensive archive of all messages submitted by users on the RTU Apparel website.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-black dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Subject
                </th>
                <th scope="col" class="px-6 py-3">
                    Message
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
              
            </tr>
        </thead>
        <tbody>
            <tr class="bg-black border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Justin Peligro
                </th>
                <td class="px-6 py-4">
                    siuzysaur@gmail.com
                </td>
                <td class="px-6 py-4">
                    12345678901
                </td>
                <td class="px-6 py-4">
                    Item Refund
                </td>
                <td class="px-6 py-4">
                   I want my item to refund
                </td>
                <td class="px-6 py-4 text-right">
                 <div className='flex justify-center'>
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

export default TableMessage