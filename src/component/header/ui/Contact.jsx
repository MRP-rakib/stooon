import React from 'react'
import { IoMdClose } from "react-icons/io";

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
function ContactUS({ handelSideBarClose, openSidebar }) {
  return (
    <div className={` absolute top-0 right-0 w-0 h-full bg-[rgba(0,0,0,0.20)]  transition-all duration-1000 ${openSidebar && 'w-full'}`}>
      <div className=' relative'>
        <div className={` absolute top-0 right-0 bg-white 
              ${openSidebar && 'w-[50%] md:w-[300px] lg:w-[400px]'} w-0 h-[100vh] z-10 transition-all duration-1000 overflow-auto`}>
          <div className='flex justify-end '>
            <button onClick={handelSideBarClose} className='py-4 px-3 bg-red-300 hover:bg-red-500 transition-all 
                   duration-300 text-white text-2xl'><IoMdClose /></button>
          </div>
         <Contact/>
         <MobileMenu/>
        </div>
</div>
    </div>
  )
}
const Contact =()=>{
  return(
     <div className="py-12 px-7 hidden lg:block  space-y-6 text-gray-700">
            {/* Logo */}
            <Image src='/logo.png' width={100} height={100} alt='logo' />

            {/* Description */}
            <p className="text-sm leading-relaxed">
              We believe brand interaction is key in commu- nication. Real inno vations and a positive customer experience are the heart of successful commu- nication.
            </p>

            {/* Contact Info */}
            <div className="text-left space-y-4">
              <h2 className="text-[20px] font-semibold text-black">Contact Us</h2>
              <div className="flex items-start gap-2">
                <HiOutlineLocationMarker className="mt-1 text-xl" />
                <span>Lavaca Street, Suite 2000</span>
              </div>
              <div className="flex items-start gap-2">
                <HiOutlineMail className="mt-1 text-xl" />
                <span>email@evha.com</span>
              </div>
              <div className="flex items-start gap-2">
                <HiOutlinePhone className="mt-1 text-xl" />
                <span>(+880) 172570051</span>
              </div>
            </div>

            {/* Email input */}
            <div className="flex border border-gray-300 overflow-hidden rounded">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 w-full outline-none text-sm"
              />
              <button className="bg-red-200 hover:bg-red-500 transition-all 
                   duration-300 px-3 flex items-center justify-center">
                <FiArrowRight className="text-white" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Icon className="text-gray-700" />
                </div>
              ))}
            </div>
          </div>
  )
}
const MobileMenu=()=>{
  return(
    <div className='lg:hidden block'>
      <ul className='flex flex-col px-6 capitalize gap-5 text-Black font-medium text-base'>
                <Link href='/'>home</Link>
                <li>shop</li>
                <li>pages</li>
                <Link href='/about'>about us</Link>
                <Link href='/contact'>contact us</Link>
            </ul>
    </div>
  )
}
export default ContactUS