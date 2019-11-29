import React, { useState, useEffect } from "react";
import { fetchUserRepos } from "../services/api";
import { List, ListItem, ListIcon, Flex, Badge } from "@chakra-ui/core";
import ReposLoader from "./loaders/repos-loader";

export default function GitHubUserRepos({ username, delay }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetchUserRepos(username, delay)
    .then(repos => setRepos(repos))
    .catch(err => console.error(err));

    // remove previously set repos
    setRepos(null);
  }, [username, delay]);

  return repos ? 
  (
    <Flex marginTop={"10px"} direction={"column"}>
      <List spacing={1}>
        {repos.map(
          repo => (
            <ListItem background={"white"} key={repo.id} borderWidth={"1px"} padding={"8px"}>
              <a target="__blank" href={repo.html_url}><ListIcon icon={"link"} /></a>
              {repo.full_name}
              {repo.fork? <Badge float={"right"} variantColor="purple">Fork</Badge>: null }
            </ListItem>
          )
        )}
      </List>
    </Flex>
  ) : <ReposLoader />;
}
