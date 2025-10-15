import React from 'react'
const PostItem = ({ post, onClick }) => {
  return (
    <>
      <div
      onClick={onClick} 
      className=''>
        <h2 className='text-2xl font-bold'>{post.title}</h2>
        <p className='text-xl font-semibold'>{post.content}</p>
      </div>
    </>
  )
}

export default PostItem