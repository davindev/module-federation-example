import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Header = React.lazy(() => import('layout/Header'));
const Footer = React.lazy(() => import('layout/Footer'));

export default function GlobalLayout() {
  return (
    <>
      <Header />
      <Box
        height="calc(100vh - 180px)"
        paddingTop="60px"
        backgroundColor="#f8f9fa"
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
