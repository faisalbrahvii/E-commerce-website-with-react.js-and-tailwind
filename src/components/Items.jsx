import React from 'react'
import Banner1 from '../assest/banner/banner1.jpg'
import Banner2 from '../assest/banner/banner2.jpg'
import Banner3 from '../assest/banner/banner3.jpg'

const items = () => {
  return (
    <div className='container mx-auto mt-10'>
  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
    <div className='border bg-cover bg-center p-11 ' style={{ backgroundImage: `url(${Banner1})` }}>
      <div className=''>
        <h2 className='font-sans text-white'>Intelligent</h2>
        <h4 className='font-bold  text-[18px]  text-white'>New Touch Control</h4>
        <p className='text-slate-400 mt-4 '>Discount 20% On Products</p>
      </div>
    </div>
    <div className='border bg-cover bg-center p-11' style={{ backgroundImage: `url(${Banner2})` }}>
      <div className=''>
        <h2 className='font-sans text-white'>On-Site</h2>
        <h4 className='font-bold text-[18px]   text-white'>Best Prices Headphone</h4>
        <p className='text-slate-400 mt-4 '>Limited Time Orders</p>
      </div>
    </div>
    <div className='border bg-cover bg-center p-11' style={{ backgroundImage: `url(${Banner3})` }}>
      <div className=''>
        <h2 className='font-sans text-white'>Hot Sale</h2>
        <h4 className='font-bold text-[18px]   text-white'>Super Laptops 2022</h4>
        <p className='text-slate-400 mt-4 '>Free Shopping All Orders</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default items
