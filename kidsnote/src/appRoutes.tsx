import React from 'react';

import Layout from './components/common/Layout';

const ReportPage = React.lazy(() => import('./components/ReportPage'));
const NoticePage = React.lazy(() => import('./components/NoticePage'));
const AlbumPage = React.lazy(() => import('./components/AlbumPage'));

const appRoutes = [
  {
    path: '/',
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
  },
];

export default appRoutes;
