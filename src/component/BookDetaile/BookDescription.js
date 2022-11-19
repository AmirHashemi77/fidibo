import React from 'react';

const BookDescription = ({ bookName,publisher , price , date ,language,fileSize,pages,isbn}) => {
    return (
        <div className='w-full text-center text-sm bg-gray-200 text-gray-600 p-5 my-5'>
            <div className='max-w-5xl mx-auto p-5'>
            <h5 className='text-center text-gray-700 py-3'>{`مشخصات کتاب ${bookName}`}</h5>
            <ul className='flex flex-col justify-between items-start py-3 w-full text-gray-400 md:flex-row md:items-center md:justify-center'>
                    <li className='flex items-center px-3 my-3 md:my-0 md:border-l md:border-l-gray-300 text-xs'>
                        <img src="/images/bookDetailIcon/publisher.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`نشر ${publisher}`}</p>
                    </li>
                    <li className='flex items-center px-3 my-3 md:my-0 md:border-l md:border-l-gray-300 text-xs'>
                        <img src="/images/bookDetailIcon/printer.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`قیمت نسخه چاپی ${price} تومان`}</p>
                    </li>
                    <li className='flex items-center px-3 my-3 md:my-0 md:border-l md:border-l-gray-300 text-xs'>
                        <img src="/images/bookDetailIcon/date.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`${date}`}</p>
                    </li>
                    <li className='flex items-center px-3 my-3 md:my-0 md:border-l md:border-l-gray-300 text-xs'>
                        <img src="/images/bookDetailIcon/language.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`${language}`}</p>
                    </li>
                    <li className='flex items-center px-3 my-3 md:my-0 md:border-l md:border-l-gray-300 text-xs'>
                        <img src="/images/bookDetailIcon/fileSize.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`${fileSize}`}</p>
                    </li>
                    <li className='flex items-center px-3 my-3 md:my-0 md:border-l md:border-l-gray-300 text-xs'>
                        <img src="/images/bookDetailIcon/pages.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`${pages} صفحه`}</p>
                    </li>
                    <li className='flex items-center px-3  text-xs'>
                        <img src="/images/bookDetailIcon/isbn.png" alt='icon' className=" mx-1 w-8 h-8" />
                        <p>{`${isbn}`}</p>
                    </li>
                  
            </ul>

            </div>
        </div>
    );
};

export default BookDescription;