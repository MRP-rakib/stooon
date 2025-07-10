'use client'
import Instagram from '@/ui/Instagram'
import Container from '@/ui/Container'
import PageTopSection from '@/ui/PageTopSection'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactPage() {
  const pathName = usePathname()
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
     <PageTopSection pageName='Contact' CurrentPageLocation={pathName}/>
      {/* Google Map Section */}
      <div className="w-full h-[300px] md:h-[70vh] bg-[#99d8e6]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01923401908!2d-122.4473036846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x8e8e8e8e8e8e8e8e!2sUniversity%20of%20San%20Francisco!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Contact Info & Form Section */}
      <Container>
        <div className="py-10 md:py-16">
          <h2 className="text-2xl md:text-4xl text-center font-light mb-2">CONTACT US FOR ANY QUARY</h2>
          <div className="flex justify-center mb-8">
            <div className="w-12 h-1 border-b-2 border-gray-200 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 border border-gray-200 bg-white rounded-full"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#F79483] text-white text-2xl"><FaPhoneAlt /></span>
              </div>
              <div className="text-gray-700 text-base">+123456 78910<br/>+123456 78911<br/><span className="text-xs text-gray-500">Mobile</span></div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#F79483] text-white text-2xl"><FaEnvelope /></span>
              </div>
              <div className="text-gray-700 text-base">brandfashion@email.com<br/>support@zwin.io<br/><span className="text-xs text-gray-500">Email</span></div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#F79483] text-white text-2xl"><FaMapMarkerAlt /></span>
              </div>
              <div className="text-gray-700 text-base"><span className="underline cursor-pointer">125/A, CA Commercial Area</span><br/>California, USA<br/><span className="text-xs text-gray-500">Address</span></div>
            </div>
          </div>
          </div>
      </Container>
          
          <div className="bg-[#f8f8f8] py-8 md:py-12 px-2 md:px-0">
            <Container>
              <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name*" className="border w-full px-4 py-3 outline-none bg-white" />
                <input type="text" placeholder="Phone*" className="border w-full px-4 py-3 outline-none bg-white" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email*" className="border w-full px-4 py-3 outline-none bg-white" />
                <input type="text" placeholder="Topic" className="border w-full px-4 py-3 outline-none bg-white" />
              </div>
              <textarea placeholder="Message" className="border w-full px-4 py-3 outline-none bg-white min-h-[120px] md:min-h-[150px]" />
              <div className="flex justify-center">
                <button type="submit" className="bg-black text-white px-8 md:px-10 py-3 font-semibold tracking-wide w-full md:w-auto">SEND MESSAGE</button>
              </div>
            </form>
            </Container>
          </div>
          <Instagram/>
        </div>
      
    
  )
}