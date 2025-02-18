import styles from "./Myheader.module.css";
const Myheader = () => {
  return (
    <header className={styles.header}>
      <img src="/assets/herotitre.jpg" alt="Yoga" className={styles.image} />
      <div className={styles.textContainer}>
        <h1 className={styles.boldTitle}>Bienvenue sur FitSpace</h1>
        <p>
          Votre studio de yoga et pilates dédié au bien-être. Découvrez des
          séances adaptées à vos besoins, encadrées par des professeurs
          passionnés. Ici, nous vous aidons à cultiver équilibre, force et
          sérénité, pour que chaque moment passé chez nous vous rapproche de la
          meilleure version de vous-même. Rejoignez-nous pour un voyage vers le
          bien-être !
        </p>
      </div>
    </header>
  );
};
export default Myheader;
