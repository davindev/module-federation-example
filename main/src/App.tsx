import React, { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react'

const Header = React.lazy(() => import('layout/Header'));
const Footer = React.lazy(() => import('layout/Footer'));
const Service = React.lazy(() => import('kidsnote/Service'));

export default function App() {  
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Service />
      <Footer />
    </Suspense>
  );
}
