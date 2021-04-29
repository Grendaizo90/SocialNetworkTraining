const ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 21 },
    { id: 2, message: 'This is my first post', likes: 12 },
  ],

  newPostText: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;