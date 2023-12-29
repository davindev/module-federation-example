import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/common/Layout';

const OperationLogsPage = React.lazy(() => import('./components/OperationLogsPage'));
const TeacherManagePage = React.lazy(() => import('./components/TeacherManagePage'));
const ChildManagePage = React.lazy(() => import('./components/ChildManagePage'));

export default function App() {
  return (
    <Router basename="/e-docs">
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="operation-logs"
            element={<OperationLogsPage />}
          />
          <Route
            path="teacher-manage"
            element={<TeacherManagePage />}
          />
          <Route
            path="child-manage"
            element={<ChildManagePage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
