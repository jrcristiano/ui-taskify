import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.min.css";

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
const Register = lazy(() => import('./pages/Auth/Register'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DefaultLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Carregando...</p>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<div>Carregando registro...</div>}>
            <Register />
          </Suspense>
        ),
      },
      {
        index: true,
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
