import React from 'react';

const BreadCrumpContainer = ({children}) => {
    return (
        <div className='flex justify-start text-right text-xs text-gray-600 border-b border-b-gray-200 p-3'>
            {children}
        </div>
    );
};

export default BreadCrumpContainer;