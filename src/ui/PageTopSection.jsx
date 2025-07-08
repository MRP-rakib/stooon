import Link from 'next/link'
import React from 'react'
import Container from './Container'

function PageTopSection({pageName,CurrentPageLocation}) {

  return (
    
         <div className="bg-[#F79483] py-4 md:py-10">
            <Container>
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
          <h1 className=" capitalize text-[20px] md:text-2xl lg:text-4xl font-bold text-white tracking-wide mb-2 md:mb-0">{pageName}</h1>
          <nav className="flex items-center flex-wrap space-x-2 text-white text-base lg:text-lg">
            <Link href='/' className="hover:underline cursor-pointer">Home</Link>
            <span className="hover:underline capitalize">{CurrentPageLocation}</span>
          </nav>
        </div>
        </Container>
      </div>
   
  )
}

export default PageTopSection