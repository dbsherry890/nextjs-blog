import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import _Card from "../components/card";
import { Flex } from "@mantine/core";

import { getSortedPostsData } from "../lib/posts";

import classes from "../styles/Home.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Flex
        direction={{ base: "column", xs: "row" }}
        gap={{ base: "sm", xs: "lg" }}
        justify={{ sm: "center" }}
      >
        <_Card />
        <_Card />
        <_Card />
      </Flex>
      <section className={utilStyles.headingMd}>
        {/* <p>Here are some blog posts:</p> */}
      </section>
    </Layout>
  );
}

{
  /* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */
}
