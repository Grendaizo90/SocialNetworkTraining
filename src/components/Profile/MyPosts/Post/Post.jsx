import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://avt-22.foto.mail.ru/mail/artem74755/_avatar180?" alt="" />
      {props.message}
      <div>
        <span>Likes: {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;