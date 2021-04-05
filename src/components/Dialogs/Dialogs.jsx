import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Igor' },
    { id: 3, name: 'Vanya' },
    { id: 4, name: 'Olya' },
    { id: 5, name: 'Vit' }
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Oooohhh myyyy!' }
  ];

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
    </div>
  )
}

export default Dialogs;