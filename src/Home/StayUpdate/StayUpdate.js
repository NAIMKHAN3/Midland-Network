import React from 'react';
import pay from '../images/pay.png'
import telephonesystem from '../images/telephonesystem.png'
import man from '../images/man.png'

const StayUpdate = () => {
    return (
        <div className='max-w-[80%] my-10 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 my-5'>
                <div className='bg-pink-500 text-white flex p-10 rounded-l-xl'>


                    <div className='my-auto'>
                        <h1 className='text-4xl font-semibold'>Paying too <br /> much for <br /> your mobile?</h1>
                        <p className='mt-20 text-sm'>Mobile Phone | 3min read</p>
                    </div>



                </div>
                <div className='rounded-r-xl'>
                    <img className='rounded-r-xl' src={pay} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                <div className='shadow-lg'>
                    <img className='rounded-t-xl' src={telephonesystem} alt="" />
                    <div className='bg-sky-400 p-5 rounded-b-xl'>
                        <h1 className='text-3xl font-semibold'>Why Choose a <br /> Hosted Telephone <br /> System</h1>
                        <p className='mt-20 text-sm'>Telephone system | 2min read</p>
                    </div>
                </div>
                <div className='shadow-lg bg-gray-700 rounded-xl flex justify-center items-center'>
                    <div className=''>
                        <h1 className='text-2xl font-semibold text-white mt-5'>Midland HVS</h1>
                        <div className='md:mt-20 p-5'>
                            <button className='p-3  border border-white text-white'>TRANING VIDEOS</button>
                        </div>
                    </div>

                </div>
                <div className='shadow-lg'>
                    <img className='rounded-t-xl' src={man} alt="" />
                    <div className='bg-pink-500 p-5 rounded-b-xl text-white'>
                        <h1 className='text-3xl font-semibold'>10 Thinks Every<br />  Cabling Installer <br /> Should Know</h1>
                        <p className='mt-20 text-sm'>Data Cabling | 2min read</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayUpdate;