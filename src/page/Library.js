import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import LibraryBanner from '../component/LibraryPage/LibraryBanner';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { useSelector, useDispatch } from 'react-redux';
import { uiSliceAction } from '../store/slice/uiSlice';


const Library = () => {
    const activeClassName='p-3 mx-2 rounded-md bg-white border border-gray-300 border-b border-b-transparent'
    const unActiveClassname='p-3 bg-transparent mx-2 rounded-md'
    const authed=useSelector((state)=>state.auth.authed)
    const Location=useLocation()
    const activeTab=Location.pathname.split("/")[2] || 'myBook'
    const dispatch=useDispatch()
    const showLoginHandler=()=>{
        dispatch(uiSliceAction.showLoginHandler())
    }
   useEffect(()=>{
    document.title='کتابخانه'
   },[])
    return (
        <>
        <Header />
        {authed ? 
                <div>
                <div>
                    <LibraryBanner tabName={activeTab}/>
                    <div className='max-w-6xl mx-auto p-5'>
                        <div className='flex items-center flex-wrap border-b border-b-gray-300 w-full text-xs text-gray-600 md:flex-nowrap'>
                                <NavLink to='/library'  end className={({isActive})=>isActive ? activeClassName :unActiveClassname}>کتاب های من</NavLink>
                                <NavLink to='/library/recycle'  className={({isActive})=>isActive ? activeClassName :unActiveClassname}>سطل بازیافت</NavLink>
                                <NavLink to='/library/favorite'  className={({isActive})=>isActive ? activeClassName :unActiveClassname}>کتاب های محبوب من</NavLink>
                                <NavLink to='/library/sample'  className={({isActive})=>isActive ? activeClassName :unActiveClassname}>کتاب های نمونه من</NavLink>  
                        </div>
                    </div>

                </div>
                <div className='max-w-4xl mx-auto p-5'>

                    <Outlet/>
                </div>
                </div>   :
                

            <div className='max-w-4xl mx-auto px-5 py-16'>
                <div className='p-5 bg-blue-100 text-blue-400 border-2 border-blue-200 text-center'>
                        <p className='max-w-lg mx-auto'>برای مشاهده کتابخانه لطفا وادر حساب کاربری خود شوید</p>
                        <div className='flex items-center justify-center my-3  '>
                            <button onClick={showLoginHandler} className='bg-green-800 text-white text-xs mx-3 p-2'>ورود به صفحه کاربری</button>
                            <Link to='/' className='bg-gray-400 text-white text-xs mx-3 p-2'>انتخاب کتاب</Link>
                        </div>
                </div>

            </div>

        }
       
        <Footer/>
        </>
    );
};

export default Library;
