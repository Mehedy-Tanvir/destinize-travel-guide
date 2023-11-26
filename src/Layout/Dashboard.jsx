import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCartCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import useRole from "../Hooks/useRole";

const Dashboard = () => {
  const [isRole, isRoleLoading] = useRole();
  return (
    <>
      <label
        htmlFor="my-drawer-2"
        className="mt-[10px] ml-4 bg-slate-300 btn drawer-button lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="h-screen drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center overflow-y-auto drawer-content">
          {/* Page content here */}
          <div className="mt-[200px] lg:mt-[100px]">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="text-xl font-medium">
              <Link to="/dashboard/myProfile">
                <CgProfile className="text-[#4475F2]" /> My Profile
              </Link>
            </li>
            {!isRoleLoading && isRole === "Tourist" && (
              <li className="text-xl font-medium">
                <Link to="/dashboard/myBookings">
                  <BsCartCheckFill className="text-[#4475F2]" /> My Bookings
                </Link>
              </li>
            )}
            {!isRoleLoading && isRole === "Tourist" && (
              <li className="text-xl font-medium">
                <Link to="/dashboard/myWishlist">
                  <FaHeart className="text-[#4475F2]" /> My Wishlist
                </Link>
              </li>
            )}
            {!isRoleLoading && isRole === "Tour Guide" && (
              <li className="text-xl font-medium">
                <Link to="/dashboard/myAssignedTours">
                  <MdOutlineWorkHistory className="text-[#4475F2]" /> My
                  Assigned Tours
                </Link>
              </li>
            )}
            {!isRoleLoading && isRole === "Admin" && (
              <li className="text-xl font-medium">
                <Link to="/dashboard/addPackage">
                  <MdOutlinePostAdd className="text-[#4475F2]" /> Add Package
                </Link>
              </li>
            )}
            {!isRoleLoading && isRole === "Admin" && (
              <li className="text-xl font-medium">
                <Link to="/dashboard/manageUsers">
                  <FaUsersCog className="text-[#4475F2]" /> Manage Users
                </Link>
              </li>
            )}
            <li className="text-xl font-medium">
              <Link to="/">
                <FaHome className="text-[#4475F2]" /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
