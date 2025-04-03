import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import instagramIcon from "../../../public/assets/instagram.png";
import youtubeIcon from "../../../public/assets/youtube.png";
import XIcon from "../../../public/assets/twitter.png";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();
  const Footer = t.raw("Footer");
  return (
    <div className={styles.container}>
      <p className="text-center">{Footer["followUs"]}</p>
      <div className={styles.social}>
        <Image className={styles.image} src={XIcon} alt="image-x" />
        <Image className={styles.image} src={youtubeIcon} alt="image-youtube" />
        <Image
          className={styles.image}
          src={instagramIcon}
          alt="image-instagram"
        />
      </div>
      <p className="text-center">{Footer["copyright"]}</p>
    </div>
  );
}

export default Footer;
