import * as React from 'react';

const CheckColor = React.lazy(() => import('./check-color'));

const routes = [
  {
    path: 'check_color',
    element: <CheckColor />,
  },
];

export default routes;
