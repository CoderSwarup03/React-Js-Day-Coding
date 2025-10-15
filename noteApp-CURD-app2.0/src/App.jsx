import React from 'react'
import { useState } from 'react'
import CreatePost from './componets/CreatePost'
import PostDetails from './componets/PostDetails'
import PostList from './componets/PostList'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState(null);

  // globally initilized the add,delete, update functionlity!!
  const addPost = (post) => {
    setPosts([...posts,
    {
      ...post,
      id: Date.now(),
      comments: []
    }
    ]);
  }
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    setSelectPost(null);
  }
  const updatePost = (update) => {
    setPosts(posts.map((post) => (post.id === update.id ? update : post)))
  }

  return (
    <>
      <div className='min-h-screen p-4 bg-gray-200'>
        <h1 className='text-3xl font-bold text-center text-blue-600'>My Blog App</h1>
        <CreatePost onAddPost={addPost} />
        {
          selectPost ? (
            <PostDetails
              post={selectPost}
              onDeletePost={deletePost}
              onUpdatePost={updatePost}
              onBack={() => setSelectPost(null)}
            />
          ) : (
            <PostList posts={posts} onSelectPost={setSelectPost} />
          )
        }
      </div>
    </>
  )
}

export default App