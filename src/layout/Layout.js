import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar showLogo={true} showSearchBar={true} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
