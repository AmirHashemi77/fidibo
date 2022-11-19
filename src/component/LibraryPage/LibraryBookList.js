import React from 'react';

const LibraryBookList = ({children}) => {
    return (
        <div className='flex flex-col items-start my-5 '>
            {children}
        </div>
    );
};

export default LibraryBookList;