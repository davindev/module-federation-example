import React from 'react';
import { useRoutes } from 'react-router-dom';

import appRoutes from './appRoutes';

export default function App() {
  const routes = useRoutes(appRoutes);
  return routes;
}
