import React from 'react';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';

const SortingContainer = () => {
    const dispatch=useDispatch()
    return (
        <>
        <div className='bg-black bg-opacity-30 w-full h-full fixed top-0 right-0 z-40'></div>
        <div className='flex items-center justify-center fixed w-full h-full top-0 right-0 z-50'>
        <div className='bg-white py-5 relative shadow-xl rounded-lg w-7/12'>
            <div className='pb-3 px-3 text-sm text-right border-b'>مرتب سازی</div>
            <button onClick={()=> dispatch(uiSliceAction.showSortingHandler())} className='absolute top-5 left-5 text-sm text-gray-300 hover:text-gray-700 duration-300'><i className='fa fa-close'></i></button>
                <div className='flex flex-col items-start  text-xs space-y-3 my-2'>
                    <div className='flex  items-center'>
                        <input name='sort' id='suggest' className='mx-2' type="radio" />
                        <label>پیشنهاد فیدیبو</label>
                    </div>
                    <div className='flex  items-center'>
                        <input name='sort' id='bestselling' className='mx-2' type="radio" />
                        <label>پر فروش ترین</label>
                    </div>
                    <div className='flex  items-center'>
                        <input name='sort' id='newest' className='mx-2' type="radio" />
                        <label>تازه ترین</label>
                    </div>
                    <div className='flex  items-center'>
                        <input name='sort' id='mostPopular' className='mx-2' type="radio" />
                        <label>محبوب ترین</label>
                    </div>
                    <div className='flex  items-center'>
                        <input name='sort' id='cheapest' className='mx-2' type="radio" />
                        <label>ارزان ترین</label>
                    </div>
                    <div className='flex  items-center'>
                        <input name='sort' id='lowVolume' className='mx-2' type="radio" />
                        <label>کم حجم ترین</label>
                    </div>
                    
                   

                </div>
               
        </div>

        </div>
    </>
    );
};

export default SortingContainer;