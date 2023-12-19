import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalLayout from './GlobalLayout';

const ReportPage = React.lazy(() => import('kidsnote/ReportPage'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<GlobalLayout />}
        >
          <Route path="service">
            <Route
              path="report"
              element={<ReportPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
