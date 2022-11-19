import React from 'react';
import { art, lifeStyle, literature,history, psychology, socialScience, management, scientific, poetry, freeBook, education, religian, philosophy } from '../../lib/SelectionFilter';
import DropDownItem from './DropDownItem';
import DropDownTitle from './DropDownTitle';

const BookDropDown = () => {
    
    return (
        <div className='w-full mx-auto p-5 bg-white shadow-md text-right rounded-lg absolute right-0 top-full border border-gray-300 z-10'>
            <ul className='grid w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <li>
                    <DropDownTitle path='/category/literature'>داستان و رمان</DropDownTitle>
                    <ul>
                       {literature.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/literature/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
               
                <li>
                    <DropDownTitle path='/category/lifestyle'>سبک زندگی</DropDownTitle>
                    <ul>
                    {lifeStyle.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/lifestyle/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/psychology'>روانشناسی</DropDownTitle>
                    <ul>
                    {psychology.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/psychology/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/art'>هنر</DropDownTitle>
                    <ul>
                    {art.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/art/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/management'>مدیریت بازاریابی و فروش</DropDownTitle>
                    <ul>
                    {management.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/management/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/history'>تاریخ</DropDownTitle>
                    <ul>
                    {history.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/history/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/scientific'>علمی</DropDownTitle>
                    <ul>
                    {scientific.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/scientific/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/social-science'>علوم اجتماعی</DropDownTitle>
                    <ul>
                    {socialScience.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/social-science/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/poetry'>شعر</DropDownTitle>
                    <ul>
                    {poetry.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/poetry/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/free-book'>کتاب های رایگان</DropDownTitle>
                    <ul>
                    {freeBook.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/free-book/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/education'>آموزش</DropDownTitle>
                    <ul>
                    {education.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/education/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/religian'>دین و عرفان</DropDownTitle>
                    <ul>
                    {religian.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/religian/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/philosophy'>فلسفه</DropDownTitle>
                    <ul>
                    {philosophy.subset.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/philosophy/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <DropDownTitle path='/category/children'>کودک</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/adolesceut'>نوجوان</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/economy'>اقتصاد</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/microbook'>میکروبوک</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/woman-and-feminism'>زنان و فمنیسم</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/english-book'>English Books</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/law'>حقوق</DropDownTitle>
                    <ul></ul>
                </li>
                <li>
                    <DropDownTitle path='/category/free-comic-book'>کمیک های رایگان</DropDownTitle>
                    <ul></ul>
                </li>
                
            </ul>
        </div>
    );
};

export default BookDropDown;