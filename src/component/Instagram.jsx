import Container from '@/ui/Container'
import React from 'react'

function Instagram() {
  return (
    <div>
        <Container>
        <div className="py-10 md:py-16">
          <h2 className="text-center text-base md:text-xl font-light mb-1">
            <span className="text-[#F79483] font-semibold">@ FOLLOW</span> US ON INSTAGRAM
          </h2>
          <div className="text-center text-gray-400 mb-8 text-sm md:text-base">shop our instagram</div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* Empty image slots for now */}
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
            <div className="w-28 h-40 md:w-40 md:h-60 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Instagram