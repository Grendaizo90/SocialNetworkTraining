let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 21 },
      { id: 2, message: 'This is my first post', likes: 12 },
    ],
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
    ]
  },

  sidebar: {}
}

export const addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 5,
    message: postMessage,
    likes: 0
  };

  state.profilePage.posts.push(newPost);
}

export default state;