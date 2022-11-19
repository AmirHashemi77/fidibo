import React, { useEffect } from 'react';
import Footer from '../container/Footer';
import Header from '../container/Header';

const NotFound = () => {
    useEffect(()=>{
        document.title='صفحه مورد نظر یافت نشد'
       },[])
    return (
        <>
           <Header/>
           <div className='max-w-5xl mx-auto text-center text-2xl py-56'>صفحه مورد نظر یافت نشد.</div>

           <Footer/> 
        </>
    );
};

export default NotFound;