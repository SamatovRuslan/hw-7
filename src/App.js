import './App.css';
import React from 'react';
import Comment from './components/Comment';;



const comment = [
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];


function App() {

  return <div>
    <Comment items={comment}/>
  </div>
   

}

export default App;



// <Comment 
//     // comment = {comment}
//     author={comment.author}
//     text={comment.text}
//     date={comment.date}
//     />