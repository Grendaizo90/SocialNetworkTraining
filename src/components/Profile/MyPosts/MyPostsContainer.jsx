import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostCreator());
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text));
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;