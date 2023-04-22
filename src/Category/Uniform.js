//This page is under home.js, contains all the accessory of RTU Apparel.

import React,{useState, useEffect, useContext} from 'react'
import { db } from '../Database/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ReceiptContext } from '../Functions/receiptContext'
import tempImg from '../Assets/webp-img/mainPOS.webp'

const Uniform = () => {

  const [uniformProduct, setUniformProduct] = useState([])
  const [pesoSign] = useState('₱')
  const { handleClick, handleSizeSelect} = useContext(ReceiptContext)

  //protected const
  const productRef = collection(db, 'products')
  useEffect(() => {
   const uniformProductsQuary = query(productRef, where("productCategory", "==", "UNIFORM"));
    
    getDocs(uniformProductsQuary)
      .then((snapshot) => {
        let productlists = []
        snapshot.docs.forEach((doc) => {
          productlists.push({...doc.data(), id: doc.id}) 
        })
        setUniformProduct(productlists);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [productRef])
  //protected const end


  return (

<div className='bg-white rounded-lg font-fontP mt-3 p-5 font-semibold text-black'>  {/* main item div */}

<h1 className='text-xl'>Uniform</h1>

<div className='grid gap-4 2xl:grid-cols-3 my-2'>

 {uniformProduct.map(product => (
  <button onClick={() => handleClick(product)}>
<div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center '>

    <div>
    {/* <img className='w-36 h-36 rounded-md' src={product.productImg} alt='' /> */}
    <img className='w-36 h-36 rounded-md' src={tempImg} alt='' />
    </div>

    <div className='ml-4'>
    <div className='flex justify-between  w-[420px] md:w-[205px] lg:w-[235px] xl:w-[338px] 2xl:w-[195px] items-center text-sm'>

    <h1 className=''>{product.productName}</h1>
    <h1 className='tracking-stocks text-red-600 text-right'>{product.productStock}</h1>
    </div>

   <h1 className='text-[#FA9500] text-left text-sm'>  {product.productPrice ? (pesoSign ? pesoSign + ' ' : '') + product.productPrice : '-'} <span >/  {product.productVariations.map((variation, index) => (
                        <span key={index} >{variation || "-"}{index !== product.productVariations.length -1 ? ', ' : ''}</span>
                    ))}</span></h1>

<div className='text-left'>
                      <h1 className='text-sm mt-4 -mb-2 text-left '>Sizes</h1>
                      <div className='sizes'>
                      {product.productSizes.map((size, index) => (
                        <button 
                          key={index}
                          className={`m-2 bg-[#EEF1EF] text-sm w-8 h-8 uppercase rounded-md hover:bg-[#EDD9A3] ${size === product.selectedSize ? 'bg-[#EDD9A3]' : ''}`}
                          onClick={() => handleSizeSelect(product, size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    </div>
        </div>
  
       </div>
      </button>
    ))}

  </div>

{/* main item div end */}
</div> 
    
  )
}

export default Uniform
