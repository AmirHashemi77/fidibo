import React, { useEffect, useState } from 'react';
import BookListContainer from '../component/BookList.js/BookListContainer';
import BookListTitle from '../component/BookList.js/BookListTitle';
import BreadCrumpContainer from '../component/BookList.js/BreadCrumpContainer';
import ButtonsContainer from '../component/BookList.js/ButtonsContainer';
import PageDescription from '../component/BookList.js/PageDescription';
import SideBar from '../component/BookList.js/SideBar';
import SideBarItem from '../component/BookList.js/SideBarItem';
import CarouselItem from '../component/Carousel/CarouselItem';
import Footer from '../container/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { category } from '../lib/category';
import { v4 as uuid } from 'uuid';
import SidebarCheckbox from '../component/BookList.js/SidebarCheckbox';
import Header from '../container/Header';
import { useSelector } from 'react-redux';
import BreadCrump from '../component/BreadCrump';
import AdvanceSearchContainer from '../component/BookList.js/AdvanceSearchContainer';
import SortingContainer from '../component/BookList.js/SortingContainer';

const BookList = () => {
    const params=useParams()
    const navigate=useNavigate()
    const [categoryPage,setCategoryPage]=useState('')
    const [categoryNameObj,setCatgegoryNameObj]=useState('')
    const [filteredBooks,setFilteredBooks]=useState([])
    const allBooks=useSelector((state)=>state.books.allBooks)
    const showAdvanceSearch=useSelector((state)=>state.ui.showAdvanceSearch)
    const showSorting=useSelector((state)=>state.ui.showSorting)
   useEffect(()=>{
    if(categoryPage){
        document.title=categoryPage.title
    }
    const categoryName=category.find((item)=>item.id===params.categoryname)
    setCatgegoryNameObj(categoryName)
        if(params.subsetcategory){
            const subsetCategory=categoryName.subset.find((item)=>item.id ===params.subsetcategory)
            setCategoryPage(subsetCategory)
            setFilteredBooks(allBooks.filter((item)=>item.subCategory===params.subsetcategory))
        }else{
            setCategoryPage(categoryName)
            setFilteredBooks(allBooks.filter((item)=>item.category===params.categoryname))
        }
        if (categoryPage===undefined) {
            navigate('/notfound')
        }
   },[params.subsetcategory,params.categoryname,allBooks,categoryPage,navigate])

  
   
    
    
    const publisher=[]
    filteredBooks.map((item)=>publisher.push(item.publisher))
    const publisherUnicArr=[...new Set(publisher)]
    return (
        <>
            {
            categoryPage &&
            <>
                    <Header />
                    <div className='w-full'>
                        <ButtonsContainer/>
                        {showAdvanceSearch && <AdvanceSearchContainer categoryNameObj={categoryNameObj} categoryPage={categoryPage}  publishers={publisherUnicArr}/>}
                        {showSorting && <SortingContainer/>}
                        <BreadCrumpContainer>
                        <BreadCrump page='bookList' pageCategoryId={params.categoryname} pageSubCategoryId={params.subsetcategory}/>
                        </BreadCrumpContainer>
                        <div className='flex flex-row items-start w-full p-5'>
                            <SideBar>
                                <SideBarItem title='دسته بندی نتایج'>
                                    <Link  to={`/category/${categoryNameObj.id}`} className='my-2' >{categoryNameObj.title}</Link>
                                {categoryPage.subset ? 
                                    categoryPage.subset.map((item)=>(
                                        <Link  key={uuid()} to={`/category/${categoryNameObj.id}/${item.id}`} className='my-2 px-2' >{item.title}</Link>
            
                                    )) :
                                    <p className='my-2 px-2' >{categoryPage.title}</p>
                                
                                }
                            </SideBarItem> 
            
                            
                                <SideBarItem title='جستجو در نتایج'>
                                    <input type="text"  className='p-2 w-full border border-gray-300 rounded-md placeholder:text-xs placeholder:text-gray-300 focus:outline-0' placeholder='کتاب یا نویسنده'/>
                                </SideBarItem>
                                <SideBarItem title='نوع'>
                                    <SidebarCheckbox title='کتاب صوتی' id='voice'/>
                                    <SidebarCheckbox title='کتاب الکترونیکی' id='elbook'/>
                                </SideBarItem>
                                <SideBarItem title='ناشر'>
                                    {publisherUnicArr.map((item)=>{
                                
                                    return    <SidebarCheckbox key={item} title={item}/>
            
                                    })}
                                
                                </SideBarItem>
                            </SideBar>
                            <div className='w-full flex-1 mx-3'>
                            <BookListTitle title={categoryPage.title}/>
            
                            <PageDescription title={categoryPage.title}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی 
                                    نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                                    متون بلکه روزنامه و مجله 
                                    در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، 
                                    و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، 
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصا
                                    ن را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                                    ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در 
                                    این صورت می توان امید داشت 
                                    که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                                    مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                                    و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
                                    مورد استفاده قرار گیرد.لورم
                                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                    از طراحان گرافیک است، چاپگرها و متون بلکه
                                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی 
                                    مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان 
                                    جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی 
                                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی 
                                    ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان 
                                    رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                                    روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                                    و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و 
                                    آینده، شناخت فراوان جامعه و 
                                    متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری 
                                    موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد 
                                    استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                                    و مجله در ستون و سطرآنچنان که لازم است، 
                                    و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                                    و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو 
                                    در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                    ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                                    را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو
                            </PageDescription>
                                    {filteredBooks.length>0 ?
                                            
                            <BookListContainer>
                            { filteredBooks.map((item)=>{
                                                    
                                return   <CarouselItem key={item.id} id={item.id} title={item.bookName} imgUrl={`/images/bookImages/books/${item.imgUrl}`} auther={item.auther}/>
                                                })}
                            </BookListContainer>
                                                :
                                            <p className='mx-auto text-center m-8 p-5'>آیتمی برای نمایش وجود ندارد</p>
            
            
                                    }
                        
                            </div>
                            
                        </div>
                    </div>
                    <Footer/>
                    
            </> 
            
        }
        </>
        
       
    );
};

export default BookList;