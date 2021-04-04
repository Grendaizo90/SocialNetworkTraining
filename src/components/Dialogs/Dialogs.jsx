import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Igor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Ivan</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Olya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Vit</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>Yeap</div>
      </div>
    </div>
  )
}

export default Dialogs;