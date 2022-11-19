import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteBooksItem = ({bookName,auther,publisher,id}) => {
    return (
        <div className='flex items-center w-full p-7 border-b border-dashed border-b-gray-300'>
            <img src="/images/bookImages/kare-amigh.jpeg" alt="book" className='w-20 ml-5 rounded-sm md:w-28' />
            <div className='flex flex-col items-start md:flex-row md:justify-between md:items-center md:flex-1'>
                    <div className='flex flex-col items-start my-1'>
                        <Link to={`/book/${id}`} className='text-lg text-gray-500 w-full overflow-hidden whitespace-nowrap text-ellipsis md:w-96'>{bookName}</Link>
                        <p className='text-xs text-gray-600 my-1'>{auther}</p>
                        <p className='text-xs text-gray-400 my-1'>{publisher}</p>
                    </div>
                   
                        <button className='flex items-center py-1 px-2 bg-red-500 bg-opacity-90 text-gray-100 text-xs  rounded-lg'><i className='fa fa-trash text-sm mx-1'></i> حذف </button>
                       
                    
            </div>
        </div>
    );
};

export default FavoriteBooksItem;