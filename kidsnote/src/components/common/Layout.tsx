import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Lnb from './Lnb';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Flex>
      <Lnb />
      <Box
        width="calc(100vw - 250px)"
        height="calc(100vh - 60px - 180px)"
      >
        {children}
      </Box>
    </Flex>
  );
}
