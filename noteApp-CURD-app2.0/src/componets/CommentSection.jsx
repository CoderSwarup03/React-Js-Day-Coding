import React, { useState } from 'react'

const CommentSection = ({ post, onUpdatePost }) => {
  const [comment, setComment] = useState();
  const addComment = () => {
    if (!comment) return;
    const updated = {
      ...post,
      comments: [...post.comments, { id: Date.now(), text: comment }]
    }
    onUpdatePost(updated);
    setComment('');
  }

  return (
    <>
      <div className='mt-6  rounded-md'>
        <h2 className='text-2xl font-bold'>Comments</h2>
        <div>
          {
            post.comments.map((c) => {
              return (
                <div
                  className='text-xl font-semibold text-black p-2 border-2 border-green-600 rounded-md'
                  key={c.id}>{c.text}</div>
              )
            })
          }
        </div>
        <div className='mt-4 flex gap-2'>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='px-3 py-1 rounded-md outline-none border-2 border-green-600'
            placeholder='Enter your comment...'
            type="text" name="" id="" />
          <button 
          className='px-3 py-1 rounded-md font-semibold bg-green-500 hover:bg-green-600'
          onClick={addComment}>Add Comment</button>
        </div>
      </div>
    </>
  )
}

export default CommentSection