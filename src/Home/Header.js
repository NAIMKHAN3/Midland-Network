import React from 'react';
import Typical from 'react-typical';
import header from './images/header.jpg'

const Header = () => {
    return (
        <div className=' bg-cover bg-center lg:h-[650px] w-full mx-auto my-10 sm:bg-none' style={{ backgroundImage: `url(${header})` }}>
            <div className='flex h-full justify-start items-center w-[72%] mx-auto'>
                <div className='lg:w-[550px]'>
                    <h1 className='my-auto text-4xl font-semibold'>Midland Network </h1>
                    <h1 className='my-3 text-4xl font-semibold'>We are
                        <Typical className='text-3xl text-cyan-400 mb-5 inline'
                            steps={[' Telecom Providers', 1000, ' Engineers', 1000, ' Data Cabler', 1000, ' IT Experts', 1000, ' Experienced', 1000, ' Passionate', 1000,]}
                            loop={Infinity}
                            wrapper="p"
                        /></h1>
                    <p className='my-auto text-lg'>Midland Networks started life as a telecom company and it's still the major part of our business. We have expanded our services over the years at customer request to offer related services, providing our customers with one port of call.</p>
                    <div className='flex  my-10'>
                        <button className='font-semibold hover:bg-white hover:border-none border border-black rounded-lg px-3 py-1 md:px-10 md:py-3 mr-3 transition duration-300'>ABOUT US</button>
                        <button className='font-semibold bg-cyan-400 hover:border hover:text-cyan-400 hover:bg-white border-cyan-400 rounded-lg px-3 py-1 md:px-10 md:py-3 ml-3 text-white transition duration-300'>GET IN TOCH</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;