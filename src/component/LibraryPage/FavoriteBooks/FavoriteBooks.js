import React from 'react';
import SortLibrary from '../SortLibrary';
import LibraryBookList from '../LibraryBookList';


const FavoriteBooks = () => {
    return (
        <div>
            <SortLibrary tabName='favorite'/>
            <LibraryBookList>
            </LibraryBookList>
        </div>
    );
};

export default FavoriteBooks;