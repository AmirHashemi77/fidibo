import React from 'react';
import LoginAndSignup from '../component/loginAndSignup/LoginAndSignup';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../store/slice/uiSlice';

const LoginAndSignupContainer = () => {
    const dispatch=useDispatch()
    return (
        <>
            <div className='bg-black bg-opacity-30 w-full h-full fixed top-0 right-0 z-40'></div>
            <div className='flex items-center justify-center fixed w-full h-full top-0 right-0 z-50'>
            <div className=' bg-white px-12 py-5 relative shadow-xl rounded-lg '>
               <button onClick={()=>dispatch(uiSliceAction.showLoginHandler())}  className='text-gray-400 absolute top-4 left-5 hover:text-black'> <i className='fa fa-close'></i></button>
                <LoginAndSignup/>
            </div>

            </div>
        </>
    );
};

export default LoginAndSignupContainer;