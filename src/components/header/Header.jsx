import React from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import styles from "./Header.module.css";

const Header = (props) => {
	console.log(props);

	return (
		<div className={styles.header}>
			<Logo />
			<Menu />
		</div>
	);
};

export default Header
