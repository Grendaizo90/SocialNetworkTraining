import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
  const { dialogs, messages } = props.state;

  const dialogsElements = dialogs.map((d, i) => 
    <DialogItem name={d.name} id={d.id} key={i} />
  );

  const messagesElements = messages.map((m, i) =>
    <Message message={m.message} id={m.id} key={i} />
  );

  let newMessageElement = React.createRef();

  const sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;