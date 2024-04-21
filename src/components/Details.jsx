import React from 'react'
import Ios from '../assest/ios/ioss.png'
import { CiStar  , CiHeart ,CiRouter} from "react-icons/ci";
import { FaFacebookF ,FaInstagram ,FaGithub ,FaTwitter, FaHeart  } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaLessThan ,FaGreaterThan } from "react-icons/fa6";
import Footer from '../components/Footer'

const Details = () => {
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto p-4 '>
        <ul className='flex  gap-8 text-[12px] text-slate-500 font-medium'>
            <li>Home /</li>
            <li>Shop /</li>
            <li>Clothing /</li>
            <li>Laptop/Dasktop /</li>
        </ul>
      </div>
      <div className='grid sm:grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-2'>
        <div>
            <img src={Ios} alt="" />
        </div>
        <div>
            <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className='flex items-center gap-3 mt-2'>
                <div className='flex text-orange-400'>
                <CiStar/>
                <CiStar/>
                <CiStar/>
                <CiStar/>
                <CiStar/>
                </div>
                <div>
                    <p className='text-slate-400'>1 customer review</p>
                </div>
            </div>
            <div>
                <p className='text-red-600 font-bold'>$100.00</p>
            </div>
            <div className='text-slate-500 mt-9'>
                <p>Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, ducimus. Lorem ipsum dolor sit amet consectetur. sit amet consectetur adipisicing elit. Sint dolores neque exercitationem rem nobis ipsa maxime, eaque natus.</p>
            </div>
            <div className='flex gap-3 mt-5'>
                <input className='border px-3 py-2 w-16 ' type="number" />
                <button className='text-center bg-black/85 text-white font-sans px-8 py-2 '>ADD TO CART</button>
            </div>
            <div className='flex gap-3 mt-5'>
            <div className='flex items-center gap-2'>
            <FaHeart />
            <p className='font-semibold'>Browser WithList</p>
            </div>
            <div className='flex  items-center gap-2'>
            <TfiReload   />
            <p className='font-semibold'>Add to compare</p>
            </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-slate-700 '>Category: <span className='text-slate-400'>Clothing Laptop & Dasktop</span> </h1>
                <p className='text-slate-700 mt-2 '>Tag: <span className='text-slate-400'>blouse</span> </p>
            </div>
            <div className='mt-4 flex items-center gap-5'>
                <div>
                <h1 className='text-slate-700'>Share this product :</h1>
                </div>
                <div className='flex gap-3'>
                   <div className='p-3'>
                       <FaFacebookF className='text-slate-600 sm:text-[13px] md:text-1xl lg:text-1xl'/>
                   </div>
                   <div className='p-3'>
                       <FaInstagram className='text-slate-600 sm:text-[13px] md:text-1xl lg:text-1xl'/>
                   </div>
                   <div className='p-3'>
                       <FaTwitter className='text-slate-600 sm:text-[13px] md:text-1xl lg:text-1xl'/>
                   </div>
                   <div className='p-3'>
                       <FaGithub className='text-slate-600 sm:text-[13px] md:text-1xl lg:text-1xl'/>
                   </div>
                   
                </div>

            </div>
        </div>
      </div>
      <div className='flex items-center p-7 gap-4'>
      <FaLessThan size={25} className='text-slate-600' />
      <div>
        <img src={Ios} className='w-20 bg-slate-200 rounded' alt="" />
      </div>
      <div>
        <img src={Ios} className='w-20 bg-slate-200 rounded' alt="" />
      </div>
      <div>
        <img src={Ios} className='w-20 bg-slate-200 rounded' alt="" />
      </div>
      <div>
        <img src={Ios} className='w-20 bg-slate-200 rounded' alt="" />
      </div>
      <FaGreaterThan size={25} className='text-slate-600' />
      </div>
      <div>
        <div className='flex justify-center items-center  gap-4'>
            <button className='border-none text-red-700 text-[20px] font-bold'>Description</button>
            <button className='border-none text-slate-400 font-bold text-[20px]'>Reviews 1</button>
        </div>
        <hr  className='p-2 mt-5'/>
        <div className='p-10'>
            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat similique odit. Est obcaecati, ratione saepe cum molestias, pariatur atque error dolor ad ipsam eius Lorem ipsum dolor sit amet consectetur adipisicing elit . <br /> Amet veritatis ex ipsum quod nisi culpa pariatur laudantium deserunt commodi nulla consequatur accusamus est iste molestias itaque labore, br error vero aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Quod repellendus possimus ipsam ducimus quae. Repudiandae maiores odio enim vero fugit atque beatae deleniti quis expedita? Id veniam repudiandae eos sapiente. quaerat excepturi, maiores labore quis.</p>
        </div>
        <hr  className='p-2'/>
    
      </div>

      <div className='container mx-auto p-3 mb-20'>
        <div className='flex justify-center mb-9'>
          <h1 className='font-bold text-slate-800 text-2xl'>Related products</h1>
        </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-4 mt-5'>
        <div className='border'>
            <div className='flex justify-center bg-slate-200 rounded-lg'>
            <img src={Ios} alt="" className='w-52' />
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div>
                <p className='text-slate-500'>Clothing Laptop & Dasttops</p>
                </div>  
                <div className='flex'>
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar /> 
                <CiStar /> 
                </div>
            </div>
            <div>
                <p className='text-slate-700 font-bold'>Lorem, ipsum dolor.</p>
                <div className='flex gap-2 mt-2'>
                    <p className='text-red-600'>$40.00</p>
                    <p className='text-slate-600'>$50.00</p>
                </div>
            </div>
        </div>
        <div className='border'>
            <div className='flex justify-center bg-slate-200 rounded-lg'>
            <img src={Ios} alt="" className='w-52' />
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div>
                <p className='text-slate-500'>Clothing Laptop & Dasttops</p>
                </div>
                <div className='flex'>
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar /> 
                <CiStar /> 
                </div>
            </div>
            <div>
                <p className='text-slate-700 font-bold'>Lorem, ipsum dolor.</p>
                <div className='flex gap-2 mt-2'>
                    <p className='text-red-600'>$40.00</p>
                    <p className='text-slate-600'>$50.00</p>
                </div>
            </div>
        </div>
        <div className='border'>
            <div className='flex justify-center bg-slate-200 rounded-lg'>
            <img src={Ios} alt="" className='w-52' />
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div>
                <p className='text-slate-500'>Clothing Laptop & Dasttops</p>
                </div>
                <div className='flex'>
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar /> 
                <CiStar /> 
                </div>
            </div>
            <div>
                <p className='text-slate-700 font-bold'>Lorem, ipsum dolor.</p>
                <div className='flex gap-2 mt-2'>
                    <p className='text-red-600'>$40.00</p>
                    <p className='text-slate-600'>$50.00</p>
                </div>
            </div>
        </div>
        <div className='border'>
            <div className='flex justify-center bg-slate-200 rounded-lg'>
            <img src={Ios} alt="" className='w-52' />
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div>
                <p className='text-slate-500'>Clothing Laptop & Dasttops</p>
                </div>
                <div className='flex'>
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar className='text-orange-600' /> 
                <CiStar /> 
                <CiStar /> 
                </div>
            </div>
            <div>
                <p className='text-slate-700 font-bold'>Lorem, ipsum dolor.</p>
                <div className='flex gap-2 mt-2'>
                    <p className='text-red-600'>$40.00</p>
                    <p className='text-slate-600'>$50.00</p>
                </div>
            </div>
        </div>
        
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details
