import react, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainHeader.js";
import "./MainNavigation.css";
import MainHeader from "./MainHeader.js";
import NavLinks from "./NavLinks.js";
import SideDrawer from "./SideDrawer.js";
import Backdrop from "../UIElements/Backdrop.js";

const MainNavigation = (props) => {
  const [drawerISOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerISOpen ? <Backdrop onClick={closeDrawer}></Backdrop> : null}
      {drawerISOpen ? (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks></NavLinks>
          </nav>
        </SideDrawer>
      ) : null}
      <MainHeader>
        <button className="main-header__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> Your places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
