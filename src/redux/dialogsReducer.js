const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Oleg' },
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
};

const dialogsReducer = (state = initialState, action) => { 
  
  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: action.messageText
      };
      
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  };
};

export const sendMessageCreator = (messageText) => ({ type: SEND_MESSAGE, messageText });
export const updateNewMessageTextCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;