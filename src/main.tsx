import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Main.tsx is loading...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
  throw new Error("Root element with id 'root' not found.");
}

console.log('Root element found, rendering app...');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log('App rendered successfully!');
