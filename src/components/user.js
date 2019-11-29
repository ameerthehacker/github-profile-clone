import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/core";

export default function User({ resource, children}) {
  const user = resource.read();

  return (
    <Box 
      borderWidth="1px"
      background={"white"}
      rounded={"md"} 
      padding={"5px"} 
      marginTop={"10px"}
    >
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
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}
