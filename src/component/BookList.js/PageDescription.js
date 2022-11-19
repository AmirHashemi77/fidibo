import React, { useRef, useState } from 'react';

const PageDescription = ({title,children}) => {
    const [more,setMore]=useState(false)
    const textContainer=useRef()
    const moreHandler=()=>{
        setMore((prev)=>!prev)
        if( textContainer.current.classList.contains('max-h-72')){
            textContainer.current.classList.replace('max-h-72','max-h-full')
        }
         else if( textContainer.current.classList.contains('max-h-full')){
            textContainer.current.classList.replace('max-h-full','max-h-72')
        }

    }
    return (
        <div className='w-full p-5'>
            <div ref={textContainer} className='relative w-full bg-gray-150 py-3 px-7 text-right rounded-sm max-h-72 overflow-hidden'>
                <h5 className='text-base mb-5 text-gray-400'>{title}</h5>
                <p className='text-xs text-gray-400 mb-6 leading-6'>{children}</p>
                <button onClick={moreHandler} className='text-sm absolute bottom-4 right-1/2 translate-x-full '>
                    {more ? 'بستن' : 'ادامه...'}
                </button>
            </div>
        </div>
    );
};

export default PageDescription;