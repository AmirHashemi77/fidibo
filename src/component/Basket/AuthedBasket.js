import React from 'react';
import BasketItemList from './BasketItemList';
import PaymentOption from './PaymentOption';

const AuthedBasket = () => {
    return (
        <div className='max-w-3xl mx-auto py-5'>
            <BasketItemList/>
            <PaymentOption/>
        </div>
    );
};

export default AuthedBasket;