import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthedBasket from '../component/Basket/AuthedBasket';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { uiSliceAction } from '../store/slice/uiSlice';

const Basket = () => {
    const authed=useSelector((state)=>state.auth.authed)
    const dispatch=useDispatch()
    const showLoginHandler=()=>{
        dispatch(uiSliceAction.showLoginHandler())
    }
    useEffect(()=>{
        document.title='سبد خرید'
       },[])
    return (
        <>
        <Header />
        {!authed &&
            <div className='max-w-4xl mx-auto px-5 py-16'>
                <div className='p-5 bg-blue-100 text-blue-400 border-2 border-blue-200 text-center'>
                        <p className='max-w-lg mx-auto'>برای پرداخت، ثبت اعتبار و استفاده ازکارت تخفیف نیاز است وارد حساب کاربری شوید</p>
                        <div className='flex items-center justify-center my-3  '>
                            <button onClick={showLoginHandler} className='bg-green-800 text-white text-xs mx-3 p-2'>ورود به صفحه کاربری</button>
                            <Link to='/' className='bg-gray-400 text-white text-xs mx-3 p-2'>انتخاب کتاب</Link>
                        </div>
                </div>

            </div>
        }
        {authed && <AuthedBasket/>}
        <Footer/>
        </>
    );
};

export default Basket;