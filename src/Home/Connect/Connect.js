import React from 'react';
import './connect.css';

const Connect = () => {
    return (
        <div className='flex justify-center flex-col items-center my-10'>
            <h1 className='text-4xl font-semibold'>Let's Connect</h1>
            <div className='flex justify-center'>
                <button className='tracking-widest font-semibold border border-indigo-400  px-5 py-2 md:px-10 md:py-3 ml-3 text-indigo-400 transition duration-300 hover:shadow-indigo-900 hover:bg-indigo-500 hover:rounded-md hover:text-white hover:shadow-2xl my-5'>GET IN TOCH</button>
            </div>
        </div>
    );
};

export default Connect;