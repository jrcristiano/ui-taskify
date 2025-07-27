import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: any;
}

function useAuth() {
  const user = localStorage.getItem('token');
  return { isAuthenticated: !!user };
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
