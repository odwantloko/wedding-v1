import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#story" className="page-scroll">
                Our Story
              </a>
            </li>
            <li>
              <a href="#details" className="page-scroll">
                The Details
              </a>
            </li>
            <li>
              <a href="#gettingThere" className="page-scroll">
                Getting There
              </a>
            </li>
            <li>
              <a href="#registry" className="page-scroll">
                Registry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
