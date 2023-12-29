import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/common/Layout';

const ReportPage = React.lazy(() => import('./components/ReportPage'));
const NoticePage = React.lazy(() => import('./components/NoticePage'));
const AlbumPage = React.lazy(() => import('./components/AlbumPage'));

export default function App() {
  return (
    <Router basename="/service">
      <Routes>
        <Route
          path="/"
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
    </Router>
  );
}
