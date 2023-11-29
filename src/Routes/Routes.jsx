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
import PackageDetails from "../Pages/PackageDetails.jsx/PackageDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllPackages from "../Pages/AllPackages/AllPackages";
import CategoryPackages from "../Pages/CategoryPackages/CategoryPackages";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import AllStories from "../Pages/AllStories/AllStories";
import Congratulations from "../Pages/Congratulations/Congratulations";
import Payment from "../Pages/Payment/Payment";
import Community from "../Pages/Community/Community";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "allPackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "allPackages/:category",
        element: <CategoryPackages></CategoryPackages>,
      },
      {
        path: "allStories",
        element: <AllStories></AllStories>,
      },
      {
        path: "storyDetails/:id",
        element: <StoryDetails></StoryDetails>,
      },
      {
        path: "packageDetails/:id",
        element: (
          <PrivateRoutes>
            <PackageDetails></PackageDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "congratulations",
        element: (
          <PrivateRoutes>
            <Congratulations></Congratulations>
          </PrivateRoutes>
        ),
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "payment/:id",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
