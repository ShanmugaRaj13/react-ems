import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, role }) => {
  const  user  = useSelector((state) => state.login.user);

  if (!user) {
    console.log(user);
    
    return <Navigate to="/"/>;
  }

  if (role && user.role === "admin") {
    return <Navigate to="/admin"/>;
  }
  if (role && user.role === "employee") {
    return <Navigate to="/employee"/>;
  }

  return children;
};

export default ProtectedRoute;
