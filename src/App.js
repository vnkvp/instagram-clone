import React from 'react';
import Header from './components/Header';
import Post from './components/Post'
import './assets/App.css';

function App() {
  return (
    <div className='app'>
      { /* Header */}
      <Header />
      { /* Posts */}
      <Post />
      { /* Posts */}
    </div>
  );
}

export default App;
