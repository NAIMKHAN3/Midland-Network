import React from 'react';
import help from '../images/help.png'
import training from '../images/training.jpg'
import support from '../images/support.png'
import messeging from '../images/messeging.jpg'
import guidence from '../images/guidence.png'

const Help = () => {
    return (
        <div className='max-w-[80%] my-10 mx-auto '>
            <h1 className='text-4xl'>Help is here. <span className='text-gray-600'>Always ready for you.</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl-auto my-10'>
                <div className=' bg-white rounded-xl row-span-2'>
                    <div className='p-7'>
                        <p className='text-pink-400 font-semibold'>ADVICE</p>
                        <h1 className='text-gray-500 my-3 font-semibold'>Specialist advice</h1>
                    </div>
                    <img className='md:w-72 md:h-72 mx-auto my-auto rounded-b-xl' src={help} alt="telephone" />
                </div>
                <div className=' bg-white rounded-xl'>
                    <div className='p-7'>
                        <p className='text-cyan-400 font-semibold'>TRAINING</p>
                        <h1 className='text-gray-500 my-3 font-semibold'>100 + training videos to support you</h1>
                    </div>
                    <img className='md:w-full rounded-b-xl' src={training} alt="telephone" />
                </div>
                <div className=' bg-white rounded-xl flex justify-between p-7'>
                    <div className=' my-auto w-1/2'>
                        <p className='font-semibold'>SUPPORT</p>
                        <h1 className='text-lg text-gray-600 font-semibold'>Log a ticket in <br /> our customer <br /> support portal</h1>
                    </div>
                    <img className='w-36 rounded-b-xl' src={support} alt="telephone" />
                </div>
                <div className=' bg-white rounded-xl flex justify-between'>
                    <div className=' my-auto w-1/2  p-7'>
                        <p className='text-cyan-400 font-semibold'>MESSAGING</p>
                        <h1 className='text-lg text-gray-600 font-semibold'>Quick <br /> and efficent <br /> communication</h1>
                    </div>
                    <img className='w-36 rounded-b-xl' src={messeging} alt="telephone" />
                </div>
                <div className=' bg-white rounded-xl flex justify-between p-7'>
                    <div className=' my-auto w-1/2'>
                        <p className='text-gray-400 font-semibold'>GUIDANCE</p>
                        <h1 className='text-lg text-gray-600 font-semibold'>User guides & <br /> sofware</h1>
                    </div>
                    <img className='w-36 rounded-b-xl' src={guidence} alt="telephone" />
                </div>
            </div>
        </div>
    );
};

export default Help;