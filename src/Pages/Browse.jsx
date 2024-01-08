import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Browse = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Browse;
