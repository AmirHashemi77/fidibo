import React from 'react';
import SortLibrary from '../SortLibrary';
import LibraryBookList from '../LibraryBookList';
import RecycleBooksItem from './RecycleBooksItem';
import { useSelector } from 'react-redux';


const RecycleBooks = () => {
    const recycleBookItems=useSelector((state)=>state.library.recycleBooks)
    return (
        <div>
            <SortLibrary tabName='recycle'/>
            <LibraryBookList>
                {recycleBookItems.map((item)=>(
                    <RecycleBooksItem key={item.id} auther={item.auther} publisher={item.publisher} bookName={item.bookName} id={item.id} imgUrl={item.imgUrl} />
                    
                ))}
            </LibraryBookList>
        </div>
    );
};

export default RecycleBooks;