import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiSliceAction } from '../../store/slice/uiSlice';

const DownloadSection = () => {
    const buttonsBox=useRef()
    const buttonBoxAndroid=useRef()
    const dipatch=useDispatch()
    const showMoreHandler=()=>{
        if(buttonsBox.current.classList.contains('max-h-0')){
            buttonsBox.current.classList.replace('max-h-0','max-h-screen')

        }else{
            buttonsBox.current.classList.replace('max-h-screen','max-h-0')
        }

    }
    const showMoreAndroidHandler=()=>{
        if(buttonBoxAndroid.current.classList.contains('max-h-0')){
            buttonBoxAndroid.current.classList.replace('max-h-0','max-h-screen')

        }else{
            buttonBoxAndroid.current.classList.replace('max-h-screen','max-h-0')
        }
    }
    return (
        <div className='max-w-4xl mx-auto p-5'>
            <div className='flex flex-col items-center justify-between md:flex-row md:items-start'>
                {/* item 1 */}
                <div className='flex flex-col items-center justify-between text-gray-700 my-5'>
                    <img className='mb-4' src="images/appImages/desktop-img.svg" alt="logo" />
                    <h5 className='my-1'>دانلو نسخه دسکتاپ</h5>
                    <small className='text-xs'>این نسخه مختص کامپیوتر های شخصی و لپ تاپ است</small>
                    <Link>
                        <img className='my-4' src="images/appImages/windows-btn-downloader.svg" alt="download" />
                    </Link>
                    
                    
                    <button onClick={()=>dipatch(uiSliceAction.showHelperHandler('win'))} className='text-blue-800 text-xs mb-5'>راهنمای نصب در ویندوز</button>
                    <Link>
                        <img className='my-1' src="images/appImages/mac-button-downloader.svg" alt="download" />
                    </Link>
                    <Link>
                        <img className='my-1' src="images/appImages/macm1-button-downloader.svg" alt="download" />
                    </Link>
                    <button onClick={()=>dipatch(uiSliceAction.showHelperHandler('mac'))} className='text-blue-800 text-xs my-3'>راهنمای نصب در مک </button>
                </div>
                {/* item 2 */}
                <div className='flex flex-col items-center justify-between text-gray-700 my-5'>
                    <img className='mb-4' src="images/appImages/apple-logo.svg" alt="logo" />
                    <h5 className='my-1'>دانلو نسخه ios</h5>
                    <small className='text-xs text-purple-800'>با امکان جدید فیدی پلاس</small>
                    <Link>
                        <img className='my-4' src="images/appImages/appstore-button-downloader.svg" alt="download" />
                    </Link>
                    <button onClick={showMoreHandler} className='text-gray-500 text-xs py-2 px-10 my-5 border border-gray-300 rounded-2xl'>موارد بیشتر</button>
                    <div ref={buttonsBox} className='flex flex-col justify-between items-center space-y-4 my-4 max-h-0 overflow-hidden  duration-500'>
                        <img src="images/appImages/sibche.svg" alt="download" />
                        <img src="images/appImages/sibapp.svg" alt="download" />
                        <img src="images/appImages/anardoni.svg" alt="download" />
                        <img src="images/appImages/sibirani.svg" alt="download" />
                        <img className='w-52' src="images/appImages/iapps.png" alt="download" />
                    </div>
                </div>
                {/* item 3 */}
                <div className='flex flex-col items-center justify-between text-gray-700 my-5'>
                    <img className='mb-4' src="images/appImages/android-logo.svg" alt="logo" />
                    <h5 className='my-1'>دانلو نسخه اندروید</h5>
                    <small className='text-xs text-purple-800'>با امکان جدید فیدی پلاس</small>
                    <Link>
                        <img className='my-4' src="images/appImages/googleplay-download.svg" alt="download" />
                    </Link>
                    <button onClick={showMoreAndroidHandler} className='text-gray-500 text-xs py-2 px-10 my-5 border border-gray-300 rounded-2xl'>موارد بیشتر</button>
                    <div ref={buttonBoxAndroid} className='flex flex-col justify-between items-center space-y-4 my-4 max-h-0 overflow-hidden  duration-500'>
                        <img src="images/appImages/direct-download.svg" alt="download" />
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default DownloadSection;