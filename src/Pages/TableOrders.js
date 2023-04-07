import React,{useEffect, useState} from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'
import {AiFillPrinter} from 'react-icons/ai'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../Database/firebase'

const TableOrders = () => {
    const [productList, setProductList] = useState([])
    const [pesoSign, setPesoSign] = useState('₱')

    const [isChecked, setIsChecked] = useState(
        localStorage.getItem('isChecked') === 'true'
      );

    const orderRef = collection(db, 'place-order')

     useEffect(() => {
      
      getDocs(orderRef)
        .then((snapshot) => {
          let productlists = []
          snapshot.docs.forEach((doc) => {
            productlists.push({...doc.data(), id: doc.id}) 
          })
          setProductList(productlists);
        })
        .catch(err => {
          console.log(err.message);
        });
    }, [orderRef]);

    useEffect(() => {
        localStorage.setItem('isChecked', isChecked);
      }, [isChecked]);
    

    const handleCheck = () => {
        // setIsChecked(prevChecked => !prevChecked);
        setIsChecked(!isChecked);
    }

    const handlePrint = () => {
        window.print();
      };

      const handleDelete = (id) => {
        const newOrder = productList.filter((o) => o.id !== id);
        setProductList(newOrder);
        deleteDoc(doc(db, 'place-order', id))
          .then(() => {
            console.log('Document successfully deleted!');
          })
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      };



    

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
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                   Email
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Student Number
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Delivery Address
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Message
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Payment Option
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Product
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Variations
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Size
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Total Payment
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Action
                </th>

              
            </tr>
        </thead>
        <tbody>
        {productList.map(OrderList => (
            <tr key={OrderList.id}  class="bg-black border-b dark:border-gray-700">
                <th scope="row" class={isChecked ? 'line-through text-green-500 px-6 py-4 text-sm whitespace-nowrap font-font':"px-6 py-4 text-sm whitespace-nowrap text-white font-font"}>
                   {OrderList.email || '-'}
                </th>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font':"px-6 py-4 font-font"}>
                   {OrderList.studentNumber || '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font':"px-6 py-4 font-font"}>
                   {OrderList.address || '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font':"px-6 py-4 font-font"}>
                   {OrderList.name || '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font':"px-6 py-4 font-font"}>
                  {OrderList.phoneNumber || '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font':"px-6 py-4 font-font"}>
                   {OrderList.message || '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font uppercase':"px-6 py-4 font-font uppercase"}>
                   {OrderList.cash || '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font uppercase':"px-6 py-4 font-font uppercase"}>
                {OrderList.products && OrderList.products.length > 0 ? OrderList.products.map((product) => product.productName).join(', ') : '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font uppercase':"px-6 py-4 font-font uppercase"}>
                {OrderList.products && OrderList.products.length > 0 ? OrderList.products.map((product) => product.productVariation).join(', ') : '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font uppercase':"px-6 py-4 font-font uppercase"}>
                {OrderList.products && OrderList.products.length > 0 ? OrderList.products.map((product) => product.productSize).join(', ') : '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font uppercase':"px-6 py-4 font-font uppercase"}>
                {OrderList.products && OrderList.products.length > 0 ? OrderList.products.map((product) => product.productQuantity).join(', ') : '-'}
                </td>
                <td class={isChecked ? 'line-through text-green-500 px-6 py-4 font-font uppercase':"px-6 py-4 font-font uppercase"}>
                {OrderList.products && OrderList.products.length > 0 
                    ? `₱${OrderList.products.reduce((total, product) => total + product.productPrice, 0) + 30}` 
                    : '-'
                }
                </td>

                <td class="px-6 py-4">
                    <div className='flex justify-center items-center'>

                    <div className='mx-2'>
                    <button onClick={handleCheck}>
                    <FcCheckmark size={20}/>
                    </button>
                   </div>

                   <div className='mx-2'>  
                   <button onClick={() => handleDelete(OrderList.id)} >
                   <RxCross2 size={20} color='red'/>
                   </button>
                   </div>

                   <div className='mx-2'>
                   <button onClick={handlePrint}>
                    <AiFillPrinter size={20}/>
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

export default TableOrders