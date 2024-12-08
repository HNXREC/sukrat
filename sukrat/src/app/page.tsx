import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Sukrat!
      </h1>

      <p className={styles.description}>
        Your journey starts here.
      </p>
    </main>
  );
} 