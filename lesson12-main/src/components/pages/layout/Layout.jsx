import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
