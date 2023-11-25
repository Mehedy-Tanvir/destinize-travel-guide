import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCartCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="text-xl">
            <Link to="/dashboard/myProfile">
              <CgProfile /> My Profile
            </Link>
          </li>
          <li className="text-xl">
            <Link to="/dashboard/myBookings">
              <BsCartCheckFill /> My Bookings
            </Link>
          </li>
          <li className="text-xl">
            <Link to="/dashboard/myWishlist">
              <FaHeart /> My Wishlist
            </Link>
          </li>
          <li className="text-xl">
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
