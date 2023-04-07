import React from 'react';
import { BsCloudArrowUp, BsTrophy } from 'react-icons/bs'
import { RiUserHeartLine } from 'react-icons/ri'
import { AiOutlineBarChart } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import logo from '../images/logo.png'


const Award = () => {
    return (
        <div className='max-w-[80%] mt-10 mx-auto' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='font-semibold text-3xl'>Award winnning service. <span className='text-gray-600'>National recognition.</span></h1>
            <Swiper
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3.3,
                    },
                }}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwipe cursor-pointer"
            >
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-indigo-500'><BsCloudArrowUp /></span>
                        <h1 className='text-md my-1 font-semibold'>2018</h1>
                        <p className='text-indigo-500 font-semibold'>Cloud Solutions</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-red-500'><BsTrophy /></span>
                        <h1 className='text-md my-1 font-semibold'>2018</h1>
                        <p className='text-red-500 font-semibold'>SME Solutions</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-indigo-500'><RiUserHeartLine /></span>
                        <h1 className='text-md my-1 font-semibold'>2018 Best</h1>
                        <p className='text-indigo-500 font-semibold'>Customer Award</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-yellow-700'><AiOutlineBarChart /></span>
                        <h1 className='text-md my-1 font-semibold'>2017 Best</h1>
                        <p className='text-indigo-500 font-semibold'>SME UC Solutions</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-indigo-500'><RiUserHeartLine /></span>
                        <h1 className='text-md my-1 font-semibold'>2018 Best</h1>
                        <p className='text-indigo-500 font-semibold'>Customer Award</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-indigo-500'><RiUserHeartLine /></span>
                        <h1 className='text-md my-1 font-semibold'>2018 Best</h1>
                        <p className='text-indigo-500 font-semibold'>Customer Award</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Award;