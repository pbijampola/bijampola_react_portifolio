import React from 'react'

const Card =({title,icon,desc})=> {
  return (
    <div className='w-full h-80 py-10 px-12 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] translation-colors duration-100'>{title}</div>
  )
}

export default Card