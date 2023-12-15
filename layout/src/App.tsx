import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './components/Header';

export default function App() {
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
      </Flex>
    </ChakraProvider>
  );
}
