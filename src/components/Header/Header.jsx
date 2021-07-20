import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://logosvector.net/wp-content/uploads/2013/04/puma-se-eps-vector-logo.png" alt="logo" />
			<div className={s.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
					: <NavLink to={'/login'}>Login</NavLink>}			
			</div>
		</header>
	)
}

export default Header;