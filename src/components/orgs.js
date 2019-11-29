import React from "react";
import { Flex, Image, Text, Spinner } from "@chakra-ui/core";

export default function Org({ orgs }) {
  return (
    <Flex marginTop={"5px"}>
      {
        orgs.map(
          org => <Image key={org.id} padding={"3px"} width={"25px"} src={org.avatar_url} />
        )
      }
    </Flex>
  );
}
