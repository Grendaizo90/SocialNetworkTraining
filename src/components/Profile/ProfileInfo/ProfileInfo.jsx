import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1687355/171259b1-cc0f-4a42-9a5c-a9b292d469d4/s375" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
          {/* <img src="https://avt-22.foto.mail.ru/mail/artem74755/_avatar180?"/> */}
      </div>
    </div>
  )
}

export default ProfileInfo;