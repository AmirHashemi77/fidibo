import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { basketAction } from '../../store/slice/basketSlice';

const BasketItem = ({bookId,bookName,auther,price,imgUrl,id}) => {
    const dispatch=useDispatch()
    const deleteItemHandler=()=>{
        dispatch(basketAction.removeBookFromBasketHandler(id))
    }
    return (
        <div className='flex items-start border-b border-b-gray-200 p-3 w-full'>
            <img className='w-20  rounded-md md:w-28' src={imgUrl} alt="bookImage" />
            <div className='flex flex-1 justify-between items-baseline p-4'>
            <div className='flex flex-col text-right text-sm md:text-base'>
                <Link to={`/book/${bookId}`} className='text-gray-500 mb-2 overflow-hidden text-elliLinksis md:whitespace-nowrap  md:w-fit'>{`دانلود کتاب ${bookName} | نوشته ${auther}`}</Link>
                <small className='text-xs text-gray-500'>{auther}</small>
            </div>
            <div className='flex flex-col items-end'>
                <p className='text-gray-700 text-xs mb-2 md:text-sm'>{price}<span className='text-2xs mr-1'>تومان</span></p>
                <button onClick={deleteItemHandler} className='text-2xl text-red-700'><i className='fa fa-trash'></i></button>
            </div>

            </div>
        </div>
    );
};

export default BasketItem;