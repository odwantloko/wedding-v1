import React, { useState } from "react";

export const Navigation = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavItemClick = () => {
    // Close the navigation bar when a menu item is clicked
    setIsNavCollapsed(true);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${isNavCollapsed ? "active collapsed" : ""}`}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            onClick={handleNavCollapse}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

      <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "in"}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll" onClick={handleNavItemClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#story" className="page-scroll" onClick={handleNavItemClick}>
                Our Story
              </a>
            </li>
            <li>
              <a href="#details" className="page-scroll" onClick={handleNavItemClick}>
                The Details
              </a>
            </li>
            <li>
              <a href="#gettingThere" className="page-scroll" onClick={handleNavItemClick}>
                Getting There
              </a>
            </li>
            <li>
              <a href="#accomodation" className="page-scroll" onClick={handleNavItemClick}>
                Accomodation
              </a>
            </li>
            <li>
              <a href="#registry" className="page-scroll" onClick={handleNavItemClick}>
                Registry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
