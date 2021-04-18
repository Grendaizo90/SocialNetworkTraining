const ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
  SEND_MESSAGE = 'SEND-MESSAGE',
  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {

    profilePage: {

      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 21 },
        { id: 2, message: 'This is my first post', likes: 12 },
      ],

      newPostText: ''
    },

    dialogsPage: {

      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Igor' },
        { id: 3, name: 'Vanya' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Vit' }
      ],

      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Oooohhh myyyy!' }
      ],

      newMessageText: ''
    },

    sidebar: {}
  },

  _callSubscriber() {
    console.log('State has changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case 'ADD-POST':
        let newPost = {
          id: this._state.profilePage.posts.length + 1,
          message: this._state.profilePage.newPostText,
          likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case 'UPDATE-NEW-POST-TEXT':
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case 'SEND-MESSAGE':
        let newMessage = {
          id: this._state.dialogsPage.messages.length + 1,
          message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        break;
      case 'UPDATE-NEW-MESSAGE-TEXT':
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;
      default:
        // Nothing
    }
  }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;
window.store = store;