import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const TourGuideRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isRole, isRoleLoading] = useRole();
  const location = useLocation();

  if (loading || isRoleLoading) {
    return <Spinner></Spinner>;
  }

  if (user && isRole === "Tour Guide") {
    return children;
  }

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

TourGuideRoutes.propTypes = {
  children: PropTypes.node,
};
export default TourGuideRoutes;
