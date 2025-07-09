"use client"
import Container from '@/ui/Container'
import PageTopSection from '@/ui/PageTopSection'
import { usePathname } from 'next/navigation'
import React from 'react'

function Cartpage() {
const pathName = usePathname()
  return (
    <div>
        <PageTopSection pageName='cart' CurrentPageLocation={pathName}/>
    </div>
  )
}

export default Cartpage