import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default Main;
