import React from 'react'

function Container({children,classname=''}) {
  return (
    <div className={`mx-auto lg:max-w-[95%] px-4 ${classname}`}>{children}</div>
  )
}

export default Container