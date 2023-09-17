import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="row">
          <div className="story-items">
            {props.data
              ? props.data.map((d, i) => (
               <div key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4" 
                  >
                    <Image
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
