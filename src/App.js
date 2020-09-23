import React, { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post'
import './assets/App.css';

function App() {

  const [posts, setPosts] = useState([{
    username: 'vnkvp',
    imageUrl: 'https://images.suamusica.com.br/dzC8Eq5kPlU8oSAVOQo4gMi77fw=/500x500/filters:format(jpg)/39152655/2692264/cd_cover.jpeg',
    caption: 'eae'
  }, {
    username: 'oswaldoinaciod',
    imageUrl: 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
    caption: 'React project'
  }]);

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
