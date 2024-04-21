import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

import { ios_display } from '../Data/Data'
import { ios } from '../Data/Data'

import { CiHeart } from "react-icons/ci";

const PhoneSell = () => {
  return (
    <div className='container mx-auto  mt-12 mb-5 p-5'>
      <div className='flex justify-between '>
        <div>
        {/* <h1 className='sm:text-lg md:text-3xl font-bold ml-5 text-black/65'>Top Iphone Products</h1> */}
        <p className=' text-black/65 sm:text-sm md:text-2xl font-bold animate__animated animate__fadeInLeft'>Top Iphone Products</p>
        <hr className='mt-5 text-orange-900' />
        </div>
        <div className='flex items-center gap-2 '>
        <button className='font-bold text-black/70 flex items-center gap-2 sm:text-sm md:text-[14px] animate__animated animate__fadeInLeft'>View all Phones Collection <IoIosArrowRoundForward className='text-red-700 animate__animated animate__fadeInLeft' size={25} /></button>
        </div>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-10 p-2 gap-5'>
        {ios_display.slice(0,1).map((Ios , index)=>{
            return(
                <div className='flex' key={index}>
            <div className=''>
                <img src={Ios.image} alt="" />
            </div>
            <div className='w-96 '>
                <h2 className='text-blue-700 font-bold'>{Ios.name}</h2>
                <div className='flex mt-3 gap-3'> 
                <p className='text-red-500'>{Ios.current_price}</p>
                <p className='text-gray-400'>{Ios.price}</p>
                </div>
                <h2 className='text-slate-400 font-sans mt-4'>{Ios.dec}</h2>

             <div className='flex items-center gap-4 mt-4'>
                <button className='bg-orange-300 text-black w-full sm:w-48 py-3 rounded'>ADD TO CART</button>
                <CiHeart className=' border  sm:text-3xl p-3 md:text-6xl lg:text-6xl hover:text-orange-700 ' />

             </div>
            
            </div>
        </div>    
            )
        })}
        
        <div className='grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 '>
            {ios.map((Iphone , index)=>{
                return(
                    <div className='flex'>
                      <div className=''>
                          <img src={Iphone.image} alt="" className='img' />
                      </div>
                      <div className='w-96'>
                          <h2 className='text-blue-700 font-bold'>{Iphone.name} </h2>
                          <div className='flex mt-3 gap-3'> 
                          <p className='text-black'>{Iphone.price}</p>
                          </div>             
                      </div>
                     </div>
                )
            })}
        

        </div>
      </div>
    </div>
  )
}

export default PhoneSell
