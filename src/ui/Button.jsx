import React from 'react'

function Button({className,btnName}) {
  return (
   <div>
    <button className={`${className} capitalize py-4 px-3 cursor-pointer`}>{btnName}</button>
   </div>
  )
}

export default Button