// import Link from "next/link";

import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <div className={styles.header}>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.id}>
          <a className={styles.single}>{user.company.catchPhrase}</a>
        </p>
      ))}
    </div>
  );
};

export default Users;
