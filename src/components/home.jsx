import React from "react";
import CountdownTimer from './countdownTimer';

export const Home = (props) => {
  const targetDate = new Date("Feb 4, 2024 11:00:00").getTime();

  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              
              <div className="col-md-8 col-md-offset-2 intro-text">
              
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <div>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
                <h2>
                  {props.data ? props.data.date : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.address : "Loading"}</p>
                <p> 
              <CountdownTimer targetDate={targetDate} />
            </p>
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
