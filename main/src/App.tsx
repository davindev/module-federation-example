import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalLayout from './GlobalLayout';

const KidsnoteApp = React.lazy(() => import('kidsnote/App'));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<GlobalLayout />}
        >
          <Route
            path="/service/*"
            element={<KidsnoteApp />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
