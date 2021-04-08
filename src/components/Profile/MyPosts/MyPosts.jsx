import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  const postsElements = props.posts.map((p, i) =>
    <Post id={p.id} message={p.message} likes={p.likes} key={i} />
  );

  let newPostElement = React.createRef();

  const addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;