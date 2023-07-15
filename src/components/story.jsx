import { Image } from "./image";
import React from "react";

export const Story = (props) => {
  return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Story</h2>
            <p>For those who don't know .. </p>
            <p>Somehow we both went to the same university in Cape Town but only met in Joburg in 2018 during a bursary trip. 
              <br/>In 2019, We became close friends. Fastforward to 2020, we decided to try this doing this life thing together and have been inseparable ever since. 
              <br/>We are now extremely delighted to be getting married next Feb and to share our love with our family and friends.
            </p>
        </div>
        <div className="row">
          <div className="story-items">
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
