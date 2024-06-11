"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const companies = [
    { name: 'company-1', logo: 'company-1.png' },
    { name: 'company-2', logo: 'company-2.png' },
    { name: 'company-3', logo: 'company-3.png' },
    { name: 'company-4', logo: 'company-4.png' },
    { name: 'company-5', logo: 'company-5.png' },
    { name: 'company-5', logo: 'company-6.png' },
  ];
  
const ImageSwiper: React.FC = () => {
    return (
        <div className="max-w-[100vw] w-[screen] overflow-hidden ">

             <Swiper
            className='md:w-[80rem]'
            spaceBetween={0}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                0: {slidesPerView: 2},
                480: {slidesPerView: 2,
                       spaceBetween: 0},
                768: {slidesPerView: 3,
                       spaceBetween: 0},
                1024:{slidesPerView: 4,
                       spaceBetween: 0}
                }}
            
            >
        {companies.map((company, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
                <div className='flex justify-center items-center w-[100%] h-[6rem] '>
                    <img src={company.logo} alt={company.name} className='object-contain w-[100%] h-[100%]' />
                </div>
                
            </SwiperSlide>

        ))}
    </Swiper>

        </div>
    )
}


export default ImageSwiper;