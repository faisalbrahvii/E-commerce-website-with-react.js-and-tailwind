import React from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import dplay from '../assest/assa.png';

const Display = () => {
  return (
    <div className=' mt-16 mobiledevice'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 bg-slate-100'>
        <div className='text-center p-6 md:p-12 lg:p-16'>
          <div>
            <button className='bg-red-600 text-white hover:bg-red-400 text-sm px-7 rounded py-3 animate__animated animate__tada'>Hurry Up!</button>
          </div>
          <div className='mt-4'>
            <h2 className='text-xl sm:text-2xl lg:text-5xl text-black/50 font-bold animate__animated animate__bounceIn'>Up To 25% Discount</h2>
            <h1 className='text-2xl sm:text-4xl lg:text-3xl font-bold text-black/50'>Check it Out</h1>
          </div>
          <div className='flex flex-wrap justify-center gap-4 sm:gap-8 mt-4'>
            <div className='border px-8 py-5  shadow-md rounded-md '>
              <h3 className='text-lg sm:text-xl font-bold'>15</h3>
              <p className='text-sm'>Day</p>
            </div>
            <div className='border px-8 py-5 shadow-md rounded-md'>
              <h3 className='text-lg sm:text-xl font-bold'>25</h3>
              <p className='text-sm'>Day</p>
            </div>
            <div className='border px-8 py-5 shadow-md rounded-md'>
              <h3 className='text-lg sm:text-xl font-bold'>45</h3>
              <p className='text-sm'>Day</p>
            </div>
            <div className='border px-8 py-5 shadow-md rounded-md'>
              <h3 className='text-lg sm:text-xl font-bold'>65</h3>
              <p className='text-sm'>Day</p>
            </div>
          </div>
          <div className='mt-7'>
            <button className=' text-black font-bold w-full rounded-lg  hover:bg-white px-7 py-4  font-sans'>Shop Now</button>
          </div>
        </div>
        <div className=' md:flex justify-center mt-6 md:mt-0'>
          <img className='max-w-full animate__animated animate__bounceIn' src={dplay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Display;
