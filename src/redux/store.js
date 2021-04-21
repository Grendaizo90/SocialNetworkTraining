import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;