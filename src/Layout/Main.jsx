import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="min-h-screen max-w-[1400px] mx-auto px-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
