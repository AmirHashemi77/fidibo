import React, { useState } from 'react';

const AppDescriptionSm = () => {
const [mode,setMode]=useState('light')
const  activeButton='py-2 px-3 rounded-full bg-lightBlue text-white mx-1 duration-300'
const defaultButton='py-2 px-3 rounded-full bg-gray-400 text-gray-300 mx-1 duration-300'
    return (
        <div className='bg-lightBlue2 py-2 md:hidden'>
            <div className='flex justify-between items-center flex-nowrap overflow-scroll'>
                {/* item 1 */}
                <div className='flex flex-col items-center basis-52 shrink-0 flex-grow-0 mx-2'>
                    <h6 className='text-lightBlue text-center text-base my-1'>بهترین و پرفروش‌ترین عناوین</h6>
                    <p className='text-gray-700 mb-7 text-xs text-center my-1'>تنوعی کم‌نظیر از کتاب‌های صوتی، الکترونیک، مجلات و پادکست‌ها</p>
                    <div className='p-2 border border-lightBlue rounded-2xl'>
                        <img className='rounded-2xl' src={`images/appImages/Home-${mode}.webp`} alt="app" />
                    </div>
                </div>
                {/* item 2 */}
                <div className='flex flex-col items-center basis-52 shrink-0 flex-grow-0 mx-2  '>
                    <h6 className='text-lightBlue text-center text-base my-1'>طرح اشتراک فیدی پلاس</h6>
                    <p className='text-gray-700 mb-7 text-xs text-center my-1'>دسترسی به کتابخانه‌ای با بیش از 25000 هزار کتاب صوتی و الکترونیک</p>
                    <div className='p-2 border border-lightBlue rounded-2xl'>
                        <img className='rounded-2xl' src={`images/appImages/Fidiplus-${mode}.webp`} alt="app" />
                    </div>
                </div>
                {/* item 3 */}
                <div className='flex flex-col items-center basis-52 shrink-0 flex-grow-0 mx-2  '>
                    <h6 className='text-lightBlue text-center text-base my-1'>کتاب‌های رایگان</h6>
                    <p className='text-gray-700 mb-7 text-xs text-center my-1'>بیش از هزار عنوان کتاب الکترونیک و صوتی رایگان</p>
                    <div className='p-2 border border-lightBlue rounded-2xl'>
                        <img className='rounded-2xl' src={`images/appImages/Free-${mode}.webp`} alt="app" />
                    </div>
                </div>
                {/* item 4 */}
                <div className='flex flex-col items-center basis-52 shrink-0 flex-grow-0 mx-2  '>
                    <h6 className='text-lightBlue text-center text-base my-1'>لذت شنیدن کتاب‌ها</h6>
                    <p className='text-gray-700 mb-7 text-xs text-center my-1'>تازه‌ترین و جذاب‌ترین کتاب‌های صوتی با کیفیت پخش و امکانات متنوع برای شنیدن</p>
                    <div className='p-2 border border-lightBlue rounded-2xl'>
                        <img className='rounded-2xl' src={`images/appImages/Audio-${mode}.webp`} alt="app" />
                    </div>
                </div>
                {/* item 5 */}
                <div className='flex flex-col items-center basis-52 shrink-0 flex-grow-0 mx-2  '>
                    <h6 className='text-lightBlue text-center text-base my-1'>سهولت در مطالعه کتاب</h6>
                    <p className='text-gray-700 mb-7 text-xs text-center my-1'>با قابلیت تغییر فونت،‌ سایز و حالت نمایش و مطالعه در شب</p>
                    <div className='p-2 border border-lightBlue rounded-2xl'>
                        <img className='rounded-2xl' src={`images/appImages/Reader-${mode}.webp`} alt="app" />
                    </div>
                </div>
                {/* item 6 */}
                <div className='flex flex-col items-center basis-52 shrink-0 flex-grow-0 mx-2  '>
                    <h6 className='text-lightBlue text-center text-base my-1'>کتابخانه</h6>
                    <p className='text-gray-700 mb-7 text-xs text-center my-1'>امکان ساختن قفسه‌بندی بر اساس سلیقه کاربران</p>
                    <div className='p-2 border border-lightBlue rounded-2xl'>
                        <img className='rounded-2xl' src={`images/appImages/Library-${mode}.webp`} alt="app" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center my-10 duration-300'>
                <button onClick={()=>setMode('light')} className={mode==='light' ? activeButton : defaultButton}><i className='fa fa-sun-o text-2xl'></i></button>
                <button onClick={()=>setMode('dark')} className={mode==='dark' ? activeButton : defaultButton}><i className='fa fa-moon-o text-2xl'></i></button>
            </div>
        </div>
    );
};

export default AppDescriptionSm;