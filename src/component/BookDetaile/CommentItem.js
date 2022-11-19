import React from 'react';

const CommentItem = ({commentMessage,commentDate,commentAuther,likeNum,disLikeNum ,hasBuyer}) => {
    return (
        <div className='w-full p-4 border-b border-dashed border-b-gray-300 text-xs'>
            <div className='flex flex-col '>
                <p className='text-xs text-gray-500 text-right'>{commentMessage}</p>
                <div className='flex items-center self-end text-2xs text-gray-400'>
                    <p>
                        {`در ${commentDate} توسط ${commentAuther}`}
                    </p>
                    {hasBuyer && <div className='bg-green-600 text-white mx-2 px-1 rounded-sm'><i className='fa fa-check'></i> خریدار این کتاب</div>}
                    <div className='flex items-center'>
                        (
                            <button className='flex items-baseline border-l text-green-500 px-1'>
                            <i className='fa fa-thumbs-up mx-1'></i> 
                            <small>{likeNum}</small>

                        </button>
                            <button className='flex items-center text-red-500 px-1'>
                            <i className='fa fa-thumbs-down mx-1'></i> 
                             <small>{disLikeNum}</small>

                        </button>
                        )
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;