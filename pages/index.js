import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>PRESENSI KUH</p>

        <div className={styles.grid}>
          <a href="scan" className={styles.card}>
            <h2>PRESENSI HERE &rarr;</h2>
            <p>GO PRESENSI</p>
          </a>
        </div>
      </main>
    </div>
  );
}
