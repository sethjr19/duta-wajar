import React from 'react';
import ImageSwiper from '../components/swiper';
import { poppins } from '../fonts';
import Image from 'next/image';
import { FaInstagram, FaFacebook} from "react-icons/fa";

const Footer: React.FC = (props:any) => {
  return (
    <section className='w-full bg-black mt-[3rem] md:mt-[8rem]'>
        <div className='w-full border-y-black border-1'>
            {/* inner div */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mx-[5rem] lg:mx-[15rem] my-[2rem] lg:my-[5rem] text-white'>
                <div>
                    <h2 className={`text-[2rem] font-bold ${poppins.className} mb-4`}>Duta Wajar</h2>
                    <Image
                        src='/logov3.png'
                        alt="Construction & Interior Design Services"
                        className='font-white'
                        width={65} 
                        height={65} 
                        />
                </div>
                <div className='mt-3'>
                    <h2 className='font-bold text-md mb-4'>About us</h2>
                    <p className='text-sm'>We Are a G7 Construction Company Registered With CIDB, SPKK, PKK, Sijil Penyiap KKR Malaysia and Sijil Akuan Pendaftaran Syarikat Bumiputera Kementerian Kewangan Malaysia.
                    </p>
                </div>
                <div className='mt-3'>
                    <h2 className='font-bold text-md mb-4'>Contact us</h2>
                    <p className='text-sm mb-3'>B-3-17, Block B, Ativo Plaza, Bandar Sri Damansara, 52200 Kuala Lumpur.</p>
                    <p className='text-sm underline'>Tel : 03-6270 9323</p>
                    <p className='text-sm underline'>Email : dwajar2@yahoo.com</p>
                </div>
                <div className='mt-3'>
                    <h2 className='font-bold text-md mb-4'>Follow us</h2>
                    <span className='flex items-center'>
                        <FaInstagram className='mb-3'/>
                        <p className='ml-3 mb-3'>dutawajar</p>
                    </span>

                    <span className='flex items-center'>
                        <FaFacebook className='mb-3'/>
                        <p className='ml-3 mb-3'>Duta Wajar</p>
                    </span>                
                </div>
            </div>
        </div>
    </section>
  );
};

export default Footer;