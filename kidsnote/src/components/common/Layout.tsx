import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import Lnb from './Lnb';

export default function Layout() {
  return (
    <Flex>
      <Lnb />
      <Box
        width="calc(100vw - 250px)"
        height="calc(100vh - 60px - 180px)"
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
