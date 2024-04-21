import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import  { category } from '../Data/Data'; 

const Category = () => {
  return (
    <div className='container mx-auto mt-5'>
      <div className='flex justify-between p-5'>
        <div className='flex justify-center gap-2 items-center' > 
          <BiCategoryAlt />
          <p className=' text-red-700 animate__animated animate__fadeInUp'> Category</p>
        </div>
      </div>
      <div className=''>
        <h1 className='sm:text-lg md:text-3xl  font-bold ml-5 text-black/65 animate__animated animate__fadeInUp '>Trending Categories</h1>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-10 gap-2 p-2 '>
        {category.map((item , index) => ( 
          <div key={index} className='border w-auto flex flex-col items-center animate__animated animate__fadeInUp'>
            <img src={item.image} alt="" className='sm:max-w-[150px]   md:max-w-[100px] max-h-[100px] ' />
            <p className='font-bold text-[17px]'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
