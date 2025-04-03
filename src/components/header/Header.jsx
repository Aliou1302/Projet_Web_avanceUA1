import React from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import styles from "./Header.module.css";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import LocaleSwitcher from "../localSwitcher/LocaleSwitcher";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
      <Menu />
    </div>
  );
};

export default Header;
