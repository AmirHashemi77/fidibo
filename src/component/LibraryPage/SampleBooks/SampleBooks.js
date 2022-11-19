import React from 'react';
import SortLibrary from '../SortLibrary';
import SampleBooksItem from './SampleBooksItem';
import { useSelector } from 'react-redux';

const SampleBooks = () => {
    const sampleBooksItems=useSelector((state)=>state.library.sampleBooks)
    return (
        <div>
            <SortLibrary tabName='sample'/>
            {
                sampleBooksItems.map((item)=>(

                    <SampleBooksItem key={item.id} auther={item.auther} publisher={item.publisher} bookName={item.bookName} id={item.id} price={item.price} imgUrl={item.imgUrl}/>
                ))
            }
        </div>
    );
};

export default SampleBooks;