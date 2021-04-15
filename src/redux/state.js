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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'SEND-MESSAGE') {
      let newMessage = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;