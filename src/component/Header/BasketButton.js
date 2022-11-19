import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BasketButton = () => {
    const numberOfProduct=useSelector((state)=>state.basket.numberOfProduct)
    const authed=useSelector((state)=>state.auth.authed)
    return (
    <li className='text-xl relative px-1 rounded-lg text-gray-500 hover:text-gray-800 cursor-pointer'>
        <Link  to='/basket'><i className='fa fa-shopping-basket'></i></Link>
        {authed && <div className='absolute bg-red-600 text-white px-1 top-4 right-0  rounded-lg text-xs'>{numberOfProduct}</div>}
    </li>
    );
};

export default BasketButton;