import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";




import { FreeMode, Pagination } from "swiper";

const Carousel = ({children,title}) => {
    
    return (
    <div className='max-w-6xl mx-auto p-5'>
            <div className='w-full '>
                <div className='flex justify-between items-center w-full '>
                    <Link><h4>{title}</h4></Link>
                    <Link>بیشتر</Link>    
                </div>

            <Swiper  slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,      
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                modules={[FreeMode, Pagination]}
                >
           {children}
            </Swiper>

            </div>
    </div>
    );
};

export default Carousel;