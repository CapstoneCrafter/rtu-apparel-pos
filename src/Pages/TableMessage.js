import React, { useEffect, useState } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'
import { db } from '../Database/firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

const TableMessage = () => {

    //We created a state for our productList, using this we can map through our 'contact-us' collection firestore.
    const [contact, setContact] = useState([]);

    //By using localStorage, the button state can be preserved even if the user refreshes the page or closes the browser.
    const [isChecked, setIsChecked] = useState(
        localStorage.getItem('isChecked') === 'true'
      );

    //We created a const called 'colRef' in short for contactReference.
    //Using this we set our 'colRef' to our collection 'contact-us'
    const colRef = collection(db, 'contact-us');

    //Using useEffect we fetch the 'contact-us' collection in our firestore firebase.
    //When we say 'fetch' we get the data from database and display it into our web page table.
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

    //This function will delete the specific row in my table.
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

     
     //Using this function we can check or unchecked the row in our table.
    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

    //Using useEffect we stored our isChecked in our localStorage, so whenever we switch to different web page, the isChecked remain the same.
    useEffect(() => {
      localStorage.setItem('isChecked', isChecked);
    }, [isChecked]);
      
    
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

