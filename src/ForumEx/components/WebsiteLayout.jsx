import React from "react"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <div id="">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default WebsiteLayout;