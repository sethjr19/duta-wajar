import React from 'react';
import ImageSwiper from '../components/swiper';
import { poppins } from '../fonts';

const About: React.FC = (props:any) => {
  return (
    <section className='w-full  '>
    <div className="flex w-[100%] flex-col sm:flex-col lg:flex-row md:flex-col lg:mt-[7rem]">
        <div className='relative flex justify-center items-center w-full md:w-[50%] z-20 text-center'>
            <img src="about-img.jpg" alt="About us" className="object-cover w-full h-[10rem]  md:m-0 lg:h-[30rem] lg:rounded-tr-[5rem] min-w-[30rem]" />
        </div>
        <div className='lg:pl-[5rem] mt-[3rem] max-w-[50rem]'>
            <div className='p-5'>
                <h2 className={`text-4xl border-b-[3px] border-yellow-300 pb-3 text-center lg:text-start max-w-[10rem] ${poppins.className}`}>About Us</h2>
                <p className='mt-[3rem] text-[15px] font-semibold'>Duta Wajar Sdn Bhd is Established on 22nd March, 1999 and is Based in Kuala Lumpur, Malaysia.<br/>
                </p>    
                <p className='mt-[1rem] text-[15px] font-semibold'>We Are a G7 Construction Company Registered With CIDB, SPKK, PKK, Sijil Penyiap KKR Malaysia and Sijil Akuan Pendaftaran Syarikat Bumiputera Kementerian Kewangan Malaysia. </p>
                <p className='mt-[1rem] text-[15px] font-semibold'>
                We Had Sucessfully Completed a Range of Projects From JKR Malaysia, JKR Selangor, JPS Wilayah Persekutuan, the Mrt2, Lrt3, Petronas Project at Pengerang Under Wabag Muhibbah JV Sdn. Bhd. and Petrofac E&c Sdn. Bhd.
                </p>
                <p className='mt-[1rem] text-[15px] font-semibold'>
                We Are Also Capable of Undertaking Infrastructure and Civil Works. 
                </p>
                <p className='mt-[1rem] text-[15px] font-semibold'>
                  If You Require a Competent and Professional Builder for Your Project, Feel Free to Contact Us for a Quote.
                </p>
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