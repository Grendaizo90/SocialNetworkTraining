import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { store => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostCreator());
        }

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextCreator(text));
        }

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;