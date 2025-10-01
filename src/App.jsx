import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './navbar'

import axios from 'axios'
import { ProductGrid } from './Right'
import { Left } from './Left'



function App() {



  return (
    <>
  
  <div className='text-amber-50'>

    <Navbar/>
   <div className='grid grid-cols-[25%_auto]'>
    <div>
 <Left/>
    </div>

    <div>
      <ProductGrid/>
    </div>
   </div>


  </div>
    </>
  )
}

export default App
