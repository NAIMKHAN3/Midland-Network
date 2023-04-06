import React from 'react';
import supporting from '../images/supporting.png'
import zyx from '../images/zyx.png'
import bt from '../images/bt.png'
import google from '../images/google.png'
import microsoft from '../images/microsoft.png'
import cisco from '../images/cisco.png'
import nec from '../images/nec.png'


const Supporting = () => {
    return (
        <div className='bg-white mt-10 p-5 md:p-14'>

            <div className='bg-neutral-100 flex flex-col-reverse max-w-6xl md:grid grid-cols-1 md:grid-cols-2 p-5 md:px-20 md:py-14 rounded-lg mx-auto'>
                <div className='my-auto'>

                    <h1 className='text-4xl font-semibold my-5'>Supporting any <br /> business size</h1>
                    <p className='font-semibold text-gray-600'>
                        Our clients range from small start-up businesses who just need a phone line and broadband, right through to national retailers who require multi-site business telephone systems, lease line internet connectivity or cloud-based data networks. So we are confident we will be able to help your business. Contact Us
                    </p>
                    <button className='font-semibold bg-indigo-400 rounded-lg px-3 py-1 md:px-10 md:py-3 my-5 text-white transition duration-300'>Contact Us</button>


                </div>
                <div>
                    <img className='w-full h-full my-auto' src={supporting} alt="" />
                </div>
            </div>
            <div>
                <hr className='border-t-2 border-black my-20 max-w-6xl mx-auto' />
                <div className='max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4'>
                    <h1 className='font-semibold text-lg'>MIDLAND NETWORKS PARTNERSHIPS</h1>
                    <img className='w-12 md:w-24' src={zyx} alt="" />
                    <img className='w-12 md:w-24' src={nec} alt="" />
                    <img className='w-12 md:w-24' src={bt} alt="" />
                    <img className='w-12 md:w-24' src={cisco} alt="" />
                    <img className='w-12 md:w-24' src={google} alt="" />
                    <img className='w-12 md:w-24' src={microsoft} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Supporting;