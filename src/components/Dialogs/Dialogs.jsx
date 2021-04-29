import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
  const { dialogs, messages, newMessageText } = props.dialogsPage;

  const onSendMessage = () => {
    props.sendMessage();
  }

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  const dialogsElements = dialogs.map( d =>
    <DialogItem name={d.name} id={d.id} key={d.id} />
  );

  const messagesElements = messages.map( m =>
    <Message message={m.message} id={m.id} key={m.id} />
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <div>
          <textarea 
            placeholder="Type your message"
            className={s.input}
            onChange={onMessageChange}
            value={newMessageText} />
        </div>
        <div>
          <button
            className={s.addBtn}
            onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;