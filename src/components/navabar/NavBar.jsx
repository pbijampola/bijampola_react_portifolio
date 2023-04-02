import React from 'react'
import { navLinksData } from '../../constants'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div className='w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont'>
        <div>
            {/* <img src="" alt="Logo"/> */}
            <p><span className="text-designColor italic">
              PATRICK BIJAMPOLA
            </span></p>
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {navLinksData.map((link, index) => (
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={index}>
                         <Link activeClass='active' 
                         to={link.path}
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                         >
                         {link.title} 
                         </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default NavBar