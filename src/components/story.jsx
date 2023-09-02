import { Image } from "./image";
import React from "react";

export const Story = (props) => {
  return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="section-title">
        </div>
        <div className="row">
          <h2>Our Story</h2>  
          <div className="story-items">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="registry">
                    <div className="registry-content">
                    <div className="registry-meta"><h3>{d.name}</h3> </div>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
