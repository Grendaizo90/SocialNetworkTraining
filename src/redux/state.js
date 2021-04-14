let store = {
  _state: {
  
    profilePage: {
  
      posts: [
        { id: 1, message: 'Hi, how are you?', likes: 21 },
        { id: 2, message: 'This is my first post', likes: 12 },
      ],
  
      newPostText: 'Type here...'
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
  
      newMessageText: 'Type your message...'
    },
  
    sidebar: {}
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State has changed');
  },

  sendMessage() {
    let newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  addPost() {
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;