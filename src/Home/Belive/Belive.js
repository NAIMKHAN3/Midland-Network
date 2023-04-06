import React from 'react';
import belive from '../images/belive.jpg'
import passion from '../images/passion.jpg'
import expertice from '../images/expertice.jpg'

const Belive = () => {
    return (
        <div className='max-w-[80%] mt-10 mx-auto p-5 md:p-10'>
            <h1 className='font-semibold text-3xl'>Our belives. <span className='text-gray-600'>The way we do business.</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-sm my-10'>
                <div className='my-auto p-10'>
                    <h1 className='text-center text-lg font-semibold text-indigo-400'>TRUST</h1>
                    <h3 className='text-center text-3xl font-semibold text-gray-600'>We belive trust is the foundation of any lasting relationship.</h3>
                </div>
                <div>
                    <img className='' src={belive} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-sm my-10 gap-4'>
                <div className='bg-white rounded-xl shadow-sm'>
                    <div className='my-5 p-10'>
                        <h1 className='text-center text-lg font-semibold text-red-400'>PASSION</h1>
                        <p className='text-center text-3xl font-semibold text-gray-600'>Think bigger.</p>
                    </div>
                    <img className='w-full' src={passion} alt="" />
                </div>
                <div className='bg-white rounded-xl shadow-sm'>
                    <div className='my-5 p-10'>
                        <h1 className=' text-lg font-semibold text-gray-400'>EXPERTISE</h1>
                        <p className='text-3xl font-semibold text-gray-600'>Over 20 years of experience.</p>
                    </div>
                    <img className='w-[300px] mx-auto' src={expertice} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Belive;