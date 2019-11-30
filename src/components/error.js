import React, { Component } from 'react';
import { Flex, Icon, Text, Box } from '@chakra-ui/core';

export default class Errorcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <Box 
          marginTop={"10px"}
          padding={"20px"}
          background={"white"}
        >
          <Flex alignItems={"center"} direction={"column"}>
            <Icon size={"32px"} color={"red.500"} name={"close"} />
            <Text marginTop={"5px"} color={"gray.500"}>
              oops! something went wrong
            </Text>
          </Flex>
        </Box>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}