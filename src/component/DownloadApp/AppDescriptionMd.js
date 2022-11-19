import React, {  useState } from 'react';

const AppDescriptionMd = () => {
    const [activeIcon,setActiveIcon]=useState('home')
    const [mode,setMode]=useState('light')
    const activeIconClass='bg-lightBlue  rounded-full p-2'
    const defaultIconClass='bg-transparent border border-gray-400'
    const  activeButton='py-2 px-3 rounded-full bg-lightBlue text-white mx-1 duration-300'
    const defaultButton='py-2 px-3 rounded-full bg-gray-400 text-gray-300 mx-1 duration-300'
   let title,subTitle,imgUrl
   
    switch (activeIcon) {
        case 'home':
            title='بهترین و پرفروش‌ترین عناوین'
            subTitle='تنوعی کم‌نظیر از کتاب‌های صوتی، الکترونیک، مجلات و پادکست‌ها'
            imgUrl=`images/appImages/Home-${mode}.webp`
            break;
        case 'fidiplus':
            title='طرح اشتراک فیدی پلاس'
            subTitle='دسترسی به کتابخانه‌ای با بیش از 25000 هزار کتاب صوتی و الکترونیک'
            imgUrl=`images/appImages/Fidiplus-${mode}.webp`
            break;
        case 'free':
            title='کتاب‌های رایگان'
            subTitle='بیش از هزار عنوان کتاب الکترونیک و صوتی رایگان'
            imgUrl=`images/appImages/Free-${mode}.webp`
            break;
        case 'audio':
            title='لذت شنیدن کتاب‌ها'
            subTitle='تازه‌ترین و جذاب‌ترین کتاب‌های صوتی با کیفیت پخش و امکانات متنوع برای شنیدن'
            imgUrl=`images/appImages/Audio-${mode}.webp`
            break;
        case 'text':
            title='سهولت در مطالعه کتاب'
            subTitle='با قابلیت تغییر فونت،‌ سایز و حالت نمایش و مطالعه در شب'
            imgUrl=`images/appImages/Reader-${mode}.webp`
            break;
        case 'library':
            title='کتابخانه'
            subTitle='امکان ساختن قفسه‌بندی بر اساس سلیقه کاربران'
            imgUrl=`images/appImages/Library-${mode}.webp`
            break;
    
        default:
            title='بهترین و پرفروش‌ترین عناوین'
            subTitle='تنوعی کم‌نظیر از کتاب‌های صوتی، الکترونیک، مجلات و پادکست‌ها'
            imgUrl=`images/appImages/Fidiplus-${mode}.webp`
            break;
    }
 
    return (
        <div className='bg-lightBlue2 p-8 hidden md:block'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-start'>
                    <div className='flex flex-col items-center space-y-5 my-7'>
                        <button onClick={()=>setActiveIcon('home')} className={`${activeIcon === 'home' ? activeIconClass : defaultIconClass} rounded-full p-2`}><img className={activeIcon==='home' ? 'activeIcon' : ''} src="/images/icons/app-description-btn-home.svg" alt="button" /></button>
                        <button onClick={()=>setActiveIcon('fidiplus')} className={`${activeIcon === 'fidiplus' ? activeIconClass : defaultIconClass} rounded-full p-2`}><img className={activeIcon==='fidiplus' ? 'activeIcon' : ''} src="/images/icons/fidi-plus-button.svg" alt="button" /></button>
                        <button onClick={()=>setActiveIcon('free')} className={`${activeIcon === 'free' ? activeIconClass : defaultIconClass} rounded-full py-3 px-1`}><p className={`${activeIcon === 'free' ? 'text-white' : 'text-gray-400'} text-xs`}>رایگان</p></button>
                        <button onClick={()=>setActiveIcon('audio')} className={`${activeIcon === 'audio' ? activeIconClass : defaultIconClass} rounded-full p-2`}><img className={activeIcon==='audio' ? 'activeIcon' : ''} src="/images/icons/headphone-btn.svg" alt="button" /></button>
                        <button onClick={()=>setActiveIcon('text')} className={`${activeIcon === 'text' ? activeIconClass : defaultIconClass} rounded-full p-2`}><img className={activeIcon==='text' ? 'activeIcon' : ''} src="/images/icons/article-btn.svg" alt="button" /></button>
                        <button onClick={()=>setActiveIcon('library')} className={`${activeIcon === 'library' ? activeIconClass : defaultIconClass} rounded-full p-2`}><img className={activeIcon==='library' ? 'activeIcon' : ''} src="/images/icons/library-btn.svg" alt="button" /></button>
                       

                    </div>
                    <div className='flex flex-col items-start space-y-1 m-16'>
                        <h4 className='text-lightBlue text-2xl'>{title}</h4>
                        <p className='text-xs text-gray-700'>{subTitle}</p>
                    </div>

                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='p-2 border border-lightBlue rounded-2xl'>
                            <img className='rounded-2xl w-52' src={imgUrl} alt="app" />
                        </div>
                        <div className='flex items-center justify-center my-10 duration-300'>
                            <button onClick={()=>setMode('light')}  className={mode==='light' ? activeButton : defaultButton}><i className='fa fa-sun-o text-2xl'></i></button>
                            <button onClick={()=>setMode('dark')}  className={mode==='dark' ? activeButton : defaultButton}><i className='fa fa-moon-o text-2xl'></i></button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AppDescriptionMd;