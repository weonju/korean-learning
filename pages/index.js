import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming soon</title>
      </Head>
      <h1>Nothing to see yet</h1>
      <footer className={styles.footer}>Powered by popsicles</footer>
    </div>
  );
}
