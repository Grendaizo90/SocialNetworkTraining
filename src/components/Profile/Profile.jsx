import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1687355/171259b1-cc0f-4a42-9a5c-a9b292d469d4/s375" alt=""/>
      </div>
      <div>
        ava + description
          {/* <img src="https://avt-22.foto.mail.ru/mail/artem74755/_avatar180?"/> */}
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;