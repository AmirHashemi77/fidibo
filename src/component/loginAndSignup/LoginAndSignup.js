import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { signUpAction } from '../../store/action/signUpAction';
import { authAction } from '../../store/slice/authSlice';
import { logInAction } from '../../store/action/logInAction';




const LoginAndSignup = () => {
    const [type,setType]=useState('login')
    const dispatch=useDispatch()
    const popupErr=useSelector((state)=>state.auth.popupErr)
    const userName=useRef()
    const password=useRef()
    const changeTypeHandler = ()=>{
        if(type==='login'){
            setType('signup')
        }
        if(type==='signup'){
            setType('login')
        }
    }
   
    const userHandler=(e)=>{
            e.preventDefault()
        const inputReg=new RegExp(/^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*$/)
          
            
                if(userName.current.value.length===0 || !inputReg.test(userName.current.value)){
                    if(!userName.current.value.length>0){
                        dispatch(authAction.setPopUpErr('لطفا نام کاربری را وارد کنید'))
                    }
                    if(!inputReg.test(userName.current.value)){
                        dispatch(authAction.setPopUpErr('نام کاربری باید شامل حروف انگلیسی باشد'))
                    }
                }else if(password.current.value.length===0 || !inputReg.test(password.current.value)){
                   
                        if(!password.current.value.length>0){
                            dispatch(authAction.setPopUpErr('لطفا رمز عبور را وارد کنید'))
                        }
                        if(!inputReg.test(password.current.value)){
                            dispatch(authAction.setPopUpErr('رمز عبور باید شامل حروف انگلیسی باشد'))
                        }
                    
                }else{
                    if(type==='signup'){
                    const userData={
                        id:uuid(),
                        userName:userName.current.value,
                        password:password.current.value,
                        library:{},
                        cart:{},
                    }
                    dispatch(signUpAction(userData))
                    
                    }
                    if(type==='login'){
                        const userData={
                            userName:userName.current.value,
                            password:password.current.value
                        }
                        dispatch(logInAction(userData))
                    }
                }   
            

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
                        <button onClick={userHandler} className='bg-lightBlue text-white text-sm p-3 rounded-lg my-2'>{type==='login' ? 'ورود' : 'ثبت نام'}</button>
                        {popupErr && 
                                
                                   <p className='text-xs text-red-600'>{popupErr}</p>
                            
                        }
                    </form>
                    <button onClick={changeTypeHandler} className='bg-transparent text-gray-500 hover:text-lightBlue text-xs p-5'>{type==='login' ? 'ثبت نام در سایت' : 'ورود به حساب کاربری'}</button>
                    <p className='text-center text-gray-400 text-xs my-4'>قوانین استفاده از فیدیبو را پذیرفته ام</p>
                </div>
    );
};

export default LoginAndSignup;