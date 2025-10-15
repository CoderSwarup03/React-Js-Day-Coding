import React from 'react'

const PostItem = ({ post, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className='bg-white p-4 border-2 border-green-600 rounded-md cursor-pointer'
      >
        <h2 className='text-2xl font-bold'>{post.title}</h2>
        <p className='text-xl font-semibold text-gray-600'>{post.content}</p>
      </div>
    </>
  )
}

export default PostItem