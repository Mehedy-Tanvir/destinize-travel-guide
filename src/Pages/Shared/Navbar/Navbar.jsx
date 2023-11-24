import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "../../../Components/ButtonPrimary/ButtonPrimary";

const Navbar = () => {
  const listSmall = (
    <>
      <li>
        <Link
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] underline drop-shadow-lg normal-case font-poppins font-normal text-[16px]"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
        >
          Profile
        </Link>
        <ul className="p-2">
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] underline drop-shadow-lg normal-case font-poppins font-normal text-[16px]"
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
      <li className="md:hidden">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#4475F2] border-2 border-[#4475F2] drop-shadow-lg normal-case font-poppins font-normal text-[16px] hover:shadow-sm hover:bg-white"
              : "text-[#222] drop-shadow-lg normal-case font-normal text-[16px]"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );
  const listLarge = (
    <>
      <li tabIndex={0}>
        <details>
          <summary className="text-[#222] drop-shadow-lg normal-case font-normal text-[16px]">
            Profile
          </summary>
          <ul className="p-2">
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
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
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
    <div className="navbar bg-base-100 max-w-[1400px] mx-auto px-2">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listSmall}
          </ul>
        </div>
        <div className="flex gap-2">
          <img src="/logo.png" alt="" />
          <p className="text-xl font-bold">Destinize</p>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{listLarge}</ul>
      </div>
      <div className="navbar-end">
        <div className="hidden md:block">
          <ButtonPrimary>Login</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
