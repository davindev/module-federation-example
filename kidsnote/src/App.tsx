import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import appRoutes from './appRoutes';

export default function App() {
  const element = useRoutes(appRoutes);

  return (
    <ChakraProvider>
      <BrowserRouter basename="/service">
        {element}
      </BrowserRouter>
    </ChakraProvider>
  );
}
