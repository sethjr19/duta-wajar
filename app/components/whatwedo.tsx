import React from 'react';
import { poppins } from '../fonts';
import Image from 'next/image';

const Whatwedo: React.FC = (props:any) => {
  return (
    <section className='w-full'>

        <div className='bg-white flex w-full flex-col my-[3rem] lg:my-[8rem] px-[2rem] md:px-[5rem]  items-center '>
            <h2 className={`text-4xl border-b-[5px] border-yellow-300 pb-3 text-center ${poppins.className}`}>What We Do</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-center mt-[5rem] ">         
                <div className="bg-black overflow-hidden w-[25rem] h-[20rem] flex flex-col">
                    <div className='p-[1rem]'>
                    <Image
                        src='/grid-1-white.png'
                        alt="Construction & Interior Design Services"
                        className='font-white'
                        width={65} 
                        height={65} 
                        />
                    </div>
                    <div className="p-4 text-white" >
                        <h3 className={`text-[1rem] font-semibold  ${poppins.className}`}>Comprehensive Construction & Interior Design Services</h3>
                        <p className='text-sm font-light'>Transform your vision into reality with our integrated construction and interior design solutions. From concept to completion, our expert team ensures every detail exceeds expectations.</p>
                    </div>
                </div>
                
                <div className="bg-yellow-500 rounded-sm overflow-hidden w-[25rem] h-[20rem] flex flex-col">
                    <div className='p-[1rem]'>
                    <Image
                        src='/grid-2.png'
                        alt="Personalised Project Management"
                        className='font-white'
                        width={85} 
                        height={85} 
                        />
                    </div>
                    <div className="p-4 text-black" >
                        <h3 className={`text-[1rem] font-semibold  ${poppins.className}`}>Personalised Project Management</h3>
                        <p className='text-sm'>Experience tailored project management that aligns with your unique needs. Our proactive approach, clear communication, and attention to detail guarantee a seamless journey from start to finish.</p>
                    </div>
                </div>
                <div className="bg-black rounded-sm overflow-hidden w-[25rem] h-[20rem] flex flex-col">
                    <div className='p-[1rem]'>
                    <Image
                        src='/grid-3-white.png'
                        alt="High-Quality Craftsmanship"
                        className='font-white'
                        width={100} 
                        height={100} 
                        />
                    </div>
                    <div className="p-4 text-white" >
                        <h3 className={`text-[1rem] font-semibold ${poppins.className}`}>High-Quality Craftsmanship</h3>
                        <p className='text-sm'>Trust in our commitment to superior craftsmanship. Our skilled artisans deliver impeccable quality in every aspect of construction, ensuring your project stands the test of time.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Whatwedo;