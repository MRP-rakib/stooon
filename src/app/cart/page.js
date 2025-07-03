import Container from '@/ui/Container'
import React from 'react'

function page() {
  return (
    <div className='bg-primary lg:py-12 py-5'>
        <Container>
            <div className='flex justify-between items-center text-white'>
                <h3 className='lg:text-2xl text-[18px] uppercase'>Shopping Cart</h3>
                <p className='lg:text-[20px] text-[16px] capitalize'>Home / cart</p>
            </div>
        </Container>
    </div>
  )
}

export default page