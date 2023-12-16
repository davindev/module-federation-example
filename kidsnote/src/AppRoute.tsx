import React from 'react';

import Layout from './components/Layout';
import ReportPage from './components/ReportPage';
import NoticePage from './components/NoticePage';
import AlbumPage from './components/AlbumPage';

const route = {
  path: 'service',
  element: <Layout />,
  children: [
    {
      path: 'report',
      element: <ReportPage />,
    },
    {
      path: 'notice',
      element: <NoticePage />,
    },
    {
      path: 'album',
      element: <AlbumPage />,
    },
  ],
};

export default route;
