import React from 'react'

function Container({children,classname=''}) {
  return (
    <div className={`mx-auto  max-w-[1320px] px-4 ${classname}`}>{children}</div>
  )
}

export default Container