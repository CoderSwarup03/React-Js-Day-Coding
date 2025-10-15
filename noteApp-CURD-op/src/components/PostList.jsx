import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts, onSelectPost }) => {
  return (
    <>
      <div className='grid gap-4 mt-5'>
        {
          posts.length === 0 ? (
            <p className='text-center text-black'>No post yet.add one</p>
          ) : (
            posts.map((post) => (
              <PostItem key={post.id} post={post} onClick={() => onSelectPost(post)}/>
            ))
          )
        }
      </div>
    </>
  )
}

export default PostList