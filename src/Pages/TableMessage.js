import React, { useEffect, useState } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'
import { db } from '../Database/firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

const TableMessage = () => {

    const [contact, setContact] = useState([]);
    // const [isChecked, setIsChecked] = useState(false)
    const [isChecked, setIsChecked] = useState(
        localStorage.getItem('isChecked') === 'true'
      );

    const colRef = collection(db, 'contact-us');

    useEffect(() => {
      
      getDocs(colRef)
        .then((snapshot) => {
          let contactData = []
          snapshot.docs.forEach((doc) => {
            contactData.push({...doc.data(), id: doc.id}) 
          })
          setContact(contactData);
        })
        .catch(err => {
          console.log(err.message);
        });
    }, [colRef]);


    const handleDelete = (id) => {
        const newContact = contact.filter((c) => c.id !== id);
        setContact(newContact);
        deleteDoc(doc(db, 'contact-us', id))
          .then(() => {
            console.log('Document successfully deleted!');
          })
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      };

      useEffect(() => {
        localStorage.setItem('isChecked', isChecked);
      }, [isChecked]);
    

    const handleCheck = () => {
        // setIsChecked(prevChecked => !prevChecked);
        setIsChecked(!isChecked);
    }

      
    
  return (
    <div className='m-2 '>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center text-white ">
        <caption class="bg-black p-5 text-lg font-semibold text-white text-left  ">
            Contact
            <p class="mt-1 text-sm font-normal text-gray-500 ">This page serves as a comprehensive archive of all messages submitted by users on the RTU Apparel website.</p>
        </caption>
        <thead class=" text-[#EFDD8D] uppercase bg-black text-sm">
            <tr>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                   Name
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Email
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Subject
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Message
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Action
                </th>
              
            </tr>
        </thead>
        <tbody>
        {contact.map(contacts =>(
            <tr key={contacts.id}  class="bg-black border-b dark:border-gray-700">
     
                <th scope="row" class={isChecked ? 'line-through px-6 py-4 font-font whitespace-nowrap text-green-500' :"px-6 py-4 font-font  whitespace-nowrap text-white"}>
                    {contacts.firstName + '' + contacts.lastName}
                </th>
                <td class={isChecked ? ' line-through px-6 py-4 text-green-500 font-font' : 'px-6 py-4 font-font'}>
                {contacts.email}
                </td>
                <td class={isChecked ? ' line-through px-6 py-4 text-green-500 font-font' : 'px-6 py-4 font-font'}>
                {contacts.phoneNumber}
                </td>
                <td class={isChecked ? ' line-through px-6 py-4 text-green-500 font-font' : 'px-6 py-4 font-font'}>
                {contacts.subject}
                </td>
                <td class={isChecked ? ' line-through px-6 py-4 text-green-500 font-font' : 'px-6 py-4 font-font'}>
                {contacts.message}
                </td>
                <td class="px-6 py-4 text-right">

                 <div className='flex justify-center '>
                 
                 <div className='mr-2'>
                 <button onClick={handleCheck}>
                   <FcCheckmark size={20}/>
                   </button>
                   </div>

                   <div className='ml-2'>  
                   <button onClick={() => handleDelete(contacts.id)}>
                   <RxCross2 size={20} color='red'/>
                   </button>
                   </div>

                 </div>
                </td>
                  
            </tr>
      
            ))}
        </tbody>
    </table>
</div>



    </div>
  )
}

export default TableMessage

// import React from 'react'
// import {FcCheckmark} from 'react-icons/fc'
// import {RxCross2} from 'react-icons/rx'

// const TableMessage = () => {
//   return (
//     <div className='m-2'>

//     <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table class="w-full text-sm text-center text-white ">
//         <caption class="bg-black p-5 text-lg font-semibold  text-left  text-gray-900  dark:text-white ">
//             Contact
//             <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">This page serves as a comprehensive archive of all messages submitted by users on the RTU Apparel website.</p>
//         </caption>
//         <thead class="text-xs text-gray-700 uppercase bg-black dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                    Name
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Email
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Phone
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Subject
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Message
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
              
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-black border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Justin Peligro
//                 </th>
//                 <td class="px-6 py-4">
//                     siuzysaur@gmail.com
//                 </td>
//                 <td class="px-6 py-4">
//                     12345678901
//                 </td>
//                 <td class="px-6 py-4">
//                     Item Refund
//                 </td>
//                 <td class="px-6 py-4">
//                    I want my item to refund
//                 </td>
//                 <td class="px-6 py-4 text-right">

//                  <div className='flex justify-center '>
                 
//                  <div className='mr-2'>
//                    <FcCheckmark size={20}/>
//                    </div>

//                    <div className='ml-2'>  
//                    <RxCross2 size={20} color='red'/>
//                    </div>

//                  </div>
//                 </td>
                  
//             </tr>
      
          
//         </tbody>
//     </table>
// </div>



//     </div>
//   )
// }

// export default TableMessage