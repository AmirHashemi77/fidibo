import React, { useEffect, useState } from 'react';
import BookDescription from '../component/BookDetaile/BookDescription';
import BookInformation from '../component/BookDetaile/BookInformation';
import BookReview from '../component/BookDetaile/BookReview';
import BreadCrump from '../component/BreadCrump';
import SimilarBook from '../component/BookDetaile/SimilarBook';
import Commmens from '../component/BookDetaile/Comments';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const BookDetaile = () => {
    const [currentBook,setCurrentBook]=useState('')
    const parmas=useParams()
    const allBooks=useSelector(state=>state.books.allBooks)
    const navigate=useNavigate()
   

    
    useEffect(()=>{
        if(allBooks.length>0){
            setCurrentBook(allBooks.find((item)=>item.id===parmas.bookdetaile))

        }
        if(currentBook===undefined){
            navigate('/notfound')
        }
        
        if(currentBook){
            document.title=currentBook.bookName
        }

    },[allBooks,currentBook,navigate,parmas.bookdetaile])
   
    return (
        <>
        {currentBook && 
                <>
                           <Header />
                        <div>
                                <div className='w-full text-center text-sm bg-gray-200 text-gray-600 p-5'>
                                        <BreadCrump page='book-detail' bookName={currentBook.bookName} bookId={currentBook.id} pageCategoryId={currentBook.category} pageSubCategoryId={currentBook.subCategory} />
                                </div>
                                <BookInformation id={currentBook.id} bookName={currentBook.bookName} translator={currentBook.translator} auther={currentBook.auther} publisher={currentBook.publisher} imgUrl={`/images/bookImages/books/${currentBook.imgUrl}`} price={currentBook.price} type={currentBook.type}/>
                                <BookReview bookName={currentBook.bookName}/>
                                <BookDescription bookName={currentBook.bookName} publisher={currentBook.publisher} date='۱۳۷۸' fileSize='۲۵ مگابایت' language='فارسی' pages={currentBook.pages} price={currentBook.printedVersionPrice} isbn='۲۳۵۲۵۲۲۵۲۶۲۰۴۵۴۰'/>
                                <SimilarBook publisher='ققنوس'/>
                                <Commmens comments={currentBook.comments} bookName='چگونه کمالگرا نباشیم'/>
                                <Footer/>
                        </div>
                </>
        }
         
        </>
    );
};

export default BookDetaile;