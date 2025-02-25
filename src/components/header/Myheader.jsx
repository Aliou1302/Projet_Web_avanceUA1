import styles from "./Myheader.module.css";
import headerData from "@/data/headerData.json";

const Myheader = () => {
  return (
    <header className={styles.header}>
      <img src="assets/hero-img.jpg" alt="Yoga" className={styles.image} />
      <div className={styles.textContainer}>
        <h1 className={styles.boldTitle}>Bienvenue sur FitSpace</h1>
        {headerData.map(({ id, description }) => (
          <p key={id} className={styles.description}>{description}</p>
        ))}
      </div>
    </header>
  );
};
export default Myheader;
