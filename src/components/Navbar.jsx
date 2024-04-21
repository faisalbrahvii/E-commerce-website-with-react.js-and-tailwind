import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

import { FaSearch, FaHeart, FaShopify, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="container  inset-x-0 mx-auto p-3 flex justify-between items-center bg-transparent w-full">
      <h1 className=' text-3xl font-bold text-black animate__animated animate__fadeInLeft'>eTrade.</h1>
      <ul className='hidden md:flex gap-6 font-sans font-bold'>
      <li className='p-4 text-black'><Link to='/'>Home</Link></li>
        <li className=' flex items-center gap-2'>About Us <FaAngleDown className='mt-1' /> </li>
        <li className=' flex items-center gap-2'>Electronics <FaAngleDown className='mt-1' /> </li>
        <li className=' flex items-center gap-2'>Blog <FaAngleDown className='mt-1' /> </li>
        <li className=' flex items-center gap-2'>Contact <FaAngleDown className='mt-1' /> </li>

      </ul>
      <div className='hidden md:flex gap-10 items-center'>
                <FaSearch className='text-black' /> 
                <FaHeart className='text-black' />
                <FaShopify className='text-black' />
            </div>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-zinc-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>eTrade.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About Us</li>
          <li className='p-4 border-b border-gray-600'>Pages</li>
          <li className='p-4 border-b border-gray-600'><Link to='About'  smooth duration={500}>Blog</Link></li>
          <li className='p-4'>Contact</li>
          <div className=' text-slate-700 p-4 mt-4 flex gap-10 items-center'>
                <FaSearch /> 
                <FaHeart />
                <FaShopify />
                <FaUser  />
            </div>
      </ul>
      
    </div>
  );
};

export default Navbar;
