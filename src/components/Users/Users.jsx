import React from 'react';
import s from './users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      [
        {
          id: 2,
          photoUrl: 'https://cs6.pikabu.ru/avatars/130/v130979.jpg',
          followed: true,
          fullName: 'Grisha',
          status: 'sr',
          location: { city: 'Kiev', country: 'Ukraine' }
        },
        {
          id: 3,
          photoUrl: 'https://cs6.pikabu.ru/avatars/130/v130979.jpg',
          followed: true,
          fullName: 'Taisha',
          status: 'md',
          location: { city: 'Los Angeles', country: 'USA' }
        },
      ]
    ])
  }

  return (
    <div>
      { props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} alt="" />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
