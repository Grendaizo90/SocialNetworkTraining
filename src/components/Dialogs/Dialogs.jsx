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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Igor" id="2" />
        <DialogItem name="Ivan" id="3" />
        <DialogItem name="Olya" id="4" />
        <DialogItem name="Vit" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="Oooohhh myyyy!" />
      </div>
    </div>
  )
}

export default Dialogs;