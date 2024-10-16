import React from 'react'
import { FaLinkedin, FaGithub, Fa42Group } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        // linkdin
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: 'https://www.linkedin.com/in/misbah-shakil-2a339b28a/',
          style: 'rounded-tr-md'
        },
        // github
        {
            id: 2,
            child: (
              <>
                github <FaGithub size={30} />
              </>
            ),
            href: 'https://github.com/misbahshakil233',
            style: 'rounded-tr-md'
          },
        //   mail
        {
            id: 1,
            child: (
              <>
                Email <HiOutlineMail size={30} />
              </>
            ),
            href: 'mailto:misbahshakil193@gmail.com',
            style: 'rounded-tr-md'
          },
          
      ];
      
      return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
          {/* linkdin */}
          <ul>
            {links.map(({ id, child, href, style }) => (
              <li
                key={id}
                className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}
              >
                <a href={href} target="_blank" className='flex justify-between items-center w-full text-white'>
             {child}
             </a>

              </li>
            ))}
          </ul>
          {/* github */}
        </div>
      );
    }     
export default SocialLinks