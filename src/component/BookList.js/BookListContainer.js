import React from 'react';

const BookListContainer = ({children}) => {
    return (
        <div className='grid gap-y-7 gap-x-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 my-10'>
          {children}
        </div>
    );
};

export default BookListContainer;