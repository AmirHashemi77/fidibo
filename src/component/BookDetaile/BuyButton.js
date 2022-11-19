import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { basketAction } from '../../store/slice/basketSlice';
import { uiSliceAction } from '../../store/slice/uiSlice';

const BuyButton = ({type,id,price,auther,bookName,imgUrl,publisher}) => {
    const authed=useSelector((state)=>state.auth.authed)
    const MyBooks=useSelector((state)=>state.library.myBooks)  
    const recycleBooks= useSelector((state)=>state.library.recycleBooks)
    const availableMyBook=MyBooks.find((item)=>item.id===id)
    const availableRecycleBook=recycleBooks.find((item)=>item.id===id)
    const hasAvailableInLibrary=availableMyBook || availableRecycleBook ? true :false
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const buyHandler=()=>{
        if(!authed){
            dispatch(uiSliceAction.showLoginHandler())
            
        }else{
            dispatch(basketAction.addBookToBasketHandler({
                id:id,
                bookName:bookName,
                price:price,
                auther:auther,
                imgUrl:imgUrl,
                publisher:publisher,
                type:type
            }))
            
            navigate('/basket')
        }
    }
    return (

        <>
        {
            hasAvailableInLibrary ? 
            <button className='bg-lightBlue text-white p-2 w-full my-2 text-xs rounded-xl'>
                    {type==='audio' ? 'شنیدن آنلاین' : 'مطالعه آنلاین'}
            </button>
            :
           
        <button onClick={buyHandler} className='bg-lightBlue text-white p-2 w-full my-2 text-xs rounded-xl'>
                    {type==='audio' ? 'خرید کتاب صوتی' : 'خرید کتاب الکترونیکی'}
        </button>
        }
        </>
    );
};

export default BuyButton;