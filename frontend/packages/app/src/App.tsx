import React, { FC } from 'react';
import * as plugins from './plugins';
import { createApp, SidebarPage } from '@backstage/core';
import { AppSidebar } from './sidebar';
import { lightTheme } from '@backstage/theme';
const app = createApp({
  plugins: Object.values(plugins),
  themes: [{
    id: 'light',
    title: 'Light Theme',
    variant: 'light',
    theme: lightTheme,
  }]
});

const AppProvider = app.getProvider();
const AppRouter = app.getRouter();
const AppRoutes = app.getRoutes();

const App: FC<{}> = () => (
  <AppProvider>
    <AppRouter>
      {/* <SidebarPage>
        <AppSidebar /> */}
        <AppRoutes />
      {/* </SidebarPage> */}
    </AppRouter>
  </AppProvider>
);

export default App;
