import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import instagramIcon from "../../../public/assets/instagram.png";
import youtubeIcon from "../../../public/assets/youtube.png";
import XIcon from "../../../public/assets/twitter.png";


function Footer() {
  return (
    <div className={styles.container}>
        <p className="text-center">Retrouver nous sur nos réseaux :</p>
      <div className={styles.social}>
          <Image className={styles.image} src={XIcon} alt="image-x" />
          <Image
            className={styles.image}
            src={youtubeIcon}
            alt="image-youtube"
          />
          <Image
            className={styles.image}
            src={instagramIcon}
            alt="image-instagram"
          />
      </div>
        <p className="text-center">Copyright © 2025</p>
    </div>
  );
}

export default Footer;