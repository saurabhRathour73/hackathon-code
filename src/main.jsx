import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './languageSupport/i18next'; // Import to initialize i18next

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
