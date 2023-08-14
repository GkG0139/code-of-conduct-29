import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

import routes from './pages';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <React.Suspense fallback={<>a</>}>
      <MantineProvider
        theme={{
          globalStyles: () => ({
            'html, body, #root': {
              height: '100%',
            },
          }),
          fontFamily: "'Noto Sans Thai', sans-serif",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
