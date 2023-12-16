import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider, Center, Spinner } from '@chakra-ui/react';

import route from './AppRoute';

export default function App() {
  return (
    <ChakraProvider>
      <Suspense fallback={(
        <Center height="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="#e9ecef"
            color="#208df9"
            size="xl"
          />
        </Center>
      )}>
        <RouterProvider router={createBrowserRouter([route])} />
      </Suspense>
    </ChakraProvider>
  );
}
