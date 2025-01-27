import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';
const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </StrictMode>
)