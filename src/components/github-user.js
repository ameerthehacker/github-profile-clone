import React, { useState, useEffect } from "react";
import { fetchUser } from "../services/api";

export default function GitHubUser({ username, delay, children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(username, delay)
    .then(user => setUser(user))
    .catch(err => console.error(err));
  }, [username, delay]);

  return user ? 
  (
    <>
      <h1>{user.name}</h1>
      <p>{user.bio.toUpperCase()}</p>
      {children}
    </>
  ) : <p>Loading...</p>;
}
