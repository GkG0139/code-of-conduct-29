import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LoadingOverlay, MantineProvider } from '@mantine/core';

import routes from './pages';
import DiscordButton from './components/discord-button';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <React.Suspense fallback={<LoadingOverlay overlayBlur={3} visible />}>
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
        <DiscordButton />
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
