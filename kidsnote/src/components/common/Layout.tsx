import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export default function Layout() {
  return (
    <Flex height="100%">
      <div>키즈노트 LNB</div>
      <main>
        <Outlet />
      </main>
    </Flex>
  );
}
