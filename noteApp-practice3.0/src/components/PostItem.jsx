import React from 'react'

const PostItem = ({ post, onClick }) => {
  return (
    <>
      <div
        className='mx-3 bg-gray-100 w-full rounded-md'
        onClick={onClick}>
        <h2 className='text-2xl font-semibold'>{post.title}</h2>
        <span className='text-xl font-semibold'>{post.content}</span>
      </div>
    </>
  )
}

export default PostItem