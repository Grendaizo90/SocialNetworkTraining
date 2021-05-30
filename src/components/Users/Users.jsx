import React from 'react';
import s from './users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span
            className={props.currentPage === p && s.selectedPage}
            onClick={() => props.onPageChanged(p)}
            key={p}>{p}</span>
        })}
      </div>
      <div className={s.users}>
        {props.users.map(u => (
          <div className={s.userCard} key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`} >
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt="avatar" />
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    className={s.followBtn}
                    onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    className={s.followBtn}
                    onClick={() => { props.follow(u.id) }}>Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>

    </div>
  )
};

export default Users;
