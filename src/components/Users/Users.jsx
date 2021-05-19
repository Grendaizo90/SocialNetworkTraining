import React from 'react';
import s from './users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                  ? <button className={s.followBtn} onClick={() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '7e3b7f89-a397-4c1a-b437-ccc6bc93ed76'
                        }
                      })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                        });
                  }}>Unfollow</button>
                  : <button className={s.followBtn} onClick={() => {

                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '7e3b7f89-a397-4c1a-b437-ccc6bc93ed76'
                        }
                      })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });

                  }}>Follow</button>}
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
