import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/MyProfile/MyProfile";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyWishlist from "../Pages/MyWishlist/MyWishlist";

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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myProfile",
        index: true,
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myBookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "myWishlist",
        element: <MyWishlist></MyWishlist>,
      },
    ],
  },
]);

export default Routes;
