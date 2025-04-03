import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Card = ({ id, image, title, linkable, styles }) => {
  const t = useTranslations();
  const Events = t.raw("Events");

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Event Image" className={styles.image} />
      </div>
      <h1 className={styles.title}>{title}</h1>
      {linkable ? (
        <Link href={`/events/${id}`} className={styles.link}>
          {Events["viewMore"]}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
