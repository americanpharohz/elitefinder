import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('🚀 main.tsx starting...');
console.log('Current URL:', window.location.href);

// Test if React is available
console.log('React available:', typeof StrictMode !== 'undefined');

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement);

if (!rootElement) {
  console.error('❌ Root element not found!');
  document.body.innerHTML = `
    <div style="padding: 20px; background: #ffebee; color: #d32f2f;">
      <h1>Error: Root element not found</h1>
      <p>The element with id="root" was not found in the DOM.</p>
    </div>
  `;
  throw new Error("Root element with id 'root' not found.");
}

try {
  console.log('🎯 Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('🎨 Rendering App component...');
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  console.log('✅ App rendered successfully!');
} catch (error) {
  console.error('❌ Error rendering app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; background: #ffebee; color: #d32f2f;">
      <h1>React Rendering Error</h1>
      <p>Failed to render the React application.</p>
      <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${error}</pre>
    </div>
  `;
}