'use client'
import Container from '@/ui/Container'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
    const [openSearch, setSearch] = useState(false)
    const handelSearchbarOpen=()=>{
        setSearch(true)
    }
    const handelSearchbarClose=()=>{
        setSearch(false)
    }

  return (
    <nav className='py-7.5 bg-white'>
     <Container>
        <div className='flex justify-between items-center'>
            <Image src='/logo.png'width={100} height={100} alt='logo'/>
            <ul className='hidden lg:flex capitalize gap-12 items-center text-Black font-medium text-base'>
                <li>home</li>
                <li>shop</li>
                <li>pages</li>
                <li>about us</li>
                <li>contact us</li>
            </ul>
            <div className='flex items-center gap-4 md:gap-6 lg:gap-8 text-[20px] lg:text-2xl '>
                <span onClick={handelSearchbarOpen} className='hover:text-primary  cursor-pointer'><IoIosSearch /></span>
                <span className=' relative hover:text-primary cursor-pointer'>
                    <FaRegHeart />
                    <p className=' absolute  right-0 -bottom-1 w-4 h-4 rounded-full flex items-center justify-center
                            bg-primary text-white text-[8px] font-semibold  cursor-pointer'>0</p>
                </span>
                <span className=' relative hover:text-primary cursor-pointer'>
                    <IoBagOutline />
                <p className=' absolute  right-0 -bottom-1 w-4 h-4 rounded-full flex items-center justify-center
                            bg-primary text-white text-[8px] font-semibold cursor-pointer'>0</p>
                </span>
                <span className='hover:text-primary'><IoPersonOutline /></span>
                <span className='hover:text-primary cursor-pointer'><CiMenuFries /></span>
            </div>
        </div>
     </Container>
        <SearchBar openSearch={openSearch} handelSearchbarClose={handelSearchbarClose}/>
    </nav>
  )
}
function SearchBar({openSearch,handelSearchbarClose}){
    return(
        <div className={`bg-[rgba(0,0,0,0.20)] border w-[0] opacity-0 invisible ${openSearch && 'w-full cursor opacity-100 visible'}
         transition-all duration-600 h-[100%] fixed top-0 right-0`}>
            <div onClick={handelSearchbarClose} className='w-full h-full'></div>
            <form className={`flex items-center absolute top-[20%] left-[50%] -translate-[50%]`}>
                <input className=' bg-white py-2 px-2 rounded
                outline-none w-[250px] md:w-[400px] lg:w-[500px]' type="search" placeholder='search...' />
                <button className='bg-primary text-white
                   text-2xl py-2 px-2 '><IoIosSearch /></button>
            </form>
         </div>
    )
}
export default Navbar
