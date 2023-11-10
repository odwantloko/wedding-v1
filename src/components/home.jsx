import React from "react";

export const Home = (props) => {
  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              
              <div className="col-md-8 col-md-offset-2 intro-text">
              <div>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                  <br/><br/>
                </h1>
                <h2>
                  {props.data ? props.data.date : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.address : "Loading"}</p>
                <a
                  href="#details"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  More Details
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
