import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Lnb from './Lnb';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Flex
      height="100vh"
      paddingTop="60px"
    >
      <Lnb />
      <Box width="calc(100% - 250px)">
        {children}
      </Box>
    </Flex>
  );
}
