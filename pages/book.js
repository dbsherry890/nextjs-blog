// import Head from "next/head";
// import { Grid } from "@mantine/core";
import Layout from "../components/layout";
import React from "react";
import styles from "../styles/Book.module.css";
import _BookForm from "../components/BookForm";
import _Calendar from "../components/Calendar";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contact_page}>
        <div>
          <_BookForm />
        </div>
        {/* <_Calendar /> */}
      </div>
    </Layout>
  );
}
