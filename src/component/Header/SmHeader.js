import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiSliceAction } from '../../store/slice/uiSlice';
import SearchInput from './SearchInput';
import UserButton from './UserButton';


const SmHeader = () => {
    const dispatch=useDispatch()
    const openMenuHandler=()=>{
        dispatch(uiSliceAction.showMenuHandler())
    }
    return (
        <>
        <header className='py-2 px-5 bg-white shadow-lg md:hidden'>
             <div className='max-w-5xl mx-auto'>
                 <div className='flex flex-col  space-y-2'>
                     <div className='flex justify-between items-center'>         
                        <Link to='/'><img src="/images/fidibo-logo.png" alt="" className='px-4 w-32'/></Link>
                         <ul className='flex justify-between items-baseline'>
                             <li className='text-2xl p-3 rounded-lg text-gray-500 hover:bg-gray-300 cursor-pointer'><Link><i className='fa fa-gift'></i></Link></li>
                             <li className='text-xl p-3 rounded-lg text-gray-500 hover:bg-gray-300 cursor-pointer'><Link to='/basket'><i className='fa fa-shopping-basket'></i></Link></li>
                             <UserButton/>
                         </ul>
                     </div>
                     <div className='flex items-center space-x-3'>
                         <button onClick={openMenuHandler} className='text-2xl text-gray-500 px-3'><i className='fa fa-navicon'></i></button>
                        <SearchInput/>
                     </div>
                 </div>

             </div>
         </header>
        </>
    );
};

export default SmHeader;