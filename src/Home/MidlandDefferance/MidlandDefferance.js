import React from 'react';
import { BiCheckShield } from 'react-icons/bi'
import { FiCheck } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import logo from '../images/logo.png'

const MidlandDefferance = () => {
    return (
        <div className='max-w-[80%] my-10 mx-auto'>
            <h1 className='font-semibold text-3xl'>The Midland Networks difference. <span className='text-gray-600'>Thats right!</span></h1>
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
                        slidesPerView: 3.5,
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
                        <span className='text-6xl text-indigo-500'><BiCheckShield /></span>
                        <h1 className='text-md my-1 font-semibold'>Quality assurance.</h1>
                        <p className='text-indigo-500 font-semibold'>Only the best for you</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-red-500'><FiCheck /></span>
                        <h1 className='text-md my-1 font-semibold'>Price match <span className='text-red-500 font-semibold'>Qualilty great deals promise</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-indigo-600'><AiOutlineHeart /></span>
                        <h1 className='text-md my-1 font-semibold'>Customer service. <span className='text-indigo-500 font-semibold'>More than just shopping.</span></h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <img className='w-[104px]' src={logo} alt="" />
                        <h1 className='text-md my-1 font-semibold'>Quality assurance.</h1>
                        <p className='text-indigo-500 font-semibold'>Only the best for you</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-indigo-500'><BiCheckShield /></span>
                        <h1 className='text-md my-1 font-semibold'>Quality assurance.</h1>
                        <p className='text-indigo-500 font-semibold'>Only the best for you</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-64 bg-white rounded-lg p-7 mt-10 shadow-lg'>
                        <span className='text-6xl text-red-500'><FiCheck /></span>
                        <h1 className='text-md my-1 font-semibold'>Price match <span className='text-red-500 font-semibold'>Qualilty great deals promise</span></h1>
                    </div>
                </SwiperSlide>
            </Swiper>





        </div>
    );
};

export default MidlandDefferance;