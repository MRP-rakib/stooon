import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


function UserSelection() {
  
  return (
    <div className='p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
       group-hover:block group-hover:top-10 absolute top-20 lg:right-0 -right-15  lg:w-[500px] w-[300px] min-w-0  bg-white shadow'>
     <div className=' flex flex-col gap-4'>
      <div className='flex items-center justify-between border-b border-[rgba(0,0,0,0.3)] pb-4'>
      <div className='flex items-center gap-2'>
        <Image src={''} alt='image' width={80} height={100}/>
      <p className='text-[16px] cursor-pointer'>This is product</p>
      </div>
      <div className='flex flex-col gap-2 text-[14px]'>
        <span className='w-[60px] border flex items-center justify-center gap-3 rounded '>
          <p>0</p>
          <div className='flex flex-col text-[16px]'>
            <span><IoMdArrowDropup /></span>
          <span><IoMdArrowDropdown /></span>
          </div>
        </span>
        <button className='cursor-pointer'>Remove</button>
      </div>
     </div>
      
     </div>
     <h3 className='text-[16px] py-5'>Total Price:00</h3>
     <Link href='/cart' className='border border-[rgba(0,0,0,0.3)] px-2 py-2 text-base'>Go To Card</Link>
    </div>
  )
}

export default UserSelection