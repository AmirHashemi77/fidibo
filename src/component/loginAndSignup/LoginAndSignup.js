import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from '../../store/slice/authSlice';
import { uiSliceAction } from '../../store/slice/uiSlice';


const LoginAndSignup = () => {
    const [type,setType]=useState('login')
    const dispatch=useDispatch()
    const userName=useRef()
    const password=useRef()
    const changeTypeHandler = ()=>{
        if(type==='login'){
            setType('signin')
        }
        if(type==='signin'){
            setType('login')
        }
    }


    const loginHandler=(e)=>{
            e.preventDefault()
            dispatch(authAction.logInHandler())
            dispatch(uiSliceAction.showLoginHandler())
            

    }
    return (
        <div className='max-w-2xl mx-auto py-5 px-10 text-center'>
                    <div className='flex flex-col items-center px-7'>
                        <i className='fa fa-user-o text-7xl text-gray-600 my-2'></i>
                        <p className='text-xl text-gray-600'>ورود یا ثبت نام</p>
                        <p className='text-xs text-gray-500 my-5'>لطفا نام کاربری و رمز عبور خود را وارد کنید</p>
                    </div>
                    <form className='w-full flex flex-col border-b-2 border-b-gray-200 py-3'>
                        <input ref={userName} type="text"  className='bg-gray-200 p-2 my-2 rounded-md ltr placeholder:text-xs focus:outline-none' placeholder='نام کاربری'/>
                        <input ref={password} type="text"  className='bg-gray-200 p-2 my-2 rounded-md ltr placeholder:text-xs focus:outline-none' placeholder='رمز عبور'/>
                        <button onClick={loginHandler} className='bg-lightBlue text-white text-sm p-3 rounded-lg my-2'>{type==='login' ? 'ورود' : 'ثبت نام'}</button>
                    </form>
                    <button onClick={changeTypeHandler} className='bg-transparent text-gray-500 hover:text-lightBlue text-xs p-5'>{type==='login' ? 'ثبت نام در سایت' : 'ورود به حساب کاربری'}</button>
                    <p className='text-center text-gray-400 text-xs my-4'>قوانین استفاده از فیدیبو را پذیرفته ام</p>
                </div>
    );
};

export default LoginAndSignup;