import React, { use, useEffect, useState } from 'react'
import { Products } from './DataBox';

import axios from 'axios'
import { Star } from 'lucide-react';


export const ProductGrid=()=> {

 let[finalPro, setfinalPro] =useState([])


 let getproducts=()=>{
  axios.get('https://dummyjson.com/products')
  .then((proRes)=>proRes.data)
  .then((finalRes)=>{
   setfinalPro(finalRes.products);
  })
 } 

 useEffect(()=>{
   
   getproducts();
 },[])



return(
  <>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
{finalPro.map((v,i)=>{

  return(
<div className="border rounded-lg shadow-sm bg-white p-3 hoProducter:shadow-lg transition">
  <img src={v.thumbnail}      
  className="w-full h-56 object-coProducter rounded-md"/>

   <diV className="mt-3">

      <h2 className="text-sm font-medium text-gray-800 truncate">
               {v.title}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold">₹{v.price}</span>
              { v.price && (
                <span className="text-gray-400 line-through">
                  ₹{v.price}
                </span>
              )}
              {v.price && (
                <span className="text-green-600 text-sm font-semibold">
                 ₹ {v.price}
                </span>
              )}
            </div>
              <p className="text-xs text-gray-600 mt-1">Free DeliProductery</p>
             <div className="flex items-center gap-1 mt-2">
              <div className="flex items-center bg-green-600 text-white text-xs px-2 py-0.5 rounded-md">
                {v.rating} <Star size={12} className="ml-1" />
              </div>
              
//             </div>

   </diV>


</div>

  )
})}
    
        </div>





   
  </>
)
}




//   return (

    
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//       {finalPro.map((v,i) => (
//         <div
//           key={v.id}
//           className="border rounded-lg shadow-sm bg-white p-3 hoProducter:shadow-lg transition"
//         >
//           {/* Product Image */}
//           <img
//             src={v.images}
//             alt={Product.name}
//             className="w-full h-56 object-coProducter rounded-md"
//           />

//           {/* Product Info */}
//           <div className="mt-3">
//             <h2 className="text-sm font-medium text-gray-800 truncate">
//               {Product.name}
//             </h2>

//             {/* Price */}
//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-lg font-bold">₹{Product.price}</span>
//               {Product.oldPrice && (
//                 <span className="text-gray-400 line-through">
//                   ₹{Product.oldPrice}
//                 </span>
//               )}
//               {Product.discount && (
//                 <span className="text-green-600 text-sm font-semibold">
//                   {Product.discount}
//                 </span>
//               )}
//             </div>

//             {/* DeliProductery */}
//             <p className="text-xs text-gray-600 mt-1">Free DeliProductery</p>

//             {/* Rating */}
//             <div className="flex items-center gap-1 mt-2">
//               <div className="flex items-center bg-green-600 text-white text-xs px-2 py-0.5 rounded-md">
//                 {/* {Product.rating} <Star size={12} className="ml-1" /> */}
//               </div>
//               <span className="text-xs text-gray-600">
//                 {Product.reProductiews} ReProductiews
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
     
//     </div>
//   );




// }

//   function ProductsItems ({pdata}){

//   return(
//     <diProduct className='shadow-lg text-center pb-4'>
//         <img src={pdata.thumbnail}/>
//         <h4>{pdata.title}</h4>
//         <b>{pdata. price}_Rs</b> 
//       </diProduct> 
//   )
// }

