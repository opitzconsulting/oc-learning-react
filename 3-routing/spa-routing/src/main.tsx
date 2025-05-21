import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './routes/Home.tsx';
import Detail from './routes/Detail.tsx';
import { NotFound } from './routes/NotFound.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
