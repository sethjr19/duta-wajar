'use client'
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const NavBar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const {scrollY} = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 300], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0)']);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
      console.log(scrollPosition)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    }, [])

  return (
    <motion.div className='fixed z-50 top-0 w-full' style={{ backgroundColor }}
    transition={{ duration : 0.5}}>
    <nav className={` text-white border-b-[0.1px] border-opacity-55 border-black flex justify-between p-[2rem] h-[6rem]`}>
        <div className='flex justify-center items-center'>
          <img src="logov3.png" alt="Logo" height={5} width={50} />  
        </div>
        <div className='hidden md:block '>
          <ul className='flex gap-[3rem] text-black'> 
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      

      <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='h-[5rem] w-[5rem] bg-white'>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
    </nav>


    </motion.div>
  );
};

export default NavBar2;