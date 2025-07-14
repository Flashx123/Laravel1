import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';

// ✅ Import TanStack Query tools
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ✅ Create a query client instance
const queryClient = new QueryClient();

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App {...props} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  },
  // progress: {
  //   color: '#4B5563',
  // },
});
