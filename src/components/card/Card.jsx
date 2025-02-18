import React from "react";
import styles from "./Card.module.css";

const Card = ({
  title = "Titre par defaut",
  description = "Description par defaut",
}) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
