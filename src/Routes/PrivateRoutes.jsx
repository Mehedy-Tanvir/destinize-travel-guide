import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    if (!user) {
      return <Navigate state={location.pathname} to="/login"></Navigate>;
    } else {
      return children;
    }
  }
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
