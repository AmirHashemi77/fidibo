import React, { useRef, useState } from 'react';

const Accordion = (props) => {
    const {children,iconClass,title ,menuNum}=props
    const accordionContent=useRef()
    const [active,setActive]=useState(false)
    const accordionHandler=()=>{
        if(accordionContent.current.classList.contains('max-h-0')){
            setActive(true)
            accordionContent.current.classList.replace('max-h-0','accardion-height')
        }else if(accordionContent.current.classList.contains('accardion-height')){
            setActive(false)
            accordionContent.current.classList.replace('accardion-height','max-h-0')
           
        }

    }
    

    return (
        <>
        <div className='w-full cursor-pointer '>
                    <div onClick={accordionHandler} className={`flex justify-between items-center w-full p-3 border-b border-b-gray-300 focus:outline-0 ${active && 'text-lightBlue'} ${menuNum===2 && active && 'border-b-lightBlue'} transition-all duration-500`}>
                        <div className='flex items-center'>
                            {iconClass && <i className={`${iconClass} mx-1`}></i>}
                            <p>{title}</p>
                        </div>
                        <i className='fa fa-angle-down'></i>
                        
                    </div>
                    
            <div ref={accordionContent} className='box-border overflow-hidden max-h-0 
            transition-all duration-500'>
                {children}
            </div>
   
        </div>
        
        </>
    );
};

export default Accordion;