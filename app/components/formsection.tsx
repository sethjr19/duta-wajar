'use client'
import React, {useState} from 'react';

const FormSection: React.FC = (props:any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setStatus('SUCCESS');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('FAILED');
        }
    };

  return (
    <section className='w-full'>
        <div className='relative px-20 h-full'>
            <img  className='absolute top-0 left-0 h-[100vh] w-[100vw]' src="formsection.jpeg" alt="" />
        <div className='relative px-20 py-10'>
           <div className='w-[100%] grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr]'>
           
            <div>
                <h2 className='text-[5rem] font-bold text-white '>Lets Work Together</h2>
                <p className='text-[1.5rem] mt-5 text-white'>Let's collaborate and innovate, turning fresh ideas into tangible outcomes. Together, we'll make things happen.</p>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center opacity-95 bg-white rounded-xl shadow-xl p-[2rem] lg:p-[4rem] min-w-[20rem]'>
                    <h2 className='text-[2rem] lg:text-[3rem] font-semibold border-yellow-500 border-b-[3px] mb-[2rem]'>Send us an enquiry</h2>
                    <form className="max-w-xl w-full h-[30rem] p-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="w-full p-2 border border-gray-300 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700">Enquiry</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded"
                            name='message'
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        </div>
                        <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                        Submit
                        </button>
                    </form>
                </div>
            </div>
        </div> 
        </div>
        </div>
        
        
    </section>
  );
};

export default FormSection;