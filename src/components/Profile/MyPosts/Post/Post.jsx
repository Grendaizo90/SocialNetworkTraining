import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.post}>
      <img src="https://avt-22.foto.mail.ru/mail/artem74755/_avatar180?" alt="" />
      <div className={s.content}>
        {props.message}
        <div>
          <span>Likes: {props.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;