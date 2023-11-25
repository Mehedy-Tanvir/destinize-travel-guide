import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "../../../Components/ButtonPrimary/ButtonPrimary";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

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
      {/* {!loading && user && (
        <li className="md:ml-0 text-[var(--body_color)] text-[16px]">
          <div className="flex flex-col items-start justify-center gap-2 lg:items-center lg:flex-row">
            <img
              className="h-[24px] w-[24px] object-cover object-center rounded-[50%] mr-2"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://imagizer.imageshack.com/img923/6317/jRVw55.png"
              }
              alt=""
            />
            <p className="font-medium normal-case">{user?.displayName}</p>
          </div>
        </li>
      )} */}

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
                to="/dashboard"
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
                  !loading && user?.photoURL
                    ? user.photoURL
                    : "https://imagizer.imageshack.com/img923/6317/jRVw55.png"
                }
                alt=""
              />
            </summary>
            <ul className="p-4">
              <li className="text-[18px] font-semibold text-black">
                Name: {user?.displayName}
              </li>
              <li className="text-[18px] font-semibold text-black">
                Email: {user?.email}
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
                  to="/dashboard"
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
                      ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
                      : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
                  }
                  to="/offers"
                >
                  Offers
                </NavLink>
              </li>

              <li>
                <Link
                  onClick={handleLogout}
                  className="hidden drop-shadow-lg md:block"
                >
                  Logout
                </Link>
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
            className="menu menu-sm dropdown-content gap-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        <ul className="gap-2 px-1 menu menu-horizontal">{listLarge}</ul>
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
