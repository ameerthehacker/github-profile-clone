import React, { useState, useEffect } from "react";
import { fetchUser } from "../services/api";
import { Box, Image, Flex, Text } from "@chakra-ui/core";
import Spinner from "./spinner";

export default function GitHubUser({ username, delay, children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(username, delay)
    .then(user => setUser(user))
    .catch(err => console.error(err));

    // remove the previously set user
    setUser(null);
  }, [username, delay]);

  return (
    <Box 
      borderWidth="1px"
      background={"white"}
      rounded={"md"} 
      padding={"5px"} 
      marginTop={"10px"}
    >
      {user? 
        <Flex direction={"row"}>
          <Image size={"100px"} src={user.avatar_url} rounded="md" />
          <Flex direction={"column"} paddingLeft={"10px"}>
            <Text fontSize={"large"} >
              {user.name}
            </Text>
            <Text fontSize={"medium"} color="gray.500">
              {`@${user.login}`}
            </Text>
            <Text fontSize={"x-small"} color="gray.500">
              {user.bio}
            </Text>
          </Flex>
        </Flex>
        :
        <Spinner />
      }
    </Box>
  );
}
