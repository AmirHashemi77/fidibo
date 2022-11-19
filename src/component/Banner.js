import React from 'react';

const Banner = ({imgUrl}) => {
    return (
        <div className='p-5'>
        <div className='max-w-6xl mx-auto my-10  shadow-sm'>

            <img src={imgUrl} alt="banner"  className='w-full rounded-lg'/>
        </div>

        </div>
    );
};

export default Banner;