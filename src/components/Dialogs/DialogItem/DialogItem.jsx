import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  const { id, name } = props;
  const path = "/dialogs/" + id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
    </div>
  )
}

export default DialogItem;