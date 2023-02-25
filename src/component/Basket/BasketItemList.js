import React from 'react';
import { useSelector } from 'react-redux';
import BasketItem from './BasketItem';

const BasketItemList = () => {
    const basketItems=useSelector((state)=>state.basket.basketItems)


    
    return (
        <div className='flex flex-col items-start'>
            
            {
                basketItems &&
            basketItems.map((item)=>{
            return    <BasketItem key={item.id} id={item.id} bookName={item.bookName} auther={item.auther} price={item.price} imgUrl={item.imgUrl} bookId={item.id}/>
                
            })}
        </div>
    );
};

export default BasketItemList;