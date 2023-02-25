import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { searchAction } from '../../store/action/searchAction';
import { booksSliceAction } from '../../store/slice/booksSlice';
import ResultSearch from './ResultSearch';

const SearchInput = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const searchInp=useRef()
    const searchHandler=(e)=>{
        if(e.target.value && e.target.value.length>3){
            dispatch(searchAction(e.target.value))
        }
    }

    useEffect(()=>{
        searchInp.current.value=""
        dispatch(booksSliceAction.setSearchList([]))

    },[location.pathname,dispatch])

    return (
        <div className='relative flex flex-1'>
            <input ref={searchInp} onChange={searchHandler} type="text" placeholder='جستجو کتاب الکترونیکی و صوتی،پادکست و نویسنده ...' className='bg-gray-100 p-3 rounded-r-lg w-full md:w-8/12 placeholder:text-sm focus:outline-none'/>
            <button className='bg-gray-100 text-gray-700 px-2 py-1 rounded-l-lg'><i className='fa fa-search'></i></button>
            <ResultSearch/>
    </div>
    );
};

export default SearchInput;