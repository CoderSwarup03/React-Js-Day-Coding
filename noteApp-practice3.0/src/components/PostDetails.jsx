import React, { useState } from 'react'
import EditPost from './EditPost';
import CommentPost from './CommentPost';

const PostDetails = ({ post, onDeletePost, onUpdatePost, onBack }) => {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <>
            <div>
                {isEdit ? (
                    <EditPost
                        post={post}
                        onSave={(updated) => {
                            onUpdatePost(updated);
                            setIsEdit(false);
                        }}
                    />
                ) : (
                    <>
                        <div className='bg-gray-100 rounded-md mx-3 p-3'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-2xl font-semibold'>{post.title}</h2>
                                <span className='text-xl font-semibold'>{post.content}</span>
                            </div>
                            <div className='flex gap-2 mt-[5px]'>
                                <button
                                    onClick={() => setIsEdit(true)}
                                    className='text-xl font-semibold px-3 py-1 rounded-md bg-green-500 hover:bg-green-600'>Edit</button>
                                <button
                                    onClick={() => onDeletePost(post.id)}
                                    className='text-xl font-semibold px-3 py-1 rounded-md bg-red-500 hover:bg-red-600'>Delete</button>
                                <button
                                    onClick={onBack}
                                    className='text-xl font-semibold px-3 py-1 rounded-md bg-gray-500 hover:bg-gray-600'>Back</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <CommentPost post={post} onUpdatePost={onUpdatePost} />
        </>
    )
}

export default PostDetails