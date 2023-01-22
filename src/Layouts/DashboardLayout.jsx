import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
