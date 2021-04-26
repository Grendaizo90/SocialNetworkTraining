import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


// const SMyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       { store => {
//         const state = store.getState();

//         const addPost = () => {
//           store.dispatch(addPostCreator());
//         }

//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostTextCreator(text));
//         }

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText} />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;