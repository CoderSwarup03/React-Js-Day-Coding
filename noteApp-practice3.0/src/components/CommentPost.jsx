import React, { useState } from 'react'

const CommentPost = ({ post, onUpdatePost }) => {
  const [comment, setComment] = useState('');

  const addComment = () => {
    if (!comment) return;
    const update = {
      ...post,
      comments: [...post.comments, { id: Date.now(), text: comment }]
    }
    onUpdatePost(update);
    setComment('');
  }
  return (
    <>
      <div className='mx-3 bg-white rounded-md'>
        <h3 className='text-xl font-semibold'>All Command Here: </h3>
        <div>
          {
            post.comments.map((item) => {
              return (
                <div key={item.id} className='flex gap-2'>
                  <span className='text-xl font-semibold'>{item.text}</span>
                </div>
              )
            })
          }
        </div>
        <div className='flex gap-2'>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Write your comment...'
            className='outline-none border-2 border-green-500 rounded-md px-3 py-1 mb-2'
            type="text" name="" id="" />
          <button
            onClick={addComment}
            className='text-lg font-semibold px-3 py-1 rounded-md bg-green-500 hover:bg-green-600'>Add Comment</button>
        </div>
      </div>
    </>
  )
}

export default CommentPost