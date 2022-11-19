import React from 'react';


const InstallMacVersionHelp = () => {
    
    return (
  <div className='flex flex-col items-center'>
      <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>1</div>
                    <p className='text-xs px-2'>از مسیر زیر وارد صفحه <span className='text-red-600'>General</span> می‌شوید</p>
                </div>
                <p className='text-sm'>{'Setting > System Preferences... > Security & Privacy > General'}</p>
      </div>
      <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>2</div>
                    <p className='text-xs px-2'>سپس گزینه <span className='text-red-600'>Allow applications downloaded from</span> را انتخاب کنید</p>
                </div>
      </div>
      <div className='flex flex-col w-5/6 my-5 space-y-2'>
                <p className='text-gray-700 text-lg'>اگر با خطای زیر مواجه شدید:</p>
                <p className='text-lightBlue text-xl'>"Fidibo.app" is damaged and can't be opened</p>
      </div>
      <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>1</div>
                    <p className='text-xs px-2'>وارد <span className='text-red-600'>Terminal</span> شوید</p>
                </div>
      </div>
      <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>2</div>
                    <p className='text-xs px-2'>دستور زیر را در خط فرمان وارد کنید</p>
                </div>
                <p className='p-2 bg-gray-300 text-gray-800 text-center text-sm rounded-lg'>sudo xattr -r -d com.apple.quarantine /Applications/fidibo.app</p>
                <img className='w-96 my-5 self-center' src="images/appImages/macHelper1.webp" alt="help" />
      </div>
      <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>3</div>
                    <p className='text-xs px-2'>در صورت نیاز در مرحله بعد پسورد سیستم خود را وارد کنید و سپس اینتر را بزنید</p>
                </div>
                <img className='w-96 my-5 self-center' src="images/appImages/macHelper2.webp" alt="help" />
      </div>


    </div>
    );
};

export default InstallMacVersionHelp;