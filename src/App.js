import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './assets/App.css';
import { Button, Input } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  //useEffect: running pieces of code on conditions.
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // everytime a new post is added, this function is fired.
      setPosts(snapshot.docs.map(doc => ({
        post: doc.data(),
        id: doc.id
      })))
    })
  }, [])

  return (
    <div className='app'>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1280px-Instagram_logo.svg.png&f=1&nofb=1'
            alt='logo' />
          <Input placeholder='username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder='e-mail'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input placeholder='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </div>
      </Modal>
      { /* Header */}
      <Header />
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      { /* Posts */}
      {posts.map(({ post, id }) => (
        <Post
          key={id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
