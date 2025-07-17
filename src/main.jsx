import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>

)