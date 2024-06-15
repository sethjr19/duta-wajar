import React from 'react';
import ImageSwiper from '../components/swiper';
import { poppins } from '../fonts';
import Image from 'next/image';
import { FaInstagram, FaFacebook} from "react-icons/fa";

const Footer: React.FC = (props:any) => {
  return (
    <section className='w-full bg-yellow-500 mt-[8rem]'>
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
                    <p className='text-sm'>GFT is a team of IT and Construction experts, and with their diverse capabilities</p>
                </div>
                <div className='mt-3'>
                    <h2 className='font-bold text-md mb-4'>Contact us</h2>
                    <p className='text-sm mb-3'>No. 18-2, Jalan 4/62A, Bandar Menjalara, Kepong, Kuala Lumpur, 52200, Kuala Lumpur, WP Kuala Lumpur, 52200</p>
                    <p className='text-sm underline'>+60 12-255020302</p>
                    <p className='text-sm underline'>dwajar@yahoo.com</p>
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