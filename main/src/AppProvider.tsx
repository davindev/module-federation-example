import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}
