import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "components/Header";
import Menu from "components/Menu";

const HorizontalLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="layoutWrapper">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
    </div>
  );
};

export default HorizontalLayout;
