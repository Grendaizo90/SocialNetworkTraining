import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

  const posts = [
    { id: 1, message: 'Hi, how are you?', likes: 21 },
    { id: 2, message: 'This is my first post', likes: 12 },
  ];

  const postsElements = posts.map((p, i) =>
    <Post id={p.id} message={p.message} likes={p.likes} key={i} />
  );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;