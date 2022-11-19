import React from 'react';
import CommentItem from './CommentItem';

const Commmens = ({bookName ,comments}) => {
    
    return (
        <div className='w-full py-4 border-y-2 border-dashed border-gray-300'>
            <div className='max-w-5xl mx-auto p-5'>
                <div className='flex justify-between items-center w-full mb-5'>
                    <h6 className='text-gray-500'>{`نظرات کاربران درباره کتاب ${bookName}`}</h6>
                    <button className='text-gray-700 bg-gray-300 border text-xs border-gray-600 px-4 py-2 hover:opacity-90'><i className='fa fa-comment'></i> نظر خود را بنویسید</button>

                </div>

                { 
                comments.length===0 ? <p className='text-center text-gray-600 text-sm'>نظری برای نمایش وجود ندارد</p>
                :
                comments.map((item)=>(
                    <CommentItem key={item.commentId} hasBuyer={item.hasBuyer} commentMessage={item.content} commentDate='سه سال پیش' commentAuther={item.auther}likeNum={item.like}  disLikeNum={item.disLike}/>

                ))
                }
                

            </div>
            
        </div>
    );
};

export default Commmens;