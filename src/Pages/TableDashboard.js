import React, { useState, useEffect } from 'react'
import {BsTrash} from 'react-icons/bs'
import { db } from '../Database/firebase'
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { POSPagination } from '../Components/Pagination'
import EditProduct from './EditModal'
import {    AiOutlineEdit   } from 'react-icons/ai'

const TableDashboard = () => {

    const [productList, setProductList] = useState([]) 
    const [pesoSign, setPesoSign] = useState('₱')
  

    const productRef = collection(db, 'products')

     useEffect(() => {
      
      getDocs(productRef)
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
    }, [productRef]);


    const handleDelete = (id) => {
        const newContact = productList.filter((c) => c.id !== id);
        setProductList(newContact);
        deleteDoc(doc(db, 'products', id))
          .then(() => {
            console.log('Document successfully deleted!');
          })
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      };
      

    

  return (
    <div className='m-2'>

    <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center text-white ">
        <caption class="bg-[#232C33] p-5 text-lg font-semibold text-left text-white ">
            Dashboard
            <p class="mt-1 text-sm font-normal text-gray-500 ">The dashboard page displays the current state of the business with comprehensive metrics, 
            including the total number of products, users, revenue, and orders.</p>
        </caption>
        <thead class="text-[#EFDD8D] text-sm uppercase bg-[#232C33] ">
            <tr>
                <th scope="col" class="px-6 py-3">
                   -
                </th>
                <th scope="col" class="px-6 py-3  font-normal font-fontMain tracking-widest ">
                    Product
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Variations
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Sizes
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Stocks
                </th>

                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Price
                </th>

                <th scope="col" class="px-6 py-3 font-normal font-fontMain tracking-widest">
                    Action
                </th>
              
              
            </tr>
        </thead>
        <tbody>
        {productList.map((ListProduct =>
            <tr class="bg-[#232C33] border-b border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                <div className='flex justify-center'>

                <img className='bg-white w-12 h-12' src={ListProduct.productImg + `?t=${Date.now()}`} alt='' />

                    {/* <img className='bg-white w-12 h-12' src={ListProduct.productImg} alt='' /> */}
                    </div>
                </th>
                <td class="px-6 py-4 uppercase font-font text-sm">
                  {ListProduct.productName || "-"}
                </td>
                <td class="px-6 py-4 uppercase font-font text-sm">
                 {ListProduct.productVariations.map((variation, index) => (
                    <span key={index} >{variation || "-"}{index !== ListProduct.productVariations.length -1 ? ', ' : ''}</span>
                 ))}
                </td>
              
                <td class="px-6 py-4 uppercase font-font text-sm">
                {ListProduct.productSizes.map((size, index) => (
                    <span key={index} >{size || "-"}{index !== ListProduct.productSizes.length -1 ? ', ' : ''}</span>
                 ))}
                </td>
               
                <td class="px-6 py-4 uppercase font-font text-sm">
                    {ListProduct.productCategory || "-"}
                </td>
                
                <td class="px-6 py-4 uppercase font-font text-sm">
                    {ListProduct.productStock  || "-"}
                </td>

                <td class="px-6 py-4 uppercase font-font text-sm">
                {ListProduct.productPrice ? (pesoSign ? pesoSign + ' ' : '') + ListProduct.productPrice : '-'}
                        
                </td>

                <td class="px-6 py-4 uppercase font-font">
                

                   <div className='ml-2 flex justify-center items-center'>  
                  
                   <button onClick={() => handleDelete(ListProduct.id)}>
                   <BsTrash size={18} color='red' className='mx-2'/>
                   </button>
                
                   
                   {/* <EditProduct/> */}
                  
                   </div>

                 </td>

            </tr>
      
            ))}
        </tbody>
    </table>
</div>
        {/* <div className='flex justify-center'>
            <POSPagination/>
        </div> */}


    </div>
  )
}

export default TableDashboard


// import React, { useState, useEffect } from 'react'
// import {BsTrash} from 'react-icons/bs'
// import { db } from '../Database/firebase'
// import { collection, doc, getDocs } from 'firebase/firestore'
// import { POSPagination } from '../Components/Pagination'
// import {    AiOutlineEdit   } from 'react-icons/ai'

// const TableDashboard = () => {

//     const [productList, setProductList] = useState([])

//     const productRef = collection(db, 'products')

//      useEffect(() => {
      
//       getDocs(productRef)
//         .then((snapshot) => {
//           let productlists = []
//           snapshot.docs.forEach((doc) => {
//             productlists.push({...doc.data(), id: doc.id}) 
//           })
//           setProductList(productlists);
//         })
//         .catch(err => {
//           console.log(err.message);
//         });
//     }, [productRef]);

//   return (
//     <div className='m-2'>

//     <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
//     <table class="w-full text-sm text-center text-white ">
//         <caption class="bg-[#232C33] p-5 text-lg font-semibold text-left text-white ">
//             Dashboard
//             <p class="mt-1 text-sm font-normal text-gray-500 ">The dashboard page displays the current state of the business with comprehensive metrics, 
//             including the total number of products, users, revenue, and orders.</p>
//         </caption>
//         <thead class="text-[#EFDD8D] text-sm uppercase bg-[#232C33] ">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                    -
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Product
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Variations
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Sizes
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//                 </th>

//                 <th scope="col" class="px-6 py-3">
//                     Stocks
//                 </th>

//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
              
              
//             </tr>
//         </thead>
//         <tbody>
//         {productList.map((ListProduct =>
//             <tr class="bg-[#232C33] border-b border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                 <div className='flex justify-center'>
//                     <img className='bg-white w-12 h-12' src={ListProduct.productImg} alt='' />
//                     </div>
//                 </th>
//                 <td class="px-6 py-4 uppercase font-font text-sm">
//                   {ListProduct.productName}
//                 </td>
//                 <td class="px-6 py-4 uppercase font-font text-sm">
//                  {ListProduct.productVariations.map((variation, index) => (
//                     <span key={index} >{variation}{index !== ListProduct.productVariations.length -1 ? ', ' : ''}</span>
//                  ))}
//                 </td>
              
//                 <td class="px-6 py-4 uppercase font-font text-sm">
//                 {ListProduct.productSizes.map((size, index) => (
//                     <span key={index} >{size}{index !== ListProduct.productSizes.length -1 ? ', ' : ''}</span>
//                  ))}
//                 </td>
               
//                 <td class="px-6 py-4 uppercase font-font text-sm">
//                     {ListProduct.productCategory}
//                 </td>
//                 <td class="px-6 py-4 uppercase font-font text-sm">
//                     {ListProduct.productPrice} php
//                 </td>

//                 <td class="px-6 py-4 uppercase font-font text-sm">
//                         1
//                 </td>

//                 <td class="px-6 py-4 uppercase font-font">
                

//                    <div className='ml-2 flex justify-center items-center'>  
//                    <button >
//                    <BsTrash size={20} color='red' className='mx-2'/>
//                    </button>
                   
//                    <button>
//                     <AiOutlineEdit size={20} className='mx-2'/>
//                    </button>
//                    </div>

//                  </td>

//             </tr>
      
//             ))}
//         </tbody>
//     </table>
// </div>
//         <div className='flex justify-center'>
//             <POSPagination/>
//         </div>


//     </div>
//   )
// }

// export default TableDashboard