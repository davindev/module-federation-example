import React, { Suspense } from 'react';
const Header = React.lazy(() => import('layout/Header'));

export default function App() {
  return (
    <Suspense fallback="loading">
      <Header />
    </Suspense>
  );
}
