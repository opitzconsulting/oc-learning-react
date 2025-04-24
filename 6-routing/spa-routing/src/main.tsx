import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './routes/Home.tsx';
import Detail from './routes/Detail.tsx';
import { NotFound } from './routes/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
