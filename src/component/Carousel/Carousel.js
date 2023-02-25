import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";




import { FreeMode, Pagination } from "swiper";
import CarouselItem from './CarouselItem';
import { useDispatch } from 'react-redux';
import { fetchSliderData } from '../../store/action/sliderAction';

const Carousel = ({id,title}) => {
      const dispatch=useDispatch()
      const [filteredBook,setFilteredBook]=useState([])



      useEffect(()=>{
        
          dispatch(fetchSliderData(id,setFilteredBook))
          
         
        

      },[id,dispatch])
      
     








    
    return (
    <div className='max-w-6xl mx-auto p-5'>
            <div className='w-full '>
                <div className='flex justify-between items-center w-full pb-5'>
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
           



           {filteredBook.length>0 &&
           
           filteredBook.map((item)=>{
                return  <SwiperSlide key={item.id}>
                              <CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/>
                        </SwiperSlide>

               })}




          
            </Swiper>

            </div>
    </div>
    );
};

export default Carousel;