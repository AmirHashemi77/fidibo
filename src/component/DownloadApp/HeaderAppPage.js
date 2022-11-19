import React from 'react';
import { Link } from 'react-router-dom';

const HeaderAppPage = () => {
    return (
        <div className='p-4 w-full bg-white shadow-lg'>
            <div className='max-w-3xl mx-auto'>

            <div className='flex items-center justify-center md:hidden'>
            <Link to='/'>
                <img className='w-20' src="images/fidibo-logo.png" alt="logo" />
            </Link>    
            </div>
            <div className='hidden md:flex items-center justify-between'>
            <Link to='/'>
                <img className='w-20' src="images/fidibo-logo.png" alt="logo" />
            </Link> 
                <div className='flex flex-col items-end justify-between'>
                    <h4 className='text-base text-lightBlue mb-1'>
                    بهترین و پرفروش‌ترین
                    </h4>
                    <p className='text-xs text-gray-600'>
                    کتاب‌های الکترونیک، صوتی، مجلات و پادکست‌ها
                    </p>

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default HeaderAppPage;