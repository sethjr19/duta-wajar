'use client'
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const {scrollY} = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 300], ['rgba(0,0,0,0)', 'rgba(0, 0, 0)']);

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
    <nav className={` text-white border-b-[0.1px] border-opacity-55 border-white flex justify-between h-[6rem] relative `}>
      <div className={`flex justify-center items-center p-[2rem]`}>
          <img src="logov3.png" alt="Logo" height={5} width={50} />  
        </div>
        <div className='hidden md:flex h-full justify-center items-center p-[2rem]'>
          <ul className='flex gap-[3rem]'> 
          <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/certs">Certificates</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>
      
      
      <div className="-mr-2 flex md:hidden w-full flex-col ">
            <button
              onClick={toggleMenu}
              type="button"
              className={`h-full ml-auto  inline-flex ${isOpen ? 'bg-black w-full p-[3rem]' : 'bg-transparent w-[5rem]'} items-center justify-center p-2 text-white`}
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden  w-full `}>
          <div className='h-[100vh] bg-black text-white flex flex-col items-center gap-8 pt-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/certs">Certificates</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

        
    </nav>


    </motion.div>
  );
};

export default NavBar;