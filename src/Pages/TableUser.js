import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'
import { db } from '../Database/firebase'

const TableUser = () => {
    const [users, setUsers] = useState([])

    const colRef = collection(db, 'users-info')

    useEffect(() => {
        getDocs(colRef)
        .then((snapshot) => {
            let userData = []
            snapshot.docs.forEach((doc) => {
                userData.push({...doc.data(), id: doc.id})
            })
            setUsers(userData)
        })
        .catch(err => {
            console.log(err.messsage)
        })
    }, [colRef])

    
  return (
    <div className='m-2'>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center text-white ">
        <caption class="bg-black p-5 text-lg font-semibold text-left text-white ">
            Users
            <p class="mt-1 text-sm font-normal text-gray-500">This page stores the personal information of RTU Apparel web users.</p>
        </caption>
        <thead class="text-[#EFDD8D] text-sm uppercase bg-black ">
            <tr>
                <th scope="col" class="px-6 py-3">
                     -
                </th>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
              
            </tr>
        </thead>
        <tbody>
        {users.map((user =>
            <tr key={user.id} class="bg-black border-b border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                <div className='flex justify-center'>
                    <img className='bg-white rounded-full w-10 h-10' src={user.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt=''/>
                    </div>
                </th>
                <td class="px-6 py-4 font-font">
                   {user.id}
                </td>
                <td class="px-6 py-4 font-font">
                   {user.name || "-"}
                </td>
                <td class="px-6 py-4 font-font">
                   {user.email}
                </td>
        
                  
            </tr>
      
          ))}
        </tbody>
    </table>
</div>



    </div>
  )
}

export default TableUser

// import React from 'react'
// import {FcCheckmark} from 'react-icons/fc'
// import {RxCross2} from 'react-icons/rx'

// const TableUser = () => {
//   return (
//     <div className='m-2'>

//     <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table class="w-full text-sm text-center text-white ">
//         <caption class="bg-black p-5 text-lg font-semibold text-left  text-gray-900  dark:text-white ">
//             Users
//             <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">This page stores the personal information of RTU Apparel web users.</p>
//         </caption>
//         <thead class="text-xs text-gray-700 uppercase bg-black dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                      -
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Name
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Email
//                 </th>
              
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-black border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 <div className='flex justify-center'>
//                     <img className='bg-white w-12 h-12' src='' alt=''/>
//                     </div>
//                 </th>
//                 <td class="px-6 py-4">
//                    Justin Peligro
//                 </td>
//                 <td class="px-6 py-4">
//                     siuzysaur@gmail.com
//                 </td>
        
                  
//             </tr>
      
          
//         </tbody>
//     </table>
// </div>



//     </div>
//   )
// }

// export default TableUser