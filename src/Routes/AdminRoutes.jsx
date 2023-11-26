import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Spinner from "../Pages/Shared/Spinner/Spinner";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isRole, isRoleLoading] = useRole();
  const location = useLocation();

  if (loading || isRoleLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isRole === "Admin") {
    return children;
  }

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

AdminRoutes.propTypes = {
  children: PropTypes.node,
};
export default AdminRoutes;
