import AuthUser from './auth/AuthUser';
import { Navigate } from 'react-router-dom';

function Protected({ children }) {
  const { token } = AuthUser();

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default Protected;
