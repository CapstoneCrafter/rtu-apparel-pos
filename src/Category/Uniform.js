//This page is under home.js, contains all the Uniform of RTU Apparel.

import React, {useState} from 'react'
import POSPicture from '../Assets/mainPOS.png'

const Uniform = () => {
  const [productList, setProductList] = useState([]) 
  const [selectedItems, setSelectedItems] = useState([]);
  const [pesoSign, setPesoSign] = useState('₱')

  const handleSizeSelect = (item, size) => {
    const updatedItem = {
      ...item,
      selectedSize: size
    };
    
    setSelectedItems(prevState => {
      const index = prevState.findIndex(p => p.id === item.id);
      const updatedState = [...prevState];
      updatedState[index] = updatedItem;
      return updatedState;
    });
  };


  
  return (

    <div className='bg-white rounded-lg font-fontP mt-3 p-5 font-semibold text-black'>  {/* main item div */}

    <h1 className='text-xl'>Uniform</h1>

    <div className='grid gap-4 2xl:grid-cols-3 my-2'>

    {productList.filter(product => product.productCategory === "UNIFORM").map(product => (
    <button>
    <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center '>
    
        <div>
        <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
        </div>

        <div className='ml-4'>
        <div className='flex justify-between  w-[420px] md:w-[205px] lg:w-[235px] xl:w-[338px] 2xl:w-[195px] items-center text-sm'>

        <h1 className=''>{product.productName}</h1>
        <h1 className='tracking-stocks text-red-600 text-right'>{product.productStock}</h1>

        </div>

        {/* <h1 className='text-gray-500 text-left text-sm'>₱ 100 / <span className='' > Package</span></h1> */}
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


// //This page is under home.js, contains all the Uniform of RTU Apparel.

// import React, {useState} from 'react'
// import POSPicture from '../Assets/mainPOS.png'

// const Uniform = () => {
//   const [productList, setProductList] = useState([]) 

//   const uniformProducts = productList.filter(product => product.category === "uniform");
  
//   return (

//     <div className='bg-white rounded-lg font-fontP mt-3 p-5 font-semibold text-black'>  {/* main item div */}

//     <h1 className='text-xl'>Uniform</h1>

//     <div className='grid gap-4 2xl:grid-cols-3 my-2'>

//     <button>
//     <div className='border p-2 bg-gray-300 rounded-lg uppercase flex items-center '>
    
//         <div>
//         <img className='w-36 h-36 rounded-md' src={POSPicture} alt='' />
//         </div>

//         <div className='ml-4'>
//         <div className='flex justify-between  w-[420px] md:w-[205px] lg:w-[235px] xl:w-[338px] 2xl:w-[195px] items-center text-sm'>

//         <h1 className=''>P.E Tshirt</h1>
//         <h1 className='tracking-stocks text-red-600 text-right'>25</h1>

//         </div>

//         <h1 className='text-gray-500 text-left text-sm'>₱ 100 / <span className='' > Package</span></h1>

//         <div className='text-left'>
//         <h1 className='text-sm mt-4 -mb-2 text-left text-[#034C3C] '>Sizes:</h1>
//         <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>S</button>
//         <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>M</button>
//         <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>L</button>
//         <button className='m-2 text-sm bg-[#EEF1EF] w-8 h-8 rounded-md hover:bg-[#5998C5] '>XL</button>
//         </div>
//         </div>
      
//     </div>
//     </button>

   
//  </div>

  


// {/* main item div end */}
// </div> 

//   )
// }

// export default Uniform