import React, { useState } from 'react'

const CommentSection = ({ post, onUpdatePost }) => {
  const [comment, setComment] = useState('');

  const addComment = () => {
    if(!comment) return;
    const updated = {
      ...post,
      comments: [...post.comments, {id: Date.now(), text: comment}]
    }
    onUpdatePost(updated);
    setComment('');
  }

  return (
    <>
      <div className='mt-6 '>
        <h3 className='text-lg font-semibold mb-2'>Comments</h3>
        <div>
          {
            post.comments.map((c) => ( 
              <div
                key={c.id}
                className='bg-gray-100 p-2 rounded-md mb-2'
              >{c.text}</div>
            ))
          }
        </div>
        <div className='flex gap-2'>
          <input
            placeholder='add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text" />
          <button
          onClick={addComment}
          className='px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold'>Add Comment</button>
        </div>
      </div>
    </>
  )
}

export default CommentSection