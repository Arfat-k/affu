// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// ✅ Import and initialize AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,      // Animation duration
  once: true,          // Animate only once
  easing: 'ease-in-out'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
