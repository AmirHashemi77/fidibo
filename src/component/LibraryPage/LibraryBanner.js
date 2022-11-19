import React from 'react';

const LibraryBanner = ({tabName}) => {
    let title,subTitle
    
    switch (tabName) {
        case 'sample':
            title='کتابهای نمونه'
            subTitle='می توانید فهرست تمامی کتابهای نمونه دانلود شده خود را ببینید و ویرایشهای لازم را انجام دهید.'
            break;
        case 'recycle':
            title='سطل بازیافت'
            subTitle='اگر کتابی را پاک کرده اید، در اینجا می توانید در صورت تمایل آن را بازیابی کنید یا به طور کامل حذف کنید'
            break;
        case 'favorite':
            title='حتما بخوانم'
            subTitle='کتابهایی که به خود قول داده اید حتما بخوانید.'
            break;
        case 'myBook':
            title='کتابخانه من'
            subTitle='می توانید فهرست تمامی کتابهای خود را ببینید و ویرایشهای لازم را انجام دهید'
            break;
    
    }


    return (
        <div className='w-full bg-[#40BCC0] text-white my-8'>
            <div className='flex items-center justify-between px-10 py-5'>
                <div className='flex flex-col items-start text-right p-6'>
                    <h5 className='text-2xl mb-9'>{title}</h5>
                    <p>{subTitle}</p>
                </div>
                <img src="/images/library/banner.png" alt="banner" className='hidden md:block w-72' />
            </div>
            
        </div>
    );
};

export default LibraryBanner;