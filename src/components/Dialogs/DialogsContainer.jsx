import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  }

  return (
    <Dialogs
      sendMessage={onSendMessage}
      updateNewMessageText={onMessageChange}
      dialogsPage={state} />
  )
}

export default DialogsContainer;