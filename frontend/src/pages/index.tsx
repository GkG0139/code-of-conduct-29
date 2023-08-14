import * as React from 'react';

const Nav = React.lazy(() => import('../components/Nav'));
const CheckColor = React.lazy(() => import('./check-color'));

const routes = [
  {
    element: <Nav />,
    children: [
      {
        path: 'check_color',
        element: <CheckColor />,
      },
    ],
  },
];

export default routes;
