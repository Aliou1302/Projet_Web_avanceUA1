"use client";
import styles from "./Introduction.module.css";
import { useTranslations } from "next-intl";

const Introduction = () => {
  const t = useTranslations("Home");
  const introductionData = t.raw("introductionData");

  return (
    <header className={styles.header}>
      <img src="assets/hero-img.jpg" alt="Yoga" className={styles.image} />
      <div className={styles.textContainer}>
        <h1 className={styles.boldTitle}>{t("title")}</h1>
        {introductionData.map(({ id, description }) => (
          <p key={id} className={styles.description}>
            {description}
          </p>
        ))}
      </div>
    </header>
  );
};
export default Introduction;
