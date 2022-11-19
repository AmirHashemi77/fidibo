import React from 'react';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';

const ButtonsContainer = () => {
    const dispatch=useDispatch()
    return (
        <div className='flex items-center justify-between w-full py-6 md:hidden'>
            <button onClick={()=> dispatch(uiSliceAction.showAdvanceSearchHandler())} className='p-3 bg-gray-300 text-gray-500 border border-gray-400 rounded-lg text-xs flex-1 mx-2'>جستجوی پیشرفته</button>
            <button onClick={()=> dispatch(uiSliceAction.showSortingHandler())} className='p-3 bg-gray-300 text-gray-500 border border-gray-400 rounded-lg text-xs flex-1 mx-2'>مرتب سازی: پیشنهاد فیدیبو</button>
        </div>
    );
};

export default ButtonsContainer;