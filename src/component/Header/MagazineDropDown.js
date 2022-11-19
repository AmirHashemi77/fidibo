import React from 'react';
import DropDownItem from './DropDownItem';
import { artMagazine, lifeStyleMagazine, socialMagazine, economyMagazine, cinemaMagazine } from '../../utils/SelectionFilter';

const MagazineDropDown = () => {
    return (
        <div className='w-full mx-auto p-5 bg-white shadow-md text-right rounded-lg absolute right-0 top-full border border-gray-300 z-10'>
            <ul className='grid w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>سبک زندگی</div>
                    <ul>
                    {lifeStyleMagazine.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/magazines/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>فرهنگی هنری</div>
                    <ul>
                    {artMagazine.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/magazines/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>اجتماعی</div>
                    <ul>
                    {socialMagazine.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/magazines/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>مدیرت اقتصاد</div>
                    <ul>
                    {economyMagazine.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/magazines/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>سینمایی</div>
                    <ul>
                    {cinemaMagazine.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/magazines/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                
               
               
               
               
               
                
            </ul>
        </div>
    );
};

export default MagazineDropDown;