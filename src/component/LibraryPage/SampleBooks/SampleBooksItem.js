import React from 'react';
import { Link } from 'react-router-dom';

const SampleBooksItem = ({bookName,auther,publisher,id,price,imgUrl}) => {
    return (
        <div className='flex items-center w-full p-7 border-b border-dashed border-b-gray-300'>
        <img src={imgUrl} alt="book" className='w-20 ml-5 rounded-sm md:w-28' />
        <div className='flex flex-col items-start md:flex-row md:justify-between md:items-center md:flex-1'>
                <div className='flex flex-col items-start my-1'>
                    <Link to={`/book/${id}`} className='text-lg text-gray-500 w-full overflow-hidden whitespace-nowrap text-ellipsis md:w-96'>{bookName}</Link>
                    <p className='text-xs text-gray-600 my-1'>{auther}</p>
                    <p className='text-xs text-gray-400 my-1'>{publisher}</p>
                </div>
                <div className='flex items-center my-1 md:flex-col md:items-end md:space-y-2 '>
                   <p className='text-sm text-gray-600'>{`قیمت : ${price} تومان `}</p>
                </div>
        </div>
    </div>
    );
};

export default SampleBooksItem;