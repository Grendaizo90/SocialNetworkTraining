import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/1687355/171259b1-cc0f-4a42-9a5c-a9b292d469d4/s375" alt="" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar" />
        <span>{props.profile.aboutMe}</span>
        <ProfileStatus status='hi' />
      </div>
    </div>
  )
}

export default ProfileInfo;
