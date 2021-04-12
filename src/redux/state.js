let rerenderEntireTree = () => {
  console.log('State has changed');
}

let state = {
  
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
}

window.state = state;

export const sendMessage = () => {
  let newMessage = {
    id: state.dialogsPage.messages.length + 1,
    message: state.dialogsPage.newMessageText
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export const addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likes: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;