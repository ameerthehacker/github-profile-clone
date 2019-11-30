import React from "react"
import { Text, Spinner } from '@chakra-ui/core'

const OrgsLoader = () => (
  <Text fontSize={"small"} color="gray.500">
    <Spinner size={"xs"} /> Loading orgs...
  </Text>
)

export default OrgsLoader;
