import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './routes/Home.tsx';
import Detail from './routes/Detail.tsx';
import { NotFound } from './routes/NotFound.tsx';
import { BrowserRouter, Outlet, Route, Routes, useParams } from 'react-router';

export function RootLayout() {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#111',
        borderColor: 'red',
        borderRadius: '10px',
      }}
    >
      <Outlet />
    </div>
  );
}

export function UsersLayout() {
  return (
    <div>
      <h1>Users Data</h1>
      <Outlet />
    </div>
  );
}

export function UsersNotFound() {
  const params = useParams();
  return (
    <div>
      <h1>User Not Found</h1>
      <p>{params['*']!}</p>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<UsersLayout />}>
            <Route path="/users/:id" element={<Detail />} />
            <Route path="/users/*" element={<UsersNotFound />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
