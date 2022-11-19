import React, { useEffect, useRef, useState } from 'react';
import {  useNavigate  } from 'react-router-dom';

const SortLibrary = ({tabName}) => {
    const[sortButtonArr,setSortButtonArr]=useState()
    const sortButtons=useRef()
    const navigate=useNavigate()
    useEffect(()=>{
        setSortButtonArr(Array.from(sortButtons.current.children)) 
    },[])
    const changeSortHandler=(e)=>{
        sortButtonArr.map((item)=>{
         return   item.classList.remove('activeSort')
        })
        e.target.classList.add('activeSort')
        switch (e.target.dataset.target) {
            case 'tab1':
                navigate('?sort=date')
                break;
            case 'tab2':
                navigate('?sort=title')
                break;
            case 'tab3':
                navigate('?sort=title1')
                break;
        
          
        }
        
    }
    return (
        <div className='flex flex-col item-start md:flex-row md:items-center md:justify-between md:max-w-sm'>
            <p className='text-lightBlue text-xs'>ترتیب نمایش :</p>
            <div ref={sortButtons} className='flex items-center'>
               <button data-target='tab1' onClick={changeSortHandler} className='text-xs text-gray-800 p-2 mx-1 rounded-lg activeSort'>تاریخ خرید</button>
               <button data-target='tab2' onClick={changeSortHandler} className='text-xs text-gray-800 p-2 mx-1 rounded-lg'>عنوان</button>
               <button data-target='tab3' onClick={changeSortHandler} className='text-xs text-gray-800 p-2 mx-1 rounded-lg'>عنوان نزولی</button>
            </div>
            
        </div>
    );
};

export default SortLibrary;