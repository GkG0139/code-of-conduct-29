import * as React from 'react';

import { LoadingOverlay, MantineProvider } from '@mantine/core';

import DiscordButton from './components/discord-button';

const Nav = React.lazy(() => import('./components/Nav'));
const CheckColor = React.lazy(() => import('./pages/check-color'));

function App() {
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
        <Nav>
          <CheckColor />
        </Nav>
        <DiscordButton />
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
