import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <footer className='w-full bg-gray-150'>
            <div className='max-w-6xl mx-auto p-5'>
                <div className='flex flex-col md:flex-row'>
                    <div className='grid grid-cols-1 place-items-start text-right w-full md:grid-cols-3 md:gap-x-8 md:w-fit md:ml-5'>
                        <div>
                            <h5 className='my-5 text-gray-700'>فیدیبو</h5>
                            <ul className='grid grid-cols-2 gap-x-28 md:grid-cols-1 md:gap-x-0'>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>درباره ما</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>تماس با ما</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>وبلاگ</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>راهنما</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>شرایط استفاده</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>ورود ناشران</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>همکاری با ما</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>رصد</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>RSS کتاب ها</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>حریم خصوصی</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='my-5 text-gray-700'>کتاب های پیشنهادی</h5>
                            <ul className='grid grid-cols-1'>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>بهترین سال زندگی تو</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب تخت خوابت را مرتب کن</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>مردی به نام اوه</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>چهار اثر از فلورانس</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>اثر مرکب</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>ملت عشق</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب شدن</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>نمیه تاریک وجود</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب صبح جادویی</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب صوتی کیمیاگر</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب شب های روشن</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>صد سال تنهایی</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>بیشعوری</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='my-5 text-gray-700'>دسته بندی پیشنهادی</h5>
                            <ul className='grid grid-cols-1'>
                              
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های دانشگاهی</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های نوجوان</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>زندگی نامه،سفرنامه و خاطرات</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های کودک</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های آموزشی</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های رایگان</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های تاریخ</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های سبک زندگی</Link></li>
                                <li className='text-xs text-gray-500 my-2 hover:text-lightBlue'><Link>کتاب های تبلیغات و بازاریابی</Link></li>
                                
                                
                            </ul>
                        </div>

                    </div>
                    <div className='flex flex-col items-start w-full md:w-fit md:mr-5'>
                        <div className='flex flex-col w-full'>
                            <h4 className='my-5 text-gray-700'>اپلیکیشن فیدیبو</h4>
                            <div className='flex flex-col items-center md:flex-row'>
                                <div className='flex items-center'>
                                    <Link><img src="/images/footerIcon/icon-apple.svg" alt="icon" className='w-10 h-10 mx-4' /></Link> 
                                    <Link><img src="/images/footerIcon/icon-android.svg" alt="icon" className='w-10 h-10 mx-4' /></Link> 
                                    <Link><img src="/images/footerIcon/icon-desktop.svg" alt="icon" className='w-10 h-10 mx-4' /></Link> 
                                </div>
                                <Link to='/app' className='w-full text-white bg-lightBlue text-center p-3 rounded-md text-sm my-4 md:flex-1'>نصب اپلیکیشن فیدیبو</Link>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                        <h4 className='my-5 text-gray-700'>درخواست کتاب</h4>
                        <p className='text-xs text-gray-400'>کتاب مورد نظرتان را درخواست کنید تا در صورت امکان آن را به فروشگاه اضافه کنیم.</p>
                        <form className='flex items-center my-4'>
                            
                            <input type="text"  className='p-3 rounded-lg mx-3 flex-1 placeholder:text-sm' placeholder='نام کتاب'/>
                            <button className='py-3 px-5 text-sm text-white bg-lightBlue rounded-lg'>ارسال</button>

                            
                        </form>
                        </div>
                        <div className='flex flex-col w-full'>
                            <h4 className='my-5 text-gray-700'>پشتیبانی</h4>
                            <div className='flex justify-between items-center'>
                                <p className='text-xs text-gray-400'>هفت روز هفته، ساعت ۹ الی ۱۷</p>
                                <p className='text-xl text-gray-800'>۰۲۱-۹۱۰۲۰۰۱۰</p>
                            </div>
                            <ul className='flex items-center my-4 place-content-end'>
                                <li className='text-gray-500 border-2 border-gray-500 rounded-full w-12 h-12 flex justify-center items-center text-2xl mx-2 transition-colors duration-700 hover:text-lightBlue hover:border-lightBlue'><Link><i className='fa fa-telegram'></i></Link></li>
                                <li className='text-gray-500 border-2 border-gray-500 rounded-full w-12 h-12 flex justify-center items-center text-2xl mx-2 transition-colors duration-700 hover:text-blue-900 hover:border-blue-900'><Link><i className='fa fa-facebook'></i></Link></li>
                                <li className='text-gray-500 border-2 border-gray-500 rounded-full w-12 h-12 flex justify-center items-center text-2xl mx-2 transition-colors duration-700 hover:text-pink-700 hover:border-pink-700'><Link><i className='fa fa-instagram'></i></Link></li>
                                <li className='text-gray-500 border-2 border-gray-500 rounded-full w-12 h-12 flex justify-center items-center text-2xl mx-2 transition-colors duration-700 hover:text-lightBlue hover:border-lightBlue'><Link><i className='fa fa-twitter'></i></Link></li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;
