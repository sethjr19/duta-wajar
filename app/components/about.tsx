import React from 'react';
import ImageSwiper from '../components/swiper';
import { poppins_init } from '../layout';

const About: React.FC = (props:any) => {
  return (
    <section className='w-full  '>
    <div className="flex w-[100%] flex-col sm:flex-col lg:flex-row md:flex-col lg:mt-[7rem]">
        <div className='relative flex justify-center items-center w-full md:w-[50%] z-20 text-center'>
            <img src="about-img.jpg" alt="About us" className="object-cover w-full h-[10rem]  md:m-0 lg:h-[30rem] lg:rounded-tr-[5rem] min-w-[30rem]" />
        </div>
        <div className='lg:pl-[5rem] mt-[3rem] max-w-[50rem]'>
            <div className='p-5'>
                <h2 className={`text-4xl border-b-[3px] border-yellow-300 pb-3 text-center lg:text-start max-w-[10rem] ${poppins_init.className}`}>About Us</h2>
                <p className='mt-[3rem] text-[20px]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>    
            </div>
        </div>

    </div>
      <div className='mt-[2rem] md:mt-[5rem] px-5 sm:px-[5%] h-[8rem] sm:h-[10rem]'> 
          <ImageSwiper/>
      </div>
    </section>
  );
};

export default About;