import React from 'react';

const SideBarItem = ({children,title}) => {
    return (
        <div className='w-full border border-gray-300 shadow-md my-3'>
            <div className='p-3 text-right text-xs text-gray-500 bg-gray-150 w-full'>

            <h5>{title}</h5>
            </div>
            <div className='flex flex-col items-start bg-white w-full text-xs text-gray-500 p-2'>
                {children}
            </div>
            
        </div>
    );
};

export default SideBarItem;