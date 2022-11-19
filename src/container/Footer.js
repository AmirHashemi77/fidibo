import React from 'react';
import { Link } from 'react-router-dom';
import AnotherFooter from '../component/Footer/AnotherFooter';
import HomeFooter from '../component/Footer/HomeFooter';

const Footer = ({type}) => {
    return (
        <>

        {type==='home' ?
                <HomeFooter/>
            :
           <AnotherFooter/>
        }
       {type==='home' &&   
        <div className="w-full bg-lightBrown">

                <div className='max-w-6xl mx-auto p-5 '>
    <div className='flex flex-col w-full md:flex-row'>
        <div className='flex flex-col'>
            <h5 className='text-lg text-gray-500 my-4'>فیدیبو بزرگترین سامانه خرید کتاب الکترونیک، کتاب صوتی و مجله در ایران</h5>
            <p className='text-xs text-gray-500 my-4 max-w-3xl leading-6'>
                فیدیبو می‌کوشد با گستره‌ای از کتاب‌ها و مجلات متنوع برای طیف وسیعی
                از کاربران تجربه فوق‌العاده خریدکتاب و خواندن آن در دستگاه‌های هوشمند را فراهم کند
                .در فیدیبو با خرید کتاب از بهترین ناشران ایرانی در موضوعات مختلف، کاربران می‌توانند در اپلیکیشن کتابخانه‌ای‌ 
                شخصی برای خود بسازند و از امکانات منحصر 
                به فرد آن استفاده کنند. برای تیم فیدیبو هدف خرید کتاب نیست بلکه 
                ایجاد محیطی بری ارتباط بیشتر اهالی کتاب است.شایان ذکر است که فیدیبو بعد از خرید 
                کتاب، با تیم پشتیبانی همیشه پاسخگوی کاربران محترم خواهد بود. با دانلود هزاران کتاب صوتی،
                کتاب دانشگاهی، شعر عاشقانه، رمان عاشقانه ، مادر و کودک و پادکست از 
                فیدیبو، خواندن کتاب را به گونه ای متفاوت تجربه کنیم.
            </p>

        </div>
             <div className='flex justify-end items-center'>
                <Link><img src="/images/enamad.png" alt="enamd" className='mx-3'/></Link>
                <Link><img src="/images/enamad.png" alt="enamd" className='mx-3'/></Link>
                
            </div>
    </div>
                </div>
        </div>
        }
        </>
    );
};

export default Footer;






