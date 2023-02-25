import React, { useEffect } from 'react';
import BookDescription from '../component/BookDetaile/BookDescription';
import BookInformation from '../component/BookDetaile/BookInformation';
import BookReview from '../component/BookDetaile/BookReview';
import BreadCrump from '../component/BreadCrump';
import SimilarBook from '../component/BookDetaile/SimilarBook';
import Commmens from '../component/BookDetaile/Comments';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentBook } from '../store/action/currentBookAction';


const BookDetaile = () => {
    
    const parmas=useParams()
    const currentBook=useSelector(state=>state.books.currentBook)
    const dispatch=useDispatch()
   

    
    useEffect(()=>{
        dispatch(fetchCurrentBook(parmas.bookdetaile))
    },[parmas.bookdetaile,dispatch])
   
    return (
        <>
         <Header />
                        {currentBook.id ? 
                            
                                <div>
                                        <div className='w-full text-center text-sm bg-gray-200 text-gray-600 p-5'>
                                                        <BreadCrump page='book-detail' bookName={currentBook.bookName} bookId={currentBook.id} pageCategoryId={currentBook.category} pageSubCategoryId={currentBook.subCategory} />
                                        </div>
                                        <BookInformation id={currentBook.id} bookName={currentBook.bookName} translator={currentBook.translator} auther={currentBook.auther} publisher={currentBook.publisher} imgUrl={`/images/bookImages/books/${currentBook.imgUrl}`} price={currentBook.price} type={currentBook.type}/>
                                        <BookReview bookName={currentBook.bookName}/>
                                        <BookDescription bookName={currentBook.bookName} publisher={currentBook.publisher} date='۱۳۷۸' fileSize='۲۵ مگابایت' language='فارسی' pages={currentBook.pages} price={currentBook.printedVersionPrice} isbn='۲۳۵۲۵۲۲۵۲۶۲۰۴۵۴۰'/>
                                        <SimilarBook publisher='ققنوس'/>
                                        <Commmens comments={currentBook.comments} bookName='چگونه کمالگرا نباشیم'/>
                                </div> :  <div className='w-full h-full p-10 text-center text-lightBlue'>کتاب مورد نظر یافت نشد.</div>
                            
                        }
        <Footer/>
         
        </>
    );
};

export default BookDetaile;