import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasketButton from './BasketButton';
import BookDropDown from './BookDropDown';
import MagazineDropDown from './MagazineDropDown';
import PodcastDropDown from './PodcastDropDown';
import UserButton from './UserButton';
import SearchInput from './SearchInput';

const MdHeader = () => {
    const [activeBookMenu,setActiveBookMenu]=useState(false)
    const [activePodcastMenu,setActivePodcastMenu]=useState(false)
    const [activemMagazineMenu,setActiveMagazineMenu]=useState(false)
   
    return (
        <header className='hidden pt-2 px-5 bg-white shadow-lg  md:block'>
            <div className='max-w-6xl mx-auto relative'>
                <div className='flex flex-col items-center'>
                    <div className='flex  items-center w-full'>
                        <div className='flex items-center flex-1 gap-5'>
                            <Link  to='/'><img src="/images/fidibo-logo.png" alt="" className='px-4 w-32'/></Link>
                               <SearchInput/>

                        </div>
                    
                        <ul className='flex items-center p-1'>
                            <li className='text-2xl px-1 rounded-lg text-gray-500 hover:text-gray-800 cursor-pointer'><Link><i className='fa fa-gift'></i></Link></li>
                           <BasketButton/>
                           <UserButton/>
                           
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-3 w-full'>
                    <ul className='flex ml-2'>
                        <li  className='group text-gray-500 text-2xl border-b-2 border-b-transparent mx-2 py-4 hover:text-lightBlue hover:border-b-2 hover:border-b-lightBlue duration-200'>
                            <Link to='/' className='flex items-center'>
                                <i className='fa fa-home'></i><span className='group text-xs text-black mx-1 group-hover:text-lightBlue duration-200'>خانه</span>
                            </Link>
                        </li>
                        <li onMouseEnter={()=>setActiveBookMenu(true)} onMouseLeave={()=>setActiveBookMenu(false)} className='group text-gray-500 text-2xl border-b-2 border-b-transparent mx-2 py-4 hover:text-lightBlue hover:border-b-2 hover:border-b-lightBlue duration-200'>
                            <Link className='flex items-center'>
                                <i className='fa fa-book'></i><span className='group text-xs text-black mx-1 group-hover:text-lightBlue duration-200'>کتاب الکترونیکی و صوتی</span>
                            </Link>
                            {activeBookMenu && <BookDropDown/>}
                        </li>
                        <li onMouseEnter={()=>setActivePodcastMenu(true)} onMouseLeave={()=>setActivePodcastMenu(false)} className='group text-gray-500 text-2xl border-b-2 border-b-transparent mx-2 py-4 hover:text-lightBlue hover:border-b-2 hover:border-b-lightBlue duration-200'>
                            <Link className='flex items-center'>
                                <i className='fa fa-podcast'></i><span className='group text-xs text-black mx-1 group-hover:text-lightBlue duration-200'>پادکست</span>
                            </Link>
                            {activePodcastMenu && <PodcastDropDown/>}
                        </li>
                        <li onMouseEnter={()=>setActiveMagazineMenu(true)} onMouseLeave={()=>setActiveMagazineMenu(false)} className='group text-gray-500 text-2xl border-b-2 border-b-transparent mx-2 py-4 hover:text-lightBlue hover:border-b-2 hover:border-b-lightBlue duration-200'>
                            <Link className='flex items-center'>
                                <i className='fa fa-newspaper-o'></i><span className='group text-xs text-black mx-1 group-hover:text-lightBlue duration-200'>مجله</span>
                            </Link>
                            {activemMagazineMenu && <MagazineDropDown/>}
                        </li>
                        <li className='group text-purple-700 text-2xl border-b-2 border-b-transparent mx-2 py-4 hover:border-b-2 hover:border-b-lightBlue'>
                            <Link className='flex items-center'>
                                <i className='fa fa-star'></i><span className='text-sm mx-1'>فیدی پلاس</span>
                            </Link>
                        </li>
                    </ul>

                    <Link to='/app' className='text-white text-center bg-lightBlue h-fit w-48  py-3  text-sm rounded-lg'>دانلود اپلیکیشن</Link>
                </div>
            </div>
        </header>
    );
};

export default MdHeader;