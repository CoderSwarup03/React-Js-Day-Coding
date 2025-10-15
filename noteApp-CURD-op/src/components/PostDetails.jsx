import React, { useState } from 'react'
import EditPost from './EditPost'
import CommentSection from './CommentSection'

const PostDetails = ({ post, onUpdatePost, onDeletePost, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className='bg-white rounded-md shadow mt-6'>
        {isEditing ? (
          <EditPost
            post={post}
            onSave={(updated) => {
              onUpdatePost(updated);
              setIsEditing(false);
            }}
          />
        ) : (
          <>
            <h2 className='text-2xl font-bold '>{post.title}</h2>
            <span className='mt-2 text-gray-700'>{post.content}</span>
            <div className='flex gap-2 mt-4'>
              <button
                onClick={() => setIsEditing(true)}
                className='px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold'>Edit</button>
              <button
                onClick={() => onDeletePost(post.id)}
                className='px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold'>Delete</button>
              <button
                onClick={onBack}
                className='px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold'>Back</button>
            </div>
          </>
        )}
        <CommentSection post={post} onUpdatePost={onUpdatePost} />
      </div>
    </>
  )
}

export default PostDetails