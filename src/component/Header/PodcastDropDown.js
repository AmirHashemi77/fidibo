import React from 'react';
import { businessPodcasts, historyPodcast, moviePodcasts, musicPodcasts, narrativePodcasts, poetryPodcasts, popularPodcasts, psychologyPodcasts, scientificPodcasts } from '../../utils/SelectionFilter';
import DropDownItem from './DropDownItem';

const PodcastDropDown = () => {
    return (
        <div className='w-full mx-auto p-5 bg-white shadow-md text-right rounded-lg absolute right-0 top-full border border-gray-300 z-10'>
            <ul className='grid w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست های محبوب</div>
                    <ul>
                    {popularPodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست های روایی</div>
                    <ul>
                    {narrativePodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue w-52'>پادکست های روانشناسی توسعه فردی</div>
                    <ul>
                    {psychologyPodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>علم و تکنولوژی</div>
                    <ul>
                    {scientificPodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست مدیریت کسب و کار</div>
                    <ul>
                    {businessPodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست های تاریخی</div>
                    <ul>
                    {historyPodcast.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست های سینمایی</div>
                    <ul>
                    {moviePodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
               
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست های موسیقی</div>
                    <ul>
                    {musicPodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
               
                <li>
                    <div className='text-base font-semibold text-black hover:text-lightBlue'>پادکست های شعرو داستان</div>
                    <ul>
                    {poetryPodcasts.map((item)=>(
                                <DropDownItem key={item.id} path={`/category/podcast-channels/${item.id}`}>{item.title}</DropDownItem>
                                     
                        ))}
                    </ul>
                </li>
               
               
               
               
               
                
            </ul>
        </div>
    );
};

export default PodcastDropDown;