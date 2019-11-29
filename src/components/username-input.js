import React, { useState } from 'react';
import { Button, Input, Flex } from "@chakra-ui/core";

export default function UsernameInput({ 
  initialUsername, onUsernameChange 
}) {
  const [username, setUsername] = useState(initialUsername);

  return (
    <Flex>
      <Input
        size={"lg"}
        placeholder={"GitHub Username"}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Button
        style={{ marginLeft: "5px" }}
        variantColor={"green"}
        size={"lg"}
        onClick={() => onUsernameChange(username)}
      >
        Fetch
      </Button>
    </Flex>
  );
}