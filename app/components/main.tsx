import React from 'react';
import { poppins } from '../fonts';
import Link from 'next/link';

const Banner: React.FC = (props:any) => {
  return (
    <div>
    <div className="relative w-[100vw] h-[50rem] flex md:mt-0">
        <div className='relative w-full z-20 text-center flex flex-col mt-[6rem] lg:mt-0 px-[2rem] sm:px-[5rem] pb-[5rem] md:px-[10rem] justify-center items-center'>
            <h2 className={`text-white lg:text-[6rem] text-[3rem] sm:text-[5rem] pt-[5rem] font-bold ${poppins.className}`}>Construction at its Finest</h2>
            <p className='my-4 mx-[3rem] text-[1rem] lg:text-[1.5rem] text-gray-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            <Link href="/contact"><button className='text-white mt-5 bg-yellow-500 p-5 rounded-xl'>Get a quote</button></Link>
        </div>
        <div className='absolute top-0 left-0 w-full h-full z-10 bg-black opacity-50'></div>
        <div className='absolute top-0 left-0 w-full h-full'>
          <img src="/kl-bg-hero.jpg" alt="Hero Banner" className="object-cover w-full h-full" />  
        </div>
    </div>
    </div>
  );
};

export default Banner;