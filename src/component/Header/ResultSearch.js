import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ResultSearch = () => {
    const result=useSelector((state)=>state.books.searchList)


    

    return (
        <>

            {result.length>0 && 
                <div className='absolute top-full  w-full z-10 bg-white p-5 shadow-md border border-gray-300 rounded-md'>
                    <div className='flex flex-col items-start justify-between gap-3'>
                            {result.map((item)=>(
                                <div key={item.id} className='p-2 w-full text-xs text-gray-500 border-b border-b-gray-300'>
                                        <Link  to={`/book/${item.id}`}>{item.bookName}</Link>
                                </div>
                            ))}
                    </div>
                
                </div>
            }

        </>
    );
};

export default ResultSearch;