import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  IconButton,
  Typography,

} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {AiOutlineEdit} from 'react-icons/ai'
import { updateDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../Database/firebase";
 
export default function EditProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [productList, setProductList] = useState([])

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

 



 
  return (
   
    <React.Fragment>
   
      <button onClick={handleOpen}><AiOutlineEdit size={18} className='mx-2'/></button>
      <Dialog size="xs" open={open} handler={handleOpen}>
       

    <div className="max-w-7xl mx-auto">
        <div className='bg-[#F3EFF5] w-96 -ml-32 rounded-xl md:-ml-24 lg:ml-0 2xl:w-auto 2xl:h-auto'>
            <DialogHeader className="justify-between">
            <Typography variant="h5" color="blue-gray">
                Update Product
            </Typography>
            <IconButton
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={handleOpen}
            >
                <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
            </DialogHeader>

        <div className="mx-5">

            <form >
                <div className="pb-2">

                    <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold opacity-70"
                    >
                    Product Name
                    </Typography>

                    <input 
                    className="border border-black p-1 outline-none w-full text-black  placeholder:text-sm placeholder:pl-2" 
                    placeholder="Enter your new product name" 
                    type='text'/>

                    <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold opacity-70 mt-2"
                    >
                    Product Variations
                    </Typography>

                    <input 

                    className="border border-black p-1 outline-none w-full text-black placeholder:text-sm placeholder:pl-2" 
                    placeholder="Enter your new product variations" 
                    type='text'/>

                    <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold opacity-70 mt-2"
                    >
                    Product Sizes
                    </Typography>

                    <input 
                    va
                    className="border border-black p-1 outline-none w-full text-black placeholder:text-sm placeholder:pl-2" 
                    placeholder="Enter your new product sizes" 
                    type='text'/>

                    <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold opacity-70 mt-2"
                    >
                    Product Category
                    </Typography>

                    <input 
                  
                    className="border border-black p-1 outline-none w-full text-black placeholder:text-sm placeholder:pl-2" 
                    placeholder="Enter your new product category" 
                    type='text'/>

                    <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold opacity-70 mt-2"
                    >
                    Product Stocks
                    </Typography>

                    <input 
                   
                    className="border border-black p-1 outline-none w-full text-black placeholder:text-sm placeholder:pl-2" 
                    placeholder="Enter your new product stocks" 
                    type='text'/>

                    <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold opacity-70 mt-2"
                    >
                    Product Price
                    </Typography>

                    <input 
                
                    className="border border-black p-1 outline-none w-full text-black placeholder:text-sm placeholder:pl-2" 
                    placeholder="Enter your new product price" 
                    type='text'/>

                    <button className="w-full p-3 mt-5 bg-indigo-600 text-white rounded-lg hover:opacity-80">Update Product</button>

                


                </div>
            </form>
     
            </div>
            </div>

            </div>
            

   </Dialog>

    </React.Fragment>
    
  );
}