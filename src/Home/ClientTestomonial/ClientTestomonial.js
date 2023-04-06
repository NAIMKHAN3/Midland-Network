import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import testimonials from '../images/testimonials.png'
import { AiFillCaretRight } from 'react-icons/ai'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";


const ClientTestomonial = () => {
    return (
        <div className='bg-indigo-900 p-5'>
            <div className='max-w-[80%] my-10 mx-auto'>
                <h1 className='text-4xl font-semibold text-white text-center mb-3'>Clients testimonials</h1>
                <h1 className='font-semibold text-gray-300 text-center mb-10'>Don’t just take our word for it.</h1>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-between flex-col-reverse md:flex-row bg-white rounded-xl p-5'>
                            <div className='p-5'>
                                <h1 className='font-semibold text-3xl mt-5'>WEST MIDLANDS </h1>
                                <h6 className='font-semibold text-3xl my-5'>FIRE SERVICE</h6>
                                <span className='text-cyan-600 font-semibold flex items-center ml-3 cursor-pointer'>Watch Video <span><AiFillCaretRight /></span> </span>
                                <div className='flex items-center mt-20'>
                                    <img className='w-24 mr-10' src={testimonials} alt="" />
                                    <div className=''>
                                        <h1 className='font-semibold'>Adrian Scoyne</h1>
                                        <p className='text-sm text-gray-500'>INFRASTRUCTURE ENGINEER</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='w-[500px]' src={testimonials} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-between flex-col-reverse md:flex-row bg-white rounded-xl p-5 '>
                            <div className='p-5'>
                                <h1 className='font-semibold text-3xl mt-5'>WEST MIDLANDS </h1>
                                <h6 className='font-semibold text-3xl my-5'>FIRE SERVICE</h6>
                                <span className='text-cyan-600 font-semibold flex items-center ml-3 cursor-pointer'>Watch Video <span><AiFillCaretRight /></span> </span>
                                <div className='flex items-center mt-20'>
                                    <img className='w-24 mr-10' src={testimonials} alt="" />
                                    <div className=''>
                                        <h1 className='font-semibold'>Adrian Scoyne</h1>
                                        <p className='text-sm text-gray-500'>INFRASTRUCTURE ENGINEER</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='w-[500px]' src={testimonials} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-between flex-col-reverse md:flex-row bg-white rounded-xl p-5'>
                            <div className='p-5'>
                                <h1 className='font-semibold text-3xl mt-5'>WEST MIDLANDS </h1>
                                <h6 className='font-semibold text-3xl my-5'>FIRE SERVICE</h6>
                                <span className='text-cyan-600 font-semibold flex items-center ml-3 cursor-pointer'>Watch Video <span><AiFillCaretRight /></span> </span>
                                <div className='flex items-center mt-20'>
                                    <img className='w-24 mr-10' src={testimonials} alt="" />
                                    <div className=''>
                                        <h1 className='font-semibold'>Adrian Scoyne</h1>
                                        <p className='text-sm text-gray-500'>INFRASTRUCTURE ENGINEER</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='w-[500px]' src={testimonials} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-between flex-col-reverse md:flex-row bg-white rounded-xl p-5'>
                            <div className='p-5'>
                                <h1 className='font-semibold text-3xl mt-5'>Whitley Tandoori Ltd </h1>
                                <span className='text-cyan-600 font-semibold flex items-center ml-3 cursor-pointer'>Watch Video <span><AiFillCaretRight /></span> </span>
                                <div className='flex items-center mt-20'>
                                    <img className='w-24 mr-10' src={testimonials} alt="" />
                                    <div className=''>
                                        <h1 className='font-semibold'>Adrian Scoyne</h1>
                                        <p className='text-sm text-gray-500'>INFRASTRUCTURE ENGINEER</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='w-[500px]' src={testimonials} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default ClientTestomonial;