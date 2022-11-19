import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { libraryAction } from '../../../store/slice/librarySlice';

const RecycleBooksItem = ({bookName,auther,publisher,id,imgUrl}) => {
    const dispatch=useDispatch()
    const overallRemove=()=>{
        dispatch(libraryAction.removeFromRecycleBookHandler(id))
    }
    const returnBookHandler=()=>{
        dispatch(libraryAction.returnToMyBooksHandler(id))
    }
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
                        <button onClick={overallRemove} className='flex items-center py-1 px-2 bg-red-500 bg-opacity-90 text-gray-100 text-xs  rounded-lg'><i className='fa fa-trash text-sm mx-1'></i> حذف دايمی </button>
                        <button onClick={returnBookHandler} className='flex items-center py-1 px-2 bg-green-500 bg-opacity-90 text-gray-100 text-xs mx-2 rounded-lg md:mx-0'>
                         <i className='fa fa-repeat text-sm mx-1'></i> بازیابی
                        </button>
                    </div>
            </div>
        </div>
        
    );
};

export default RecycleBooksItem;