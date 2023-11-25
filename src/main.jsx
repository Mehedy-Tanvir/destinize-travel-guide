import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="overflow-x-hidden bg-[#FEFCFB]">
          <Toaster />
          <RouterProvider router={Routes} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
