import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "../../../Components/ButtonPrimary/ButtonPrimary";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { logoutUser, user, loading } = useAuth();
  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");
    logoutUser()
      .then(() => {
        toast.success("Logged out successfully", { id: toastId });
      })
      .catch((error) => toast.error(error.message, { id: toastId }));
  };
  const listSmall = (
    <>
      {!loading && user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "lg:text-[#4475F2] underline drop-shadow-lg normal-case font-poppins font-normal text-[16px]"
                : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
            }
          >
            <img
              className="h-[24px] w-[24px] object-cover object-center rounded-[50%] mr-2"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://imagizer.imageshack.com/img923/6317/jRVw55.png"
              }
              alt=""
            />
          </NavLink>
          <ul className="p-2">
            <li>{user?.displayName}</li>
            <li>{user?.email}</li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                    : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                }
                to="/dashboard/myProfile"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                    : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                }
              >
                Offers
              </NavLink>
            </li>
          </ul>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/community"
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
      {!loading && !user && (
        <li className="md:hidden">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
      {!loading && user && (
        <li className="md:hidden">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
            }
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </li>
      )}
    </>
  );
  const listLarge = (
    <>
      {!loading && user && (
        <li tabIndex={0}>
          <details>
            <summary className="text-[#222] drop-shadow-lg normal-case font-normal text-[16px]">
              <img
                className="h-[24px] w-[24px] object-cover object-center rounded-[50%] mr-2"
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://imagizer.imageshack.com/img923/6317/jRVw55.png"
                }
                alt=""
              />
            </summary>
            <ul className="p-4">
              <li className="text-[18px] font-medium">
                <div style={{ pointerEvents: "none" }} className="">
                  <CgProfile className="text-[#4475F2]" />{" "}
                  <p>{user?.displayName}</p>
                </div>
              </li>
              <li className="text-[18px] font-medium">
                <div style={{ pointerEvents: "none" }}>
                  <MdEmail className="text-[#4475F2]" /> <p>{user?.email}</p>
                </div>
              </li>
              <li>
                <Link to="/dashboard/myProfile">
                  {" "}
                  <div className="flex items-center justify-center gap-2 font-medium text-[18px]">
                    <MdDashboardCustomize className="text-[#4475F2]" />{" "}
                    <p>Dashboard</p>
                  </div>
                </Link>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
                      : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                  }
                  to="/offers"
                >
                  <div className="flex items-center justify-center gap-2 font-medium text-[18px]">
                    <MdOutlineLocalOffer className="text-[#4475F2]" />{" "}
                    <p>Offers</p>
                  </div>
                </NavLink>
              </li>

              <li
                onClick={handleLogout}
                className="hidden drop-shadow-lg md:block"
              >
                <div className="flex items-center justify-start gap-2 font-medium text-[18px]">
                  <IoLogOut className="text-[#4475F2]" /> <p>Logout</p>
                </div>
              </li>
            </ul>
          </details>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/community"
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#FEFCFB] max-w-[1400px] mx-auto px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="z-20 gap-2 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {listSmall}
          </ul>
        </div>
        <div className="flex gap-2 drop-shadow-lg">
          <img src="/logo.png" alt="" />
          <p className="text-xl font-bold">Destinize</p>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="z-20 gap-2 px-1 menu menu-horizontal">{listLarge}</ul>
      </div>
      <div className="navbar-end">
        {!loading && user && (
          <div className="hidden md:block" onClick={handleLogout}>
            <Link className="drop-shadow-lg">
              <ButtonPrimary>Logout</ButtonPrimary>
            </Link>
          </div>
        )}
        {!loading && !user && (
          <div className="hidden md:block">
            <Link className="drop-shadow-lg" to="/login">
              <ButtonPrimary>Login</ButtonPrimary>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
