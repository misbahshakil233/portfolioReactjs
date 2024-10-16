import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import { FaT } from 'react-icons/fa6';
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav , setnav]=useState(false)
    const links = [
        {
          id: 1,
          link: 'Home'
        },
        {
          id: 2,
          link: 'About'
        },
        {
          id: 3,
          link: 'Portfolio'
        },
        {
          id: 4,
          link: 'Experience'
        },
        {
          id: 5,
          link: 'Skills'
        },
        
        {
          id: 6,
          link: 'Contact'
        }
        
      ];
      
      return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-blue-500 to-blue-500 fixed'>
          <div>
            <h1 className='text-3xl font-signature ml-2'>Misbah</h1>
          </div>
          <ul className='hidden md:flex'> 
  {links.map(({ id, link }) => (
    <li key={id} className='px-4 cursor-pointer font-medium text-gray-800 hover:text-white hover:text-2xl hover:scale-110 duration-300'>
      <Link to={link.toLowerCase()} smooth duration={600}>{link}</Link>
    </li>
  ))}
</ul>

          <div onClick={() => setnav(!nav)} 
          className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
  <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 
 '>
    {links.map(({id, link}) => (
      <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
        <Link to={link.toLowerCase()} smooth duration={600}>{link}</Link>
      </li>
    ))}
  </ul>
   )}
        
        </div>
        
      );
      
}

export default NavBar