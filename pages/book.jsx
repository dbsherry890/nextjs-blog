// import Head from "next/head";
// import { Grid } from "@mantine/core";
import Layout from "../components/layout";
import React, { useState, useEffect } from "react";
import styles from "../styles/Book.module.css";
import _BookForm from "../components/BookForm";
import User from "../components/User";
// import _Calendar from "../components/Calendar";

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

export default function Book({ users }) {
  // const users = getUsers();

  return (
    <Layout>
      <div className={styles.contact_page}>
        <div>
          <_BookForm />
        </div>
        {/* <div>
          {users.map((user) => {
            return (
              <User
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                details={user.details}
              />
            );
          })}
        </div> */}
        {/* <_Calendar /> */}
      </div>
    </Layout>
  );
}
