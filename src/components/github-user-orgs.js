import React, { useState, useEffect } from "react";
import { fetchUserOrgs } from "../services/api";

export default function GitHubUserOrgs({ username, delay }) {
  const [orgs, setOrgs] = useState(null);

  useEffect(() => {
    fetchUserOrgs(username, delay)
    .then(orgs => setOrgs(orgs))
    .catch(err => console.error(err));
  }, [username, delay]);

  return orgs ? 
  (
    <>
      <ul>
        {orgs.map(
          org => <li key={org.id}>{org.login}</li>
        )}
      </ul>
    </>
  ) : <p>Loading...</p>;
}
