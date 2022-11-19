import React from 'react';

const HeroSection = () => {
    return (
        <div className='max-w-3xl mx-auto p-5'>
            <div className='flex items-center justify-center md:justify-between'>
                <img className='hidden md:block w-48' src="images/appImages/heroImgLeft.svg" alt="hero" />
                <div className='flex items-center justify-center '>
                    <img className='w-16 md:w-24' src="images/appImages/fidiboIcon.png" alt="logo" />
                    <h2 className='text-base tracking-tight pb-2 text-lightBlue md:text-xl'>نصب اپلیکیشن فیدیبو</h2>

                </div>
                <img className='hidden md:block w-48' src="images/appImages/heroImgright.svg" alt="hero" />
            </div>
        </div>
    );
};

export default HeroSection;