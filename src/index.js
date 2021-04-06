import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { id: 1, message: 'Hi, how are you?', likes: 21 },
  { id: 2, message: 'This is my first post', likes: 12 },
];

const dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Igor' },
  { id: 3, name: 'Vanya' },
  { id: 4, name: 'Olya' },
  { id: 5, name: 'Vit' }
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Oooohhh myyyy!' }
];

ReactDOM.render(
  <React.StrictMode>
    <App 
      posts={posts}
      dialogs={dialogs}
      messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();