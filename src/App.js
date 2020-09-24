import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebase';
import './assets/App.css';

function App() {

  const [posts, setPosts] = useState([]);

  //useEffect: running pieces of code on conditions.
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // everytime a new post is added, this function is fired.
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className='app'>
      { /* Header */}
      <Header />
      { /* Posts */}
      {posts.map(post => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
