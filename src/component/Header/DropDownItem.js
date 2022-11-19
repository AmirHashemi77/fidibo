import React from 'react';
import { Link } from 'react-router-dom';

const DropDownItem = ({children,path}) => {
    return (
        <li className='text-xs text-gray-700 px-2 py-1'><Link to={path} className='hover:text-lightBlue'>{children}</Link></li>

    );
};

export default DropDownItem;