import React, { useState } from 'react'
import EditPost from './EditPost'
import CommentSection from './CommentSection'

const PostDetails = ({ post, onDeletePost, onUpdatePost, onBack }) => {
    const [isEditing, setEditing] = useState(false);
    return (
        <>
            {
                isEditing ? (
                    <EditPost
                        post={post}
                        onSave={(update) => {
                            onUpdatePost(update);
                            setEditing(false);
                        }}
                    />
                ) : (
                    <>
                        <div className='w-full bg-white p-4 border-2 rounded-md border-green-600'>
                            <h2 className='text-2xl font-bold'>{post.title}</h2>
                            <span className='text-xl font-semibold text-gray-600'>{post.content}</span>
                            <div className='flex gap-2'>
                                <button
                                    onClick={() => setEditing(true)}
                                    className='px-3 py-1 rounded-md font-semibold bg-green-500 hover:bg-green-600'>Edit</button>
                                <button
                                    onClick={() => onDeletePost(post.id)}
                                    className='px-3 py-1 rounded-md font-semibold bg-red-500 hover:bg-red-600'>Delete</button>
                                <button
                                    onClick={() => onBack()}
                                    className='px-3 py-1 rounded-md font-semibold bg-gray-500 hover:bg-gray-600'>Back</button>
                            </div>
                        </div>
                    </>
                )
            }
            <CommentSection post={post} onUpdatePost={onUpdatePost} />
        </>
    )
}

export default PostDetails