import React from "react";
import CountdownTimer from './countdownTimer';

export const Home = (props) => {
  const targetDate = new Date("Feb 4, 2024 00:00:00").getTime();

  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              
              <div className="col-md-8 col-md-offset-2 intro-text">
              
                <h1>
                  {props.data ? props.data.title1 : "Loading"}
                  {props.data ? props.data.and : "Loading"}
                  {props.data ? props.data.title2 : "Loading"}
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
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
