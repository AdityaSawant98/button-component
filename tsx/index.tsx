import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

// Render React component
const root = createRoot(document.getElementById('app')!);
root.render(<App />);
