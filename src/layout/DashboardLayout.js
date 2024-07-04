import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";

function DashboardLayout() {
  return (
    <>
      <Navbar showLogo={true} showSearchBar={true} />
      <Dashboard />
    </>
  );
}

export default DashboardLayout;
