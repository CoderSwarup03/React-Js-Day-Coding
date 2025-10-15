import React from 'react'
import PostItem from './PostItem'

const PostIList = ({ posts, onSelectPost }) => {
  return (
    <>
      <div className='grid gap-[10px] mx-3 rounded-md  mt-3'>
        {
          posts.length === 0 ? (
            <h2 className='text-center text-xl font-semibold text-red-500 mt-2'>yet no post.add one or more</h2>
          ) : (
            
            posts.map((post) => (
              <PostItem key={post.id} post={post} onClick={() => onSelectPost(post)} />
            ))
          )
        }
      </div>
    </>
  )
}

export default PostIList