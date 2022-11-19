import React from 'react';
import BuyButton from './BuyButton';
import { useDispatch } from 'react-redux';
import { libraryAction } from '../../store/slice/librarySlice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const BookInformation = ({bookName, price , auther,imgUrl, publisher,translator,reader,type,id}) => {
    const dipatch=useDispatch()
    const navigate=useNavigate()
    const addToSampleBooks=()=>{
        dipatch(libraryAction.addToSampleBooksHandler({
            id:id,
            imgUrl:imgUrl,
            bookName:bookName,
            auther:auther,
            publisher:publisher,
            price:price
        }))
        navigate('/library/sample')

    }
    return (
        <div className='max-w-5xl mx-auto p-5 '>
            <div className='flex flex-col items-center w-full'>
                <div className='text-center w-full p-5 bg-lightOrange m-4 md:order-2'>
                    <p>

                    <i className='fa fa-gift text-red-600 text-3xl mx-2'></i>
                با کد تخفیف hifidibo این کتاب را در اولین خریدتان با «۵۰٪ تخفیف» بخرید!
                    </p>
                </div>
                <div className='flex flex-col justify-center w-full md:flex-row md:items-center md:justify-between'>
                   <div className='flex flex-col justify-center w-full md:flex-row md:items-center md:justify-between'>
                   <img src={imgUrl} alt="book" className='max-w-2xs mx-auto rounded-lg shadow-md' />
                    <div className='flex flex-col items-center text-center md:items-start md:text-right md:mx-5 '>
                        <h2 className='text-gray-800 text-xl my-4'>{` کتاب ${bookName} | نوشته ${auther} | انتشارات ${publisher}`}</h2>
                        <p className='text-xs text-gray-400 mb-4'> نویسنده: <span className='text-gray-500'>{auther}</span></p>
                        {translator && <p className='text-xs text-gray-400 mb-4'> مترجم: <span className='text-gray-500'>{translator}</span></p>}
                        {reader && <p className='text-xs text-gray-400 mb-4'> گوینده: <span className='text-gray-500'>{reader}</span></p>}
                        <p className='text-black text-xs max-w-sm my-4 leading-6'>
                            {`
                                 نسخه الکترونیک دانلود کتاب ${bookName} | نوشته ${auther} | انتشاراتی ${publisher} به همراه هزاران کتاب دیگر از طریق اپلیکیشن رایگان فیدیبو در دسترس است.

                            `}
                            <Link to='/app' className='text-lightBlue font-bold'>همین حالا دانلود کنید</Link> 
                        </p>
                    </div>
                   </div>
                    <div className='flex flex-col items-center bg-gray-150 border-2 border-gray-200 w-full md:max-w-2xs p-3 rounded-md md:mx-5 '>
                            <h4 className='text-gray-700'>{price ? `${price} تومان` : 'رایگان'}</h4>
                            <BuyButton publisher={publisher} bookName={bookName} price={price} imgUrl={imgUrl} auther={auther} id={id} type={type}/>
                            <Link to='/app' className='bg-transparent text-center text-lightBlue p-2 w-full my-2 text-xs border-2 border-lightBlue rounded-xl'>دانلود رایگان فیدیبو</Link>
                            <button onClick={addToSampleBooks} className='bg-transparent text-lightBlue p-2 w-full my-2 text-xs border-2 border-lightBlue rounded-xl'>شنیدن نسخه نمونه</button>
                            <button className='bg-transparent text-gray-700 p-2 w-full my-2 text-xs rounded-xl'><i className='fa fa-share'></i> اشتراک گذاری </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookInformation;