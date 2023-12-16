import React from 'react';

import GlobalLayout from './GlobalLayout';

import KidsnoteRoute from 'kidsnote/AppRoute';

const route = {
  path: '/',
  element: <GlobalLayout />,
  children: [
    KidsnoteRoute,
  ],
};

export default route;
