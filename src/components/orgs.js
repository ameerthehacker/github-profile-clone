import React from "react";
import { Flex, Image } from "@chakra-ui/core";

export default function Org({ resource }) {
  const orgs = resource.read();

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
