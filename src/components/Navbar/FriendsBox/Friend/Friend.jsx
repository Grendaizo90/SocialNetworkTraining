import React from 'react';
import s from './Friend.module.css';

const Friend = () => {
  return (
    <div className={s.friendItem}>
      <img src="https://assets.discours.io/unsafe/900x/production/image/e0a0b3f0-dd3a-11e8-8b5a-259a10161f0a.jpg" alt=""/>
      <div>
        <span className={s.name}>Pahom Bratishka</span>
      </div>
    </div>
  )
}

export default Friend;