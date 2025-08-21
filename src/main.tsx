import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.min.css";

import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/Auth/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import DefaultLayout from './layouts/DefaultLayout';

const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));
const PaginatedTaskPage = lazy(() => import('./pages/Tasks/PaginatedTaskPage'));
const CreateTaskPage = lazy(() => import('./pages/Tasks/CreateTaskPage'));
const EditTaskPage = lazy(() => import('./pages/Tasks/EditTaskPage'));

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
            <PaginatedTaskPage />
          </Suspense>
        ),
      },
      {
        path: '/task/create',
        element: (
          <Suspense fallback={<p>Carregando...</p>}>
            <CreateTaskPage />
          </Suspense>
        ),
      },
      {
        path: '/task/:id/edit',
        element: (
          <Suspense fallback={<p>Carregando...</p>}>
            <EditTaskPage />
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
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<div>Carregando...</div>}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        index: true,
        element: <LoginPage />,
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