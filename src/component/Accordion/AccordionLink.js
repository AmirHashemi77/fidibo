import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';

const AccordionLink = ({title,path}) => {
    const dispatch=useDispatch()
    return (
        <button onClick={()=>dispatch(uiSliceAction.showMenuHandler())} className='flex items-center justify-between w-full p-3 border-b border-b-gray-300 focus:outline-0'>
        <Link to={path}>{title}</Link>
        </button>
    );
};

export default AccordionLink;