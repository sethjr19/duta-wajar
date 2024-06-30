"use client"

import React, {useState} from 'react';
import {projects2} from '../data'
import Card from '../components/card'
import { poppins } from '../fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import NavBar2 from '../components/navbar2';

const Projects: React.FC = (props:any) => {
  
  const [filter, setFilter] = useState('all');

  const getFilteredProjects = () => {
    if (filter === 'completed') {
      return projects2.filter(project => project.date !== 'Ongoing');
    }
    else if (filter === 'Ongoing') {
      return projects2.filter(project => project.date === 'Ongoing');
    }
    else {
      return projects2; 
    }
  }

  const filteredProjects = getFilteredProjects();

  return (
    <section className='w-full flex'>
      <NavBar2/>
        <div className='hidden md:flex w-full flex-col mt-[7rem] px-[2rem] md:px-[5rem] items-center '>
          <div className='flex items-center justify-center sm:items-center md:items-start w-full'>
            <h2 className={`text-4xl border-b-[3px] border-yellow-300 pb-3 ${poppins.className}`}>Our Projects</h2>
          </div>
          <div className='mt-[2rem] w-[20rem] flex justify-evenly'>
            <button onClick={() => setFilter('all')}><h2 className={filter === 'all' ? 'font-semibold' : ''}>All</h2></button>
            <button onClick={() => setFilter('completed')}><h2 className={filter === 'completed' ? 'font-semibold' : ''}>Completed</h2></button>
            <button onClick={() => setFilter('Ongoing')}><h2 className={filter === 'Ongoing' ? 'font-semibold' : ''}>Ongoing</h2></button>
          </div>
                
            <div className="flex flex-wrap justify-center gap-8 mt-[5rem] ">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  date={project.date}
                />
              ))}
        </div>

        </div>
          {/* mobile swiper  */}
        <div className='md:hidden flex w-full flex-col mt-[7rem] lg:mt-[5rem] px-[2rem] md:px-[5rem] items-center '>
          <div className='flex items-center justify-center sm:items-center md:items-start w-full'>
            <h2 className={`text-4xl border-b-[3px] border-yellow-300 pb-3 ${poppins.className}`}>Our Projects</h2>
          </div>
            
          <div className="w-full mt-[5rem]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {projects2.map((project, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-full flex justify-center items-center'>
                  <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  date={project.date}
                />
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
    </section>
  );
};

export default Projects;