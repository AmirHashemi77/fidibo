import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import AccordionLink from './AccordionLink';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from '../../store/slice/uiSlice';
import { art, businessPodcasts, education, freeBook, history, lifeStyle, literature, management, moviePodcasts, musicPodcasts, narrativePodcasts, philosophy, poetry, popularPodcasts, psychology, psychologyPodcasts, religian, scientific, scientificPodcasts, socialScience, poetryPodcasts, historyPodcast, lifeStyleMagazine, artMagazine, socialMagazine, cinemaMagazine,economyMagazine } from '../../lib/SelectionFilter';
import { v4 as uuid } from 'uuid';



const AccordionMenu = () => {
    const dispatch=useDispatch()
    const showMenu=useSelector((state)=>state.ui.showMenu)
    
    const closeMenuHandler=()=>{
        dispatch(uiSliceAction.showMenuHandler())
        

    }
    return (
        <>

        {showMenu && <div onClick={closeMenuHandler} className='bg-black bg-opacity-20 w-full h-full fixed top-0 right-0 z-20'></div>}
            <div className={`bg-white w-10/12 h-screen fixed top-0 right-0 overflow-auto z-30 ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 focus:outline-0`}>
                <div className='flex justify-between items-center w-full p-3 border-b border-b-gray-300'>
                    <div className='flex items-center'>
                     <i className='fa fa-navicon text-gray-500'></i>
                     <h5 className='mx-1'>دسته بندی</h5>
                    </div>
                    <button onClick={closeMenuHandler} className='text-gray-500 font-bold'><i className='fa fa-close'></i></button>
                </div>
               <div>
               <Accordion title='کتاب الکترونیکی و صوتی' iconClass='fa fa-book'>
                        <div className='bg-gray-100 pr-4 text-xs text-gray-500'>
                            <Accordion menuNum={2} title='داستان و رمان'>
                                <div className='pr-4'>
                                <AccordionLink path='/category/literature' title='همه' />
                                {literature.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/literature/${item.id}`} title={item.title} />
                                ))}
                                </div>
                            </Accordion>
                            <Accordion menuNum={2} title='سبک زندگی'>
                            <div className='pr-4'>
                            <AccordionLink path='/category/lifestyle' title='همه' />
                                {lifeStyle.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/lifestyle/${item.id}`} title={item.title} />
                                ))}
                            </div>
                            </Accordion>
                            <Accordion menuNum={2} title='روانشناسی'>
                                <div className='mr-4'>
                                <AccordionLink path='/category/psychology' title='همه' />
                                {psychology.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/psychology/${item.id}`} title={item.title} />
                                ))}
                                   
                                </div>
                            </Accordion>
                            <Accordion menuNum={2} title='هنر'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/art' title='همه' />
                                {art.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/art/${item.id}`} title={item.title} />
                                ))}
                            </div>       
                            </Accordion>
                            <Accordion menuNum={2} title='مدیریت،بازاریابی و فروش'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/management' title='همه' />
                                {management.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/management/${item.id}`} title={item.title} />
                                ))}
                            </div>        
                            </Accordion>
                            <Accordion menuNum={2} title='تاریخ'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/history' title='همه' />
                                {history.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/history/${item.id}`} title={item.title} />
                                ))}
                            </div>    
                            </Accordion>
                            <Accordion menuNum={2} title='علمی'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/scientific' title='همه' />
                                {scientific.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/scientific/${item.id}`} title={item.title} />
                                ))}
                            </div>        
                            </Accordion>
                            <Accordion menuNum={2} title='علوم اجتماعی'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/social-science' title='همه' />
                                {socialScience.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/social-science/${item.id}`} title={item.title} />
                                ))}
                            </div>       
                            </Accordion>
                            <Accordion menuNum={2} title='شعر'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/poetry' title='همه' />
                                {poetry.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/poetry/${item.id}`} title={item.title} />
                                ))}
                            </div>        
                            </Accordion>
                            <Accordion menuNum={2} title='کتاب های رایگان'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/free-book' title='همه' />
                                {freeBook.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/free-book/${item.id}`} title={item.title} />
                                ))}
                            </div>        
                            </Accordion>
                            <Accordion menuNum={2} title='آموزش'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/education' title='همه' />
                                {education.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/education/${item.id}`} title={item.title} />
                                ))}
                             </div>       
                            </Accordion>
                            <Accordion menuNum={2} title='دین و عرفان'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/religian' title='همه' />
                                {religian.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/religian/${item.id}`} title={item.title} />
                                ))}
                            </div>        
                            </Accordion>
                            <Accordion menuNum={2} title='فلسفه'>
                            <div className='mr-4'>
                            <AccordionLink path='/category/philosophy' title='همه' />
                                {philosophy.subset.map((item)=>(
                                      <AccordionLink key={uuid()} path={`/category/philosophy/${item.id}`} title={item.title} />
                                ))}
                             </div>       
                            </Accordion>
                            
                            <AccordionLink path='/category/chlidren' title='کودک' />
                            <AccordionLink path='/category/adolesceut' title='نوجوان' />
                            <AccordionLink path='/category/economy' title='اقتصاد' />
                            <AccordionLink path='/category/microbook' title='میکروبوک' />
                            <AccordionLink path='/category/woman-and-feminism' title='زنان و فمنیسم' />
                            <AccordionLink path='/category/english-book' title='English Book' />
                            <AccordionLink path='/category/law' title='حقوق' />
                            <AccordionLink path='/category/free-comic-book' title='کمیک رایگان' />
                            
                         
                        </div>
               </Accordion>
               <Accordion title='پادکست' iconClass='fa fa-podcast' >
                    <div className='bg-gray-100 pr-4 text-xs text-gray-500 '>
                    <Accordion menuNum={2} title='پادکست های محبوب'>
                        <div className='pr-4'>
                                <AccordionLink path='/category/podcast-channels' title='همه' />
                              {popularPodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                                
                              
                        </div>
                        
                    </Accordion>   
                    <Accordion menuNum={2} title='پادکست های روایی'>
                        <div className='pr-4'>
                        <AccordionLink path='/category/podcast-channels' title='همه' />
                              {narrativePodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                                
                              
                        </div>
                    </Accordion>   
                    <Accordion menuNum={2} title='پادکست های روانشناسی و توسعه فردی'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {psychologyPodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                        </div>
                    </Accordion>   
                    <Accordion menuNum={2} title='علم تکنولوژی'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {scientificPodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                              
                              
                        </div>    
                    </Accordion>   
                    <Accordion menuNum={2} title='پادکست های مدیریت کسب و کار'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {businessPodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                              
                        </div>
                    </Accordion>   
                    <Accordion menuNum={2} title='پادکست های سینمایی'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {moviePodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                              
                        </div>
                    </Accordion>   
                    
                    <Accordion menuNum={2} title='پادکست های موسیقی'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {musicPodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                              
                        </div>
                    </Accordion>   
                    <Accordion menuNum={2} title='پادکست های شعر و داستان'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {poetryPodcasts.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                              
                        </div>
                    </Accordion>   
                    <Accordion menuNum={2} title='پادکست های تاریخی'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/podcast-channels' title='همه' />
                              {historyPodcast.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/podcast-channels/${item.id}`} title={item.title} />
                              ))}
                              
                        </div>
                    </Accordion>   



                    </div> 
               </Accordion>
              <Accordion title='مجله' iconClass='fa fa-newspaper-o'>
              <div className='bg-gray-100 pr-4 text-xs text-gray-500'>
              <Accordion menuNum={2} title='سبک زندگی'>
                <div className='pr-4'>
                <AccordionLink path='/category/magazines' title='همه' />
                              {lifeStyleMagazine.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/magazines/${item.id}`} title={item.title} />
                              ))}
                   
                </div>
              </Accordion>
              <Accordion menuNum={2} title='فرهنگی هنری'>
                    <div className='pr-4'>
                    <AccordionLink path='/category/magazines' title='همه' />
                              {artMagazine.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/magazines/${item.id}`} title={item.title} />
                              ))}
                                
                    </div>
              </Accordion>
              <Accordion menuNum={2} title='اجتماعی'>
              <div className='pr-4'>
              <AccordionLink path='/category/magazines' title='همه' />
                              {socialMagazine.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/magazines/${item.id}`} title={item.title} />
                              ))}
                                
                              
                </div>
              </Accordion>
              <Accordion menuNum={2} title='مدیریت اقتصاد'>
              <div className='pr-4'>
              <AccordionLink path='/category/magazines' title='همه' />
                              {economyMagazine.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/magazines/${item.id}`} title={item.title} />
                              ))}
                                
                                
                              
                </div>
              </Accordion>
              <Accordion menuNum={2} title='سینمایی'>
              <div className='pr-4'>
              <AccordionLink path='/category/magazines' title='همه' />
                              {cinemaMagazine.map((item)=>(
                                <AccordionLink key={uuid()} path={`/category/magazines/${item.id}`} title={item.title} />
                              ))}
                </div>
              </Accordion>
                         
                        </div>
              </Accordion>





                <li className='flex justify-between items-center w-full p-3 border-b border-b-gray-300'>
                    <Link className='flex items-center text-purple-800'>
                        <i className='fa fa-star mx-1'></i>
                        <p>فیدی پلاس</p>
                    </Link>
                </li>
               </div>

            </div>
        </>
        
    );
};

export default AccordionMenu;






