import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  const { id, name } = props;
  const path = "/dialogs/" + id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

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