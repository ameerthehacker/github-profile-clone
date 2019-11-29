import React from "react";
import { Spinner as ChakraSpinner, Flex } from "@chakra-ui/core";

export default function Spinner() {
    return (
        <Flex marginTop={"5px"} justifyContent={"center"}>
            <ChakraSpinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            /> 
        </Flex>
    );
}