import React, { useState } from "react";
import { navigation } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [showSideNav, setShowSideNav] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const activeNavigation = (id) => {
    navigation.forEach((item) => {
      if (item.id === id) {
        setActive(id);
      }
      return;
    });
  };
  const openSideBar = () => {
    setShowSideNav(!showSideNav);
    setAriaExpanded(!ariaExpanded);
  };

  return (
    <header className="flex pb-8 pt-4 text-primary-2">
      <button
        className={`block md:hidden fixed right-0 z-30 w-8 h-8 bg-no-repeat ${
          showSideNav ? "bg-close-icon" : "bg-menu-icon"
        }`}
        aria-controls="primary-navigation"
        onClick={openSideBar}
      >
        <span className="sr-only">Menu</span>
      </button>
      <div className="flex items-center gap-52">
        <div>
          <img src="images/logo.png" alt="" className="h-full w-full " />
        </div>
        <ul
          id="primary-navigation"
          className={`
          flex gap-6 md:gap-10 flex-col md:flex-row 
          capitalize text-lg w-2/3 fixed
          items-end
          md:pt-0
          pr-4 pt-10
          transition
          ${showSideNav ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0
          md:relative top-0 right-0 h-screen 
          bg-light-blue md:bg-dark-blue md:h-auto`}
        >
          {navigation.map((item) => {
            return (
              <li
                className={`${
                  active === item.id ? "text-light-green font-semibold" : null
                } `}
                key={item.id}
                onClick={() => {
                  activeNavigation(item.id);
                  openSideBar();
                }}
              >
                <Link
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
