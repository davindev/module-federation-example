import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import route from './AppRoute';

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={createBrowserRouter([route])} />
    </ChakraProvider>
  );
}
