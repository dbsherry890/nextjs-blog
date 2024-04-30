// import Head from "next/head";
import { Grid } from "@mantine/core";
import Layout from "../components/layout";
import React from "react";
import styles from "../styles/Contact.module.css";
import Hours from "../components/Hours";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contact_page}>
        <h2>Contact</h2>
        <div className={styles.contact_content}>
          <Grid grow>
            <Grid.Col span={6} className={styles.hours_column}>
              <Hours />
            </Grid.Col>
            <Grid.Col span={6}>example@gmail.com</Grid.Col>
          </Grid>
        </div>
      </div>
    </Layout>
  );
}
