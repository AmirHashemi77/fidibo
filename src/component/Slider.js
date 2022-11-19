import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
   const imageSlider =useRef()
   const dots=useRef()
   const [activeItem, setActiveItem]=useState(0)
   


   useEffect(()=>{
   
    const itemSlider= imageSlider.current.children
    const itemSliderArr=[...itemSlider]
    const itemDots=dots.current.children
    const itemDotsArr=[...itemDots]
    
    itemSliderArr.map((item)=>{
    return    item.classList.remove('active')
        
    })
    itemDotsArr.map((item)=>{
     return item.classList.remove('active')
     
    })
    
    itemSliderArr[activeItem].classList.add('active')
    itemDotsArr[activeItem].classList.add('active')
    
   },[activeItem])

   if(activeItem>3){
    setActiveItem(0)
}
if(activeItem<0){
    setActiveItem(3)
}


const nextItemHandler=()=>{
    setActiveItem((prev)=>prev+1)
}
const prevItemHandler=()=>{
    setActiveItem((prev)=>prev-1)
}
  
   const changeItemWithDots=(e)=>{
        setActiveItem(+e.target.dataset.target)
      
   }
   useEffect(()=>{
       setInterval(()=>{
            setActiveItem((prev)=>prev+1)
       },10000)

   },[])


  

    return (
        <div className='px-5'>
        <div className='max-w-6xl mx-auto my-7 overflow-hidden relative shadow-lg rounded-xl'>
                <div className='image-slider' ref={imageSlider}>
                <div className='hidden'><Link><img src="images/sliderImage/nd-download-apps-lg.jpeg" alt="slider"/></Link></div>
                <div className='hidden'><Link><img src="images/sliderImage/nd-literature-lg.jpeg" alt="slider"/></Link></div>
                <div className='hidden'><Link><img src="images/sliderImage/nd-fidiplus-lg.jpeg" alt="slider"/></Link></div>
                <div className='hidden'><Link><img src="images/sliderImage/nd-self-improvement-lg.jpeg" alt="slider"/></Link></div>
                </div>
            
            <ul className='dots flex justify-center absolute bottom-5 cursor-default w-full' ref={dots}>
                <li data-target='0' onClick={changeItemWithDots} className='p-1 rounded-full bg-gray-300 mx-1 cursor-pointer'></li>
                <li data-target='1' onClick={changeItemWithDots} className='p-1 rounded-full bg-gray-300 mx-1 cursor-pointer'></li>
                <li data-target='2' onClick={changeItemWithDots} className='p-1 rounded-full bg-gray-300 mx-1 cursor-pointer'></li>
                <li data-target='3' onClick={changeItemWithDots} className='p-1 rounded-full bg-gray-300 mx-1 cursor-pointer'></li>
               
            </ul>

            <button onClick={nextItemHandler} className='hidden bg-gray-600 bg-opacity-30 rounded-full text-white text-2xl font-bold px-4 py-2  absolute top-1/2 left-5 -mt-5 duration-200 hover:bg-opacity-60 md:block'>
                <i className='fa fa-chevron-left mr-1'></i>
            </button>
            <button onClick={prevItemHandler} className='hidden bg-gray-600 bg-opacity-30 rounded-full text-white text-2xl font-bold px-4 py-2 absolute top-1/2 right-5 -mt-5 duration-200 hover:bg-opacity-60 md:block'>
                <i className='fa fa-chevron-right ml-1'></i>
            </button>

        </div>
        </div>
        
    );
};

export default Slider;