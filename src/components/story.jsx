import { Image } from "./image";
import React from "react";

export const Story = (props) => {
  return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-2 section-title">
          <h2>Our Story</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
