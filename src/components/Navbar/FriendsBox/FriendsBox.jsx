import React from 'react';
import s from './FriendsBox.module.css';
import Friend from './Friend/Friend';

const FriendsBox = () => {
  return (
    <div className={s.friendsWrapper}>
      <div className="friendsHeader">
        Friends
      </div>
      <div className={s.friendsGrid}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  )
}

export default FriendsBox;