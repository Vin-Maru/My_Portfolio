import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global styles (if any)
import App from './App';  // Main application component

// Find the root element in the HTML where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component into the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
