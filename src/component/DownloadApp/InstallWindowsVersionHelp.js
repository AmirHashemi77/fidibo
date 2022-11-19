import React from 'react';


const InstallWindowsVersionHelp = () => {
    
    return (
       
        <div className='flex flex-col items-center'>
          <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>1</div>
                    <p className='text-xs px-2'>اگر هنگام نصب با پیام زیر مواجه شدید روی گزینه <span className='text-red-600'>More info</span> کلیک کرده</p>
                </div>
                <img className='w-96 my-5 self-center' src="images/appImages/windowsHelper1.png" alt="help" />
          </div>
          <div className='flex flex-col w-5/6'>
                <div className='flex items-center my-3'>     
                    <div className='bg-lightBlue rounded-full text-white py-1 px-3'>2</div>
                    <p className='text-xs px-2'>سپس گزینه <span className='text-red-600'>Run anyway</span> را کلیک کنید</p>
                </div>
                <img className='w-96 my-5 self-center' src="images/appImages/windowsHelper2.png" alt="help" />
          </div>
        </div>
       
    );
};

export default InstallWindowsVersionHelp;