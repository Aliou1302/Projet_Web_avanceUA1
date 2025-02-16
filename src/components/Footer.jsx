import React from "react";
import Image from "next/image";

import style from "./Footer.module.css"

import insta from "../../public/instagram.png"
import youtube from "../../public/youtube.png"
import X from "../../public/twitter.png"


export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.text}> 
        <p className="italic">
          Retrouver nous sur nos réseaux :
        </p>
      </div>
      <div className={style.social}>
        <div className={style.containerImage}>
          <Image className={style.image} src={X} alt="image-x"  />
        </div>
        <div >
        <Image className={style.image} src={youtube} alt="image-youtube"/>
        </div>
        <div className={style.containerImage}>
        <Image className={style.image} src={insta} alt="image-instagram"/>
        </div>
      </div>
      <div>
        <p>Copyright © 2025</p>
      </div>
    </div>
  );
}
