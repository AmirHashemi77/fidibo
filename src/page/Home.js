import React, { useEffect } from 'react';
import Banner from '../component/Banner';
import Carousel from '../component/Carousel/Carousel';
import Slider from '../component/Slider';
import Footer from '../container/Footer';
import Header from '../container/Header';


const Home = () => {
useEffect(()=>{
    document.title='فیدیبو'
   },[])

    return (
     <>
     <Header />
            <Slider/>
            <Carousel title='پرفروش های هفته' id="bestSeller"/>
            <Banner imgUrl='images/bannerImages/1.webp'/>
            <Carousel title='ادبیات روسیه' id="russia"/>
            <Carousel title='قصه های رایگان گرامافون' id="geramafon"/>
            <Banner imgUrl='images/bannerImages/2.webp'/>
            <Carousel title='پر فروش های صوتی' id="bestSellerAudio"/>
            <Carousel title='شهر آی قصه' id="ayghese"/>
            <Banner imgUrl='images/bannerImages/3.webp'/>
            <Carousel title='کتاب های روانشناسی' id="psychology"/>
            <Carousel title='محبوب ترین های فیدیبو' id="most-popular"/>
            <Banner imgUrl='images/bannerImages/4.webp'/>
            <Carousel title='تازه های فیدیبو' id="new-book"/>
            <Banner imgUrl='images/bannerImages/5.webp' />
            <Carousel title='تازه های دانشگاهی' id="university"/>
            <Carousel title='درسی و کمک درسی' id="study-aids"/>
            <Banner imgUrl='images/bannerImages/6.webp'/>
            <Carousel title='تازه های پادکست' id="new-podcast"/>
            <Carousel title='آخرین شماره های مجلات' id="recently-magazines"/>
           
            <Footer type='home' />
            
          
     </>
        
    );
};

export default Home;