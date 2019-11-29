import React, { useState, useEffect } from "react";
import { fetchUserRepos } from "../services/api";

export default function GitHubUserRepos({ username, delay }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetchUserRepos(username, delay)
    .then(repos => setRepos(repos))
    .catch(err => console.error(err));
  }, [username, delay]);

  return repos ? 
  (
    <>
      <ul>
        {repos.map(
          repo => <li key={repo.id}>{repo.full_name}</li>
        )}
      </ul>
    </>
  ) : <p>Loading...</p>;
}
