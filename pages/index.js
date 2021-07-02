import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Hi there is is Bryan</p>
        <p className={styles.text}>
          Mauris tristique et est et bibendum. Nullam ut nibh sit amet diam
          convallis scelerisque. Nam vitae venenatis dolor. Mauris mollis mauris
          sit amet euismod vehicula. Phasellus id facilisis purus, ac viverra
          libero. Phasellus eu viverra tellus, ut hendrerit urna. Fusce at
          bibendum velit. Aliquam id purus in purus tincidunt rutrum. Sed
          bibendum eget felis a elementum. Suspendisse lobortis, dolor sit amet
          fermentum mattis, nulla nisl luctus ligula, at varius turpis quam et
          lorem.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See lists of ninjas</a>
        </Link>
      </div>
    </>
  );
}
