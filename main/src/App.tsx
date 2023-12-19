import React, { Suspense } from 'react';
import { ChakraProvider, Center, Spinner } from '@chakra-ui/react';

import AppRoutes from './AppRoutes';

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
        <AppRoutes />
      </Suspense>
    </ChakraProvider>
  );
}
