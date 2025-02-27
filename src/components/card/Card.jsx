import React from "react";
import Link from "next/link";

const Card = ({ id, image, title, linkable, styles }) => {

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt="Event Image"
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>
        {title}
      </h1>
      {linkable ? (
        <Link
          href={`/events/${id}`}
          className={styles.link}
        >
          Voir plus
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
