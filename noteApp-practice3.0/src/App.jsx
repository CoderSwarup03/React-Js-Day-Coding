import React, { useState } from 'react'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails'
import PostIList from './components/PostIList'

function App() {
  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now(), comments: [] }]);
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    setSelectPost(null);
  }

  const updatePost = (update) => {
    setPosts(posts.map((post) => post.id === update.id ? update : post))
  }


  return (
    <>
      <div className=''>
        <h1 className='text-3xl font-bold text-center text-green-500 py-3'>Note App'New</h1>
        <CreatePost onAddPost={addPost} />
        {selectPost ? (
          <PostDetails
            post={selectPost}
            onDeletePost={deletePost}
            onUpdatePost={updatePost}
            onBack={() => setSelectPost(null)}
          />
        ) : (
          <PostIList posts={posts} onSelectPost={setSelectPost} />
        )}
      </div>
    </>
  )
}

export default App