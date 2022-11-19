import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { basketAction } from '../../store/slice/basketSlice';
import { libraryAction } from '../../store/slice/librarySlice';

const PaymentOption = () => {
    const [paymentType,setPaymentType]=useState('shetab')
    const totalPrice=useSelector((state)=>state.basket.totalPrice)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const basketItems=useSelector((state)=>state.basket.basketItems)
    
    const sendTOLibraryHandler=()=>{
        basketItems.map((item)=>{
        return dispatch(libraryAction.addToMyBooksHandler({
                id:item.id,
                bookName:item.bookName,
                auther:item.auther,
                publisher:item.publisher,
                imgUrl:item.imgUrl,
                price:item.price,
                type:item.type
            }))
        })
       
             dispatch(basketAction.clearBasketHandler())
        navigate('/library')
    }
    return (
        <div className='flex flex-col my-5 p-5'>
            <div className='flex flex-col items-start justify-between mb-4 bg-gray-200 rounded-md p-4 w-full md:flex-row md:items-center'>
                <p className='text-sm text-gray-700 mb-4 md:w-3/4 md:mb-0'>اگر کد تخفیفی دارید در این بخش وارد کنید</p>
                <form className='flex items-center w-full'>
                    <input type="text"  className='p-3 border border-gray-300 rounded-r-lg placeholder:text-base w-full' placeholder='کد تخفیف'/>
                    <button className='bg-lightBlue text-white rounded-l-lg text-xs whitespace-nowrap p-4 border border-transparent '>اعمال کد</button>
                </form>
            </div>
            <div className='flex flex-col border-b-2 border-b-gray-300'>
                <div className='flex items-center my-3'>
                    <input type="checkbox"/>
                    <label className='text-gray-400 text-xs px-2'>استفاده از اعتبار</label>
                </div>
                <p className='text-gray-400 text-xs self-end my-3'>۰ تومان</p>
            </div>

            <div className='w-full py-5 border-b-2 border-b-gray-300'>
                <div className=' flex justify-between items-center w-full mb-7'>
                    <h6 className='text-xl text-gray-800'>جمع کل :</h6>
                    <p>{`${totalPrice} تومان`}</p>
                </div>
                <div className=' flex justify-between items-center w-full'>
                    <h6 className='text-2xl text-gray-800'>قابل پرداخت :</h6>
                    <p>{`${totalPrice} تومان`}</p>
                </div>
            </div>
            <div className='py-4'>
                <h6 className='text-sm text-gray-800 mb-6'>انتخاب روش پرداخت</h6>
                <div className='flex flex-col items-center w-full'>
                    <div onClick={()=>setPaymentType('shetab')} className={`w-full cursor-pointer py-3 px-10 my-1 flex items-center rounded-xl justify-between border-2 ${paymentType==='shetab' ? 'border-blue-500' :'border-gray-300'} `}>
                        <div className='flex items-center'>
                        <input type="radio" name='pay-type' id='shetab' checked={paymentType==='shetab'} readOnly/>
                        <div className='flex flex-col mx-4 space-y-1'>
                            <p className='text-sm text-gray-800'>پرداخت اینترنتی</p>
                            <small className='text-xs text-gray-500'>پرداخت با تمام کارت های عضو شتاب</small>
                        </div>
                        </div>
                        <img src="images/buyOption/shetab.svg" alt="" />

                    </div>
                    <div onClick={()=>setPaymentType('digipay')} className={`w-full cursor-pointer py-3 px-10 my-1 flex items-center rounded-xl justify-between border-2 ${paymentType==='digipay' ? 'border-blue-500' :'border-gray-300'} `}>
                        <div className='flex items-center'>
                        <input type="radio" name='pay-type' id='digipay'  checked={paymentType==='digipay'} readOnly/>
                        <div className='flex flex-col mx-4 space-y-1'>
                            <p className='text-sm text-gray-800'>پرداخت با کیف پول دیجی پی</p>
                            <small className='text-xs text-gray-500'>اعتبار شما : ۰ تومان است</small>
                        </div>
                        </div>
                        <img src="images/buyOption/digipay.svg" alt="" />

                    </div>
                </div>
            </div>
            <button onClick={sendTOLibraryHandler} className='bg-lightBlue py-3 px-8 w-full text-white rounded-lg md:w-fit md:self-end'>پرداخت نهایی</button>
        </div>
    );
};

export default PaymentOption;