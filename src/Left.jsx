import axios from 'axios'
import React, { useEffect, useState, useSyncExternalStore } from 'react'

export const Left = () => {
let[set,upset] =useState([])



 

let  getCategory =() =>{
  axios.get('https://dummyjson.com/products/category-list')
  .then((res)=>res.data)
 .then((finalRes)=>{
  upset(finalRes);

   })
  
  }

  useEffect(()=>{
    getCategory()
    
  },[])


  


  
  let cat =set.map((v,i)=>{
  return(
       <li onClick={()=>setcatName(v)}  key={i} className= 'style   bg-[#292626] p-[7px] cursor-pointer text-[#fffcfc] text-[20px] font-serif font-[500] mb-2 text-center rounded-lg' >{v}</li>
  )
  })

  return (
    <div className='style p-6 rounded-lg '>

       <li>{cat}</li>
    </div>
  )
}
