import React, { useState } from 'react'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails'
import PostList from './components/PostList'

const App = () => {
  const [posts, setPosts] = useState([]);  //here post all the notes an array
  const [selectPosts, setSelectPosts] = useState(null);   //select the specific note

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now(), comments: [] }]);
  }
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    setSelectPosts(null);
  }

  const updatePost = (update) => {
    setPosts(posts.map((post) => (post.id === update.id ? update : post)))
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-4'>
        <h1 className='text-3xl font-bold text-center'>Blog App🗒️</h1>
        <CreatePost onAddPost={addPost} />
        {
          selectPosts ? (
            <PostDetails
              post = {selectPosts}
              onUpdatePost ={updatePost}
              onDeletePost={deletePost}
              onBack={() => setSelectPosts(null)}
            />
          ) : (
            <PostList 
              posts={posts}
              onSelectPost={setSelectPosts}
            />
          )
        }
      </div>
    </>
  )
}

export default App