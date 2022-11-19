import React from 'react';

const BookListTitle = ({title}) => {
    return (
        <h3 className='text-2xl  w-full text-right text-gray-600 py-2 border-b border-b-gray-200 border-dashed'>
            {title}
        </h3>
    );
};

export default BookListTitle;