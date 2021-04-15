import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
  const { dialogs, messages, newMessageText } = props.dialogsPage;

  let newMessageElement = React.createRef();

  const sendMessage = () => {
    // let text = newMessageElement.current.value;
    props.dispatch({ type: 'SEND-MESSAGE' });
  }

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  }

  const dialogsElements = dialogs.map((d, i) => 
    <DialogItem name={d.name} id={d.id} key={i} />
  );

  const messagesElements = messages.map((m, i) =>
    <Message message={m.message} id={m.id} key={i} />
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
        <textarea className={s.input}
          onChange={onMessageChange}
          ref={newMessageElement}
          value={newMessageText} />
      </div>
      <div>
        <button 
          className={s.addBtn}
          onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;