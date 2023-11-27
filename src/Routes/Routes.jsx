import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/MyProfile/MyProfile";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyWishlist from "../Pages/MyWishlist/MyWishlist";
import MyAssignedTours from "../Pages/MyAssignedTours/MyAssignedTours";
import AddPackage from "../Pages/AddPackage/AddPackage";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import TourGuideRoutes from "./TourGuideRoutes";
import TourGuideDetails from "../Pages/TourGuideDetails/TourGuideDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "tourGuide/:id",
        element: <TourGuideDetails></TourGuideDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myProfile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoutes>
            <MyBookings></MyBookings>
          </PrivateRoutes>
        ),
      },
      {
        path: "myWishlist",
        element: (
          <PrivateRoutes>
            <MyWishlist></MyWishlist>
          </PrivateRoutes>
        ),
      },
      {
        path: "myAssignedTours",
        element: (
          <PrivateRoutes>
            <TourGuideRoutes>
              <MyAssignedTours></MyAssignedTours>
            </TourGuideRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "addPackage",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <AddPackage></AddPackage>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <ManageUsers></ManageUsers>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
