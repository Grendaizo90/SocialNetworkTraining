import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://avt-22.foto.mail.ru/mail/artem74755/_avatar180?" alt="" />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;