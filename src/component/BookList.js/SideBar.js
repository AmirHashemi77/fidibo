import React from 'react';

const SideBar = ({children}) => {
    return (
        <div className='hidden md:flex flex-col items-center justify-start w-1/5 p-5'>
            {children}
        </div>
    );
};

export default SideBar;