import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import ReportPage from './components/ReportPage';

export default function App() {
  return (
    <ChakraProvider>
      <ReportPage />
    </ChakraProvider>
  );
}
