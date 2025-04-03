"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";
import MenuItem from "./menuItem/MenuItem";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations("Menu");
  const [open, setOpen] = useState(false);

  // Liste des liens du menu
  const links = [
    { label: t("home"), path: "/" },
    { label: t("events"), path: "/events" },
    { label: t("contact"), path: "/contact" },
  ];

  return (
    <>
      {/*Section de Menu desktop */}
      <div key="client-only-menu">
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {links.map((link, index) => (
              <MenuItem key={index} label={link.label} path={link.path} />
            ))}
          </ul>
        </div>
        <button
          className={styles.menuButton}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image
            src={open ? "/icons/close.png" : "/icons/menu.png"}
            alt="Menu"
            width={30}
            height={30}
          />
        </button>
        {/**Section pour mobile */}
        {open && (
          <nav className={styles.mobileMenu}>
            <ul>
              {links.map((a, index) => (
                <MenuItem
                  key={index}
                  label={a.label}
                  path={a.path}
                  onClick={() => setOpen(false)} // Ferme le menu après le clic
                />
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Menu;
