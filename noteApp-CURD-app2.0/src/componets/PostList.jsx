import React from 'react'
import PostItem from './PostItem'


const PostList = ({ posts, onSelectPost }) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-4'>
                {
                    posts.length === 0 ? (
                        <div className='text-2xl font-semibold text-black'>yet no post available.add one and more!</div>
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

export default PostList