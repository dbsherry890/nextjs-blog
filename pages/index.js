import Head from "next/head";
// import "@mantine/carousel/styles.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import _Card from "../components/card";
import { Flex } from "@mantine/core";
import _Hero from "../components/Hero";
import _Carousel from "../components/Carousel";
import { Space } from "@mantine/core";
import { Text } from "@mantine/core";

// import { getSortedPostsData } from "../lib/posts";

import classes from "../styles/Home.module.css";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

const products = [
  {
    title: "Simple trim",
    description: "More description",
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1663000023.jpg",
  },
  {
    title: "Trim and wash",
    description: "More description 2",
    src: "https://wordpress.styleseat.com/wp-content/uploads/2022/08/average-salon-prices-hero-scaled.webp",
  },
  {
    title: "Coloring",
    description: "Fancy third description",
    src: "https://img1.wsimg.com/isteam/ip/10ce9f98-419e-47a5-bf54-acfaaf041f34/Why%20Do%20Salons%20Wash%20Your%20Hair%20After%20Coloring.jpeg",
  },
];

export default function Home() {
  const items = products.map((product) => (
    <_Card
      key={product.title}
      title={product.title}
      description={product.description}
      src={product.src}
    ></_Card>
  ));

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <_Hero />
      <Flex
        direction={{ base: "column", xs: "row" }}
        gap={{ base: "sm" }}
        justify={{ sm: "center" }}
      >
        {items}
      </Flex>
      <Space h="xl" />
      <Text size="xl" fw={700} ta="center" td="underline">
        Customer Reviews
      </Text>
      <Space h="md" />

      <_Carousel />
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
