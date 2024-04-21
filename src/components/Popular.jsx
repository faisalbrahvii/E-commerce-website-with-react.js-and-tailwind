import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import  { product1 } from '../Data/Data'; 


const Popular = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex justify-between p-5 '>
        <div className='flex justify-center gap-2 items-center' > 
          <p className=' text-black/65 sm:text-sm md:text-2xl font-bold animate__animated animate__fadeInLeft'>Popular Product</p>
        </div>
      
        <div className='flex gap-8 '>
          <button className='font-bold  animate__animated animate__fadeInRightBig  sm:text-[10px] md:text-sm  text-red-700'>Accessories</button>
          <button className='font-bold  animate__animated animate__fadeInRightBig text-black/55 sm:text-[10px] md:text-sm '>iphone</button>
          <button className='font-bold  animate__animated animate__fadeInRightBig text-black/55 sm:text-[10px] md:text-sm '>Laptop</button>
        </div>
        
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 text-center lg:grid-cols-5  mt-10 p-5 gap-4'>
        {product1.slice(0,10).map((item , index)=>{
            return(
                <div className='border p-3 shadow-md  transition duration-200 ease-in-out transform hover:translate-y-[-12px] hover:shadow-md animate__animated animate__fadeInUp' key={index}>
                <div className='bg-slate-50'>
                <img src={item.image} alt="" />
             </div>
             <div className='mt-4 flex  justify-center'>
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />    
             </div>
             <div className='mt-2'>
                 <p className='font-bold text-sm'>Console Leather & Canvaa Blogs</p>
             </div>
             <div className='flex gap-3 mt-2 mb-3 justify-center'>
                 <h3 className='font-bold text-sm'>$29.99</h3>
                 <h4 className='text-slate-500 text-sm'>$49.99</h4>
             </div>
               </div>     
            )
        })}
      
     </div>
    </div>
  )
}

export default Popular
