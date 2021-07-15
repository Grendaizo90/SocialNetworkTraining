import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { useFormik } from 'formik';


const MyPosts = (props) => {

  const postsElements = props.posts.map(p =>
    <Post id={p.id} message={p.message} likes={p.likes} key={p.id} />
  );

  const onSubmitPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostsForm onSubmit={onSubmitPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddPostsForm = (props) => {
  const formik = useFormik({
    initialValues: {
      postText: ''
    },
    onSubmit: props.onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          placeholder="Write something"
          name="postText"
          className={s.input}
          onChange={formik.handleChange}
          value={formik.values.postText} />
      </div>
      <div>
        <button
          type="submit"
          className={s.addBtn}>Add post</button>
      </div>
    </form>
  )
}


export default MyPosts;