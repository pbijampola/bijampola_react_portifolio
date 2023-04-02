import React from 'react'

const Title=({title, desc})=> {
  return (
    <div className='flex flex-col gap-5 font-titleFont mb-14'>
    <h3 className='text-sm font-light tracking-wide text-designColor'>{title}</h3>
    <h1 className='text-4xl font-bold text-gray-300 capitalize'>{desc}</h1>
  </div>
  )
}

export default Title