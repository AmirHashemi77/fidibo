import React from 'react';
import CarouselItem from '../Carousel/CarouselItem';
import Carousel from '../Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';


const SimilarBook = ({publisher}) => {
    return (
        
        <div className='w-full text-center text-sm bg-gray-200 text-gray-600 p-3 my-16'>
            <div className='max-w-5xl mx-auto p-5'>
              <Carousel title={`نشر ${publisher}`}>
                <SwiperSlide><CarouselItem id='1' title='خود شناسی مجموعه مدرسه زندگی' imgUrl='/images/bookImages/khodshenasi.jpeg' auther='آلن دوباتن'/></SwiperSlide>
                <SwiperSlide><CarouselItem id='1' title='کتاب صوتی قانون ۵ ثانیه زندگی تان ، کارتان و ...' imgUrl='/images/bookImages/panj-sanea.jpeg' auther='مل رابینز'/></SwiperSlide>
                <SwiperSlide><CarouselItem id='1' title='کتاب صوتی کار عمیق قوانینی برای تمرکز در ...' imgUrl='/images/bookImages/kare-amigh.jpeg' auther='کارل نیوپورت'/></SwiperSlide>
                <SwiperSlide><CarouselItem id='1' title='کتاب چگونه کمال گرا نباشیم' imgUrl='/images/bookImages/kamalgara.jpeg' auther='استفان گایز'/></SwiperSlide>
                <SwiperSlide><CarouselItem id='1' title='خرده عادت ها ' imgUrl='/images/bookImages/khorde-adat.jpeg' auther='استفان گایز'/></SwiperSlide>
                <SwiperSlide><CarouselItem id='1' title='کتاب نترس دختر ! غوغا به پا کن' imgUrl='/images/bookImages/natars.jpeg' auther='کاراالویل لیبا'/></SwiperSlide>
                <SwiperSlide><CarouselItem id='1' title='کتاب نترس دختر ! غوغا به پا کن' imgUrl='/images/bookImages/natars.jpeg' auther='کاراالویل لیبا'/></SwiperSlide>
            </Carousel>

            </div>
        </div>
    );
};

export default SimilarBook;