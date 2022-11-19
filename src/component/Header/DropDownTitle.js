import React from 'react';
import { Link } from 'react-router-dom';

const DropDownTitle = ({path,children}) => {
    return (
        <Link to={path} className='text-base font-semibold text-black hover:text-lightBlue'>{children}</Link>
    );
};

export default DropDownTitle;