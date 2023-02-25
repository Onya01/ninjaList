import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit dolor excepturi molestiae blanditiis sequi autem? Debitis distinctio, ducimus itaque accusamus culpa vitae voluptatem illum molestiae magni quasi aperiam velit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit dolor excepturi molestiae blanditiis sequi autem? Debitis distinctio, ducimus itaque accusamus culpa vitae voluptatem illum molestiae magni quasi aperiam velit.</p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}
