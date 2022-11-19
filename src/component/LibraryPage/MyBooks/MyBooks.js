import React from 'react';
import { useSelector } from 'react-redux';
import LibraryBookList from '../LibraryBookList';
import SortLibrary from '../SortLibrary';
import MyBooksItem from './MyBooksItem';

const MyBooks = () => {
    const myBooksItems=useSelector((state)=>state.library.myBooks)
   
    return (
        <div>
            <SortLibrary />
            <LibraryBookList>
                {
                    myBooksItems.map((item)=>(
                        
                        <MyBooksItem key={item.id} auther={item.auther} publisher={item.publisher} bookName={item.bookName} id={item.id} type={item.type} imgUrl={item.imgUrl} />
                    ))
                }
              

            </LibraryBookList>
        </div>
    );
};

export default MyBooks;