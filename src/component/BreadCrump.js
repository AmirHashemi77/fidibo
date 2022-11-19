import React from 'react';
import { Link } from 'react-router-dom';
import { category } from '../lib/category';
const BreadCrump = ({page,pageCategoryId,pageSubCategoryId,bookName}) => {
    const pageCategory=pageCategoryId && category.find((item)=>item.id===pageCategoryId)
    const pageSubCategory=pageSubCategoryId && pageCategory.subset.find((item)=>item.id===pageSubCategoryId)
   
    


   

    return (
       
            <div className='flex justify-center items-center'>
                <div className='flex'>
                    <Link className='mx-1' to='/'>فیدیبو</Link>
                    <span>/</span>
                </div>
                <div className='flex'>
                    {
                    pageSubCategoryId ?  <Link to={`/category/${pageCategoryId}`} className='mx-1'>{pageCategory.title}</Link> : <p className='mx-1'>{pageCategory.title}</p>
                }
                    
                </div>
                {pageSubCategoryId &&  <span>/</span>}

                    {pageSubCategoryId &&
                         <div className='flex'>    
                         {
                            bookName ?  
                            <Link to={`/category/${pageCategoryId}/${pageSubCategoryId}`} className='mx-1'>{pageSubCategory.title}</Link> :
                            <p className='mx-1'>{pageSubCategory.title}</p>  
                         }                  
                                {page!=='bookList' && <span>/</span>}    
                        </div>
                    }
                
                 {bookName && 
                <div className='flex'>
                    <p className='mx-1'>{bookName}</p>
                        
                </div>
                }

            </div>
            
       
    );
};

export default BreadCrump;