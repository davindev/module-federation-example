import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Box
        position="fixed"
        left="0"
        bottom="0"
        width="100%"
      >
        <Footer />
      </Box>
    </>
  );
}
