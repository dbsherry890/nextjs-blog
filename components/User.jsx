function User({ id, name, email, details, username }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>User ID: {id}</p>
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      <h4>Details: {details}</h4>
    </div>
  );
}

export default User;
