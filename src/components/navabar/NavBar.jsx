import React from 'react'
import { navLinksData } from '../../constants'

function NavBar() {
  return (
    <div className='w-full h-20 mx-auto flex justify-between items-center font-titleFont'>
        <div>
            <img src="" alt="Logo"/>
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {navLinksData.map((link, index) => (
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={index}> {link.title} </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default NavBar