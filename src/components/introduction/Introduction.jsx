import styles from "./Introduction.module.css";
import introductionData from "@/data/introductionData.json";

const Introduction = () => {
  return (
    <header className={styles.header}>
      <img src="assets/hero-img.jpg" alt="Yoga" className={styles.image} />
      <div className={styles.textContainer}>
        <h1 className={styles.boldTitle}>Bienvenue sur FitSpace</h1>
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
