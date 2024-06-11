import React from 'react';
import { poppins_init } from '../layout';

const Whatwedo: React.FC = (props:any) => {
  return (
    <section className='w-full'>

        <div className='flex w-full flex-col my-[3rem] lg:mt-[8rem] md:px-[5rem] sm:px-[2rem] items-center '>
            <h2 className={`text-4xl border-b-[5px] border-yellow-300 pb-3 text-center ${poppins_init.className}`}>What We Do</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-[5rem] ">
                
            <div className="bg-white rounded-sm overflow-hidden  w-[25rem] flex flex-col">
                <div>
                   <img className="w-full h-full object-cover rounded-xl" src='about-img.jpg' alt='What we do' /> 
                </div>
                <div className="p-4 text-black text-center" >
                    <h3 className={`text-[1rem] font-semibold  ${poppins_init.className}`}>Comprehensive Construction and Interior Design Services</h3>
                </div>
            </div>
            <div className="bg-white rounded-sm overflow-hidden w-[25rem] flex flex-col ">
                <div>
                   <img className="w-full h-full object-cover rounded-xl" src='about-img.jpg' alt='What we do' /> 
                </div>
                <div className="p-4 text-black text-center" >
                    <h3 className={`text-[1rem] font-semibold  ${poppins_init.className}`}>Personalised Project Management</h3>
                </div>
            </div>
            <div className="bg-white rounded-sm overflow-hidden w-[25rem]  flex flex-col ">
                <div>
                   <img className="w-full h-full object-cover rounded-xl" src='about-img.jpg' alt='What we do' /> 
                </div>
                <div className="p-4 text-black text-center" >
                    <h3 className={`text-[1rem] font-semibold ${poppins_init.className}`}>High-Quality Craftsmanship</h3>
                </div>
            </div>
         
            </div>
        </div>
    </section>
  );
};

export default Whatwedo;