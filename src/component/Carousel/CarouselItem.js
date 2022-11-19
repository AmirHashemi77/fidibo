import React from 'react';
import { Link } from 'react-router-dom';




const CarouselItem = ({title,imgUrl,auther,id}) => {
    return (
       
        

    <div className='group flex flex-col h-full w-fit text-right'>
            <Link to={`/book/${id}`} className='flex items-end h-4/5 '>
                <img src={imgUrl} alt="book" className='my-4 rounded-md  shadow-sm group-hover:shadow-lg transition-all duration-300'/>
            </Link>
            <div className='flex flex-col items-start justify-between h-1/5'>
                <Link to={`/book/${id}`}>
                        <p className='text-sm max-w-2xs h-10 overflow-hidden group-hover:text-lightBlue transition-all duration-300'>{title}</p>
                </Link> 
                <small className='text-gray-500 my-2 justify-items-end'>{auther}</small>
            </div>
        
    </div>
        
        
    );
};

export default CarouselItem;