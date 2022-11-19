import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';
import InstallMacVersionHelp from './InstallMacVersionHelp';
import InstallWindowsVersionHelp from './InstallWindowsVersionHelp';
const InstallHelp = () => {
    const dispatch=useDispatch()
    const helpType=useSelector((state)=>state.ui.HelperType)
    
    return (
        <>
        <div className='bg-black bg-opacity-30 w-full h-full fixed top-0 right-0 z-40'></div>
        {/* <div className='fixed top-16  w-full h-full z-50 p-5 overflow-auto'> */}
        <div className=' fixed z-50 top-10 left-1/2 -translate-x-1/2 overflow-auto h-5/6 bg-white p-5 w-full max-w-xl shadow-xl rounded-lg'>
            <div className='flex items-center justify-between pb-3 border-b border-b-gray-400'>
                    <h3 className='text-base text-gray-800'>{helpType ==='win' ? 'راهنمای نصب نسخه ویندوز' : 'راهنمای نصب نسخه مک'}</h3>
                    <button onClick={()=>dispatch(uiSliceAction.showHelperHandler())}  className='text-gray-400 hover:text-black'> <i className='fa fa-close'></i></button>
            </div>
           {helpType ==='win' ? <InstallWindowsVersionHelp/> : <InstallMacVersionHelp/>}
        </div>

        {/* </div>  */}
    </>
    );
};

export default InstallHelp;