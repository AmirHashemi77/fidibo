import React, { useEffect } from 'react';
import Banner from '../component/Banner';
import Carousel from '../component/Carousel/Carousel';
import CarouselItem from '../component/Carousel/CarouselItem';
import Slider from '../component/Slider';
import Footer from '../container/Footer';
import { SwiperSlide } from 'swiper/react';
import Header from '../container/Header';
import { useSelector } from 'react-redux';


const Home = () => {
    
    const allBooks= useSelector((state)=>state.books.allBooks)
    const filterBookHandler=(tagName)=>{
        const filteredBooksArr=allBooks.filter((item)=>{
            let itemTag;
            item.tags.map((tag)=>{
                if(tagName===tag){
                return    itemTag=tag
                }else{
                     // eslint-disable-next-line
                    return
                }
            })
            return itemTag===tagName
    })
    return filteredBooksArr
}


useEffect(()=>{
    document.title='فیدیبو'
   },[])

    return (
     <>
     <Header />
            <Slider/>
            <Carousel title='پرفروش های هفته'>
               {filterBookHandler('bestSeller').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Banner imgUrl='images/bannerImages/1.webp'/>
            <Carousel title='ادبیات روسیه'>
            {filterBookHandler("russia").map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Carousel title='قصه های رایگان گرامافون'>
            {filterBookHandler('geramafon').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Banner imgUrl='images/bannerImages/2.webp'/>
            <Carousel title='پر فروش های صوتی'>
            {filterBookHandler('bestSellerAudio').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Carousel title='شهر آی قصه'>
            {filterBookHandler('ayghese').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Banner imgUrl='images/bannerImages/3.webp'/>
            <Carousel title='کتاب های روانشناسی'>
            {filterBookHandler('psychology').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Carousel title='محبوب ترین های فیدیبو'>
            {filterBookHandler("most-popular").map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Banner imgUrl='images/bannerImages/4.webp'/>
            <Carousel title='با صدای ستارگان'>
            {filterBookHandler("setaregan").map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Carousel title='تازه های فیدیبو'>
            {filterBookHandler("new-book").map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Banner imgUrl='images/bannerImages/5.webp'/>
            <Carousel title='تازه های دانشگاهی'>
            {filterBookHandler('university').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Carousel title='درسی و کمک درسی'>
            {filterBookHandler('study-aids').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Banner imgUrl='images/bannerImages/6.webp'/>
            <Carousel title='تازه های پادکست'>
            {filterBookHandler('new-podcast').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Carousel title='آخرین شماره های مجلات'>
            {filterBookHandler('recently-magazines').map((item)=>{
                return   <SwiperSlide key={item.id}><CarouselItem id={item.id} title={item.bookName} imgUrl={`images/bookImages/books/${item.imgUrl}`} auther={item.auther}/></SwiperSlide>

               })}
            </Carousel>
            <Footer type='home' />
            
          
     </>
        
    );
};

export default Home;