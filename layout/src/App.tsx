import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
