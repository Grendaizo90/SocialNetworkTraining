const SEND_MESSAGE = 'SEND-MESSAGE',
  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => { 
  
  switch (action.type) {

    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText
      };
      
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      };
    
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;