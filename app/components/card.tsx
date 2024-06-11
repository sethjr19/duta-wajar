import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link, date }) => {
  return (
    <div className="bg-white shadow-md rounded-sm overflow-hidden relative min-h-[30rem] w-[20rem] text-white ">
      <img className="w-full h-full object-cover absolute top-0 left-0 z-9 hover:scale-125 ease-in-out duration-300" src={image} alt={title} />
      <div className="p-4 z-10 relative mt-[100%] " >
      <div className='flex items-center'><h3 className="text-lg font-bold">{title} </h3><p className='text-sm pl-2'>| {date}</p></div>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;