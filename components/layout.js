import Head from "next/head";
import styles from "./layout.module.css";
import _Header from "./Header";
import Footer from "./Footer";

const name = "Dan Sherry";
export const siteTitle = "Hairstylist Supreme";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Webiste for Mandy's Hair Salon" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <_Header />
      </header>
      {/* <h1 className="text-2xl font-bold underline">Hello, Next.js!</h1> */}

      <main>{children}</main>
      <Footer />
    </div>
  );
}
