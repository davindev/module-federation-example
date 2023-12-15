import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Service from './Service';

export default function App() {
  return (
    <ChakraProvider>
      <Service />
    </ChakraProvider>
  );
}
