import React from 'react';
import { Link } from 'react-router-dom';

const FooterAppPage = () => {
    return (
        <div className='max-w-3xl mx-auto p-2'>
            <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
                <div className='flex items-center justify-center'>
                    <img className='w-10' src="images/appImages/headphone-icon.png" alt="icon" />
                    <div className='flex flex-col items-start justify-center mx-3 space-y-1'>
                        <p className='text-sm text-gray-800 text-right tracking-tighter'>پشتیبانی فیدیبو: 61930020-021</p>
                        <small className='text-xs text-gray-400 text-right tracking-tighter'>هفت روز هفته (ساعت9 الی 17)</small>
                    </div>

                </div>
                <div className='flex items-center justify-center my-3'>
                    <Link><img className='w-8 mx-1' src="/images/icons/aparat-icon.png" alt="icon" /></Link>
                    <Link><img className='w-8 mx-1' src="/images/icons/telegram-icon.png" alt="icon" /></Link>
                    <Link><img className='w-8 mx-1' src="/images/icons/instagram-icon.png" alt="icon" /></Link>
                    <Link><img className='w-8 mx-1' src="/images/icons/facebook-icon.png" alt="icon" /></Link>
                    <Link><img className='w-8 mx-1' src="/images/icons/twitter-icon.png" alt="icon" /></Link>
                </div>
            </div>
            
        </div>
    );
};

export default FooterAppPage;