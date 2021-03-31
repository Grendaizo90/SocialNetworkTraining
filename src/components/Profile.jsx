import React from 'react';
import selectors from './Profile.module.css';

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1687355/171259b1-cc0f-4a42-9a5c-a9b292d469d4/s375" />
      </div>
      <div>
        ava + description
          {/* <img src="https://avt-22.foto.mail.ru/mail/artem74755/_avatar180?"/> */}
      </div>
      <div>
        my posts
          <div>
          new post
          </div>
        <div className={selectors.posts}>
          <div className={selectors.item}>
            post 1
          </div>
          <div className="item">
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;