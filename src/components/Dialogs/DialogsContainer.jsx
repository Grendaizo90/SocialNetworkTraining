import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { store => {
        const state = store.getState().dialogsPage;

        const onSendMessage = () => {
          store.dispatch(sendMessageCreator());
        }

        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        }

        return (
          <Dialogs
            sendMessage={onSendMessage}
            updateNewMessageText={onMessageChange}
            dialogsPage={state} />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;