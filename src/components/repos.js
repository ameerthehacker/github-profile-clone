import React from "react";
import { List, ListItem, ListIcon, Flex, Badge } from "@chakra-ui/core";

export default function Repos({ resource }) {
  const repos = resource.read();
  
  return (
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
  );
}
