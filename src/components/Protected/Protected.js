import { Navigate, useLocation } from "react-router-dom";

import { useAuthState } from "../../modules/auth";

const Protected = ({ children }) => {
  const { user } = useAuthState();
  const location = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default Protected;
