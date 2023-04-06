import React from 'react';
import telephone from '../images/telephone.png'
import cable from '../images/cable.png'
import iphone from '../images/iphone.png'
import calling from '../images/calling.png'
import mobile from '../images/mobile.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";


const Services = () => {
    return (
        <div className='max-w-[80%] my-10 mx-auto'>
            <h1 className='font-semibold text-3xl'>Services. <span className='text-gray-600'>Here where the fun begins.</span></h1>

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
                        slidesPerView: 2.7,
                    },
                }}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwipe"
            >
                <SwiperSlide className='h-[420px]'>

                    <div className='w-[350px] bg-white rounded-xl  my-10'>
                        <div className='p-7'>
                            <p className='text-gray-600'>Phone System</p>
                            <h1 className='font-bold text-2xl'>Oh. So. Pro.</h1>
                            <p className='text-gray-600'>We install & support Business telephone system using VoIP system techology</p>
                        </div>

                        <div className='flex items-end'>
                            <img className='h-56 w-full rounded-b-xl' src={telephone} alt="telephone" />
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide className='h-[420px]'>
                    <div className='w-[350px] bg-white rounded-xl  my-10'>

                        <div className='p-7'>
                            <p className='text-gray-600'>Lines & Calls</p>
                            <h1 className='font-bold text-2xl'>Network Cabling, WIFI, and fibre optics</h1>

                        </div>

                        <div className='flex items-end'>
                            <img className='h-60 w-full rounded-b-xl' src={cable} alt="telephone" />
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[420px]'>
                    <div className=' w-[350px] bg-white rounded-xl  my-10'>

                        <div className='p-7'>
                            <p className='text-gray-600'>Lines & Calls</p>
                            <h1 className='font-bold text-2xl'>Network Cabling, WIFI, and fibre optics</h1>

                        </div>
                        <div className='flex items-end'>
                            <img className='h-60 w-full rounded-b-xl' src={iphone} alt="telephone" />
                        </div>


                    </div>
                </SwiperSlide>

                <SwiperSlide className='h-[420px]'>
                    <div className='w-[350px] bg-white rounded-xl  my-10'>
                        <div className='p-7'>
                            <p className='text-gray-600'>Cabling & Wifi</p>
                            <h1 className='font-bold text-2xl'>Business Telephone Lines & Analogue $ ISDN</h1>

                        </div>
                        <div className='flex items-end'>
                            <img className='h-60 w-full rounded-b-xl' src={calling} alt="telephone" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[420px]'>
                    <div className='w-[350px] bg-white rounded-xl  my-10'>
                        <div className='p-7'>
                            <p className='text-gray-600'>Mobile & 4G</p>
                            <h1 className='font-bold text-2xl'>Business Internet Connectivity</h1>

                        </div>
                        <div className='flex items-end mx-auto'>
                            <img className='h-60 w-full rounded-b-xl' src={mobile} alt="telephone" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Services;