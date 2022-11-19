import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';
import { Link } from 'react-router-dom';
import { authAction } from '../../store/slice/authSlice';

const UserButton = () => {
    const auted=useSelector((state)=>state.auth.authed)
    const dispatch=useDispatch()
    const [showUserMenu,setShowUserMenu]=useState(false)
    const userHandler=()=>{
        if(!auted){
            dispatch(uiSliceAction.showLoginHandler())
        }else{
            setShowUserMenu((prev)=>!prev)
        }

    }
    const exitHandler=()=>{
        dispatch(authAction.logOutHandler())
        setShowUserMenu((prev)=>!prev)
    }
    const userName='Amir'
    return (
        <>
        <li className='text-xl rounded-lg text-gray-500  hover:bg-gray-300 p-3 cursor-pointer relative md:px-1 md:hover:bg-transparent md:py-0 md:hover:text-gray-800'>
            <button onClick={userHandler} className='flex items-center'>
                <i className='fa fa-user-o'></i><span className='hidden text-xs mx-2 md:block'>{!auted ? 'ورود و ثبت نام' : userName}</span>
            </button>
        </li>
        {showUserMenu &&
        <div className='bg-white p-2  rounded-md shadow-xl text-gray-700 text-right border border-gray-300 text-xs absolute top-10 z-30'>
            <div className='flex flex-col items-start justify-between'>
                <Link to='/library' className='flex items-center p-2'>
                    <i className='fa fa-book text-gray-500 ml-2 text-base'></i>
                    <p>کتابخانه من</p>
                </Link>
                <Link to='/user-info' className='flex items-center p-2 border-b border-b-gray-400'>
                    <i className='fa fa-user-circle-o text-gray-500 ml-2 text-base'></i>
                    <p>حساب کاربری</p>
                </Link>
                <button onClick={exitHandler} className='flex items-center p-2'>
                    <i className='fa fa-exit text-gray-500 ml-2 text-base'></i>
                    <p>خروج</p>
                </button>
            </div>

        </div>
        }
        </>
    );
};

export default UserButton;