import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../Accordion/Accordion';
import SidebarCheckbox from './SidebarCheckbox';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';

const AdvanceSearchContainer = ({publishers,categoryNameObj,categoryPage}) => {
    const dispatch=useDispatch()
    return (
        <>
        <div className='bg-black bg-opacity-30 w-full h-full fixed top-0 right-0 z-40'></div>
        <div className='flex items-center justify-center fixed w-full h-full top-0 right-0 z-50'>
        <div className='bg-white py-5 relative shadow-xl rounded-lg w-7/12'>
            <div className='pb-3 px-3 text-sm text-right border-b'>فیلتر</div>
            <button onClick={()=> dispatch(uiSliceAction.showAdvanceSearchHandler())} className='absolute top-5 left-5 text-sm text-gray-300 hover:text-gray-700 duration-300'><i className='fa fa-close'></i></button>
                <div className='flex flex-col items-center max-h-96 overflow-auto text-xs'>
                    <Accordion title='دسته بندی'>
                        <div onClick={()=> dispatch(uiSliceAction.showAdvanceSearchHandler())} className='flex flex-col items-start justify-between px-5'>
                            <Link  to={`/category/${categoryNameObj.id}`} className='my-2' >{categoryNameObj.title}</Link>
                                        {categoryPage.subset ? 
                                            categoryPage.subset.map((item)=>(
                                                <Link  key={uuid()} to={`/category/${categoryNameObj.id}/${item.id}`} className='my-2 px-2' >{item.title}</Link>
                    
                                            )) :
                                            <p className='my-2 px-2' >{categoryPage.title}</p>
                                        
                                        }

                        </div>
                    </Accordion>
                    <Accordion title='جستجو در نتایج'>
                    
                    <input type="text"  className='p-2 w-11/12 mx-3 mt-3 border border-gray-300 rounded-md placeholder:text-xs placeholder:text-gray-300 focus:outline-0' placeholder='کتاب یا نویسنده'/>
                    </Accordion>
                    <Accordion title='نوع'>
                        <div className='px-5'>
                                    <SidebarCheckbox title='کتاب صوتی' id='voice'/>
                                    <SidebarCheckbox title='کتاب الکترونیکی' id='elbook'/>

                        </div>
                    </Accordion>
                    <Accordion title='ناشر'>
                    <div className='px-5'>
                    {publishers.map((item)=>{
                                
                                return    <SidebarCheckbox key={item} title={item}/>
        
                                })}
                                </div>
                    </Accordion>
                    <Accordion title='نویسنده ، مترجم و گوینده'></Accordion>
                </div>
                <div className='flex justify-center w-full pt-3'>
                    <button onClick={()=> dispatch(uiSliceAction.showAdvanceSearchHandler())} className='w-11/12 bg-lightBlue text-white p-2 rounded-md'>مشاهده نتایج</button>
                </div>
        </div>

        </div>
    </>
    );
};

export default AdvanceSearchContainer;