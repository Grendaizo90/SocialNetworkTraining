import React from 'react';
import selectors from './Header.module.css';

const Header = () => {
	return (
		<header className={selectors.header}>
			<img src="https://logosvector.net/wp-content/uploads/2013/04/puma-se-eps-vector-logo.png" alt="logo" />
		</header>
	)
}

export default Header;