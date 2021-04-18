import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {

  const postsElements = props.posts.map((p, i) =>
    <Post id={p.id} message={p.message} likes={p.likes} key={i} />
  );

  let newPostElement = React.createRef();

  const addPost = () => {
    // let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.input}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button
            className={s.addBtn}
            onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;