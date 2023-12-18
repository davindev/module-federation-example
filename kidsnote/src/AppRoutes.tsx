import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/common/Layout';

const ReportPage = React.lazy(() => import('./components/ReportPage'));
const NoticePage = React.lazy(() => import('./components/NoticePage'));
const AlbumPage = React.lazy(() => import('./components/AlbumPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/service"
        element={<Layout />}
      >
        <Route
          path="report"
          element={<ReportPage />}
        />
        <Route
          path="notice"
          element={<NoticePage />}
        />
        <Route
          path="album"
          element={<AlbumPage />}
        />
      </Route>
    </Routes>
  );
}
