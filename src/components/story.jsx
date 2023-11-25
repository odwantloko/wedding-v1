import React from "react";
import ReadMoreSection from './readMoreSection';
import { ImageCarousel } from "./imageCarousel";


export const Story = (props) => {
  return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="section-title">
        </div>
        <div className="section-title">
          <h2>Our Love Story</h2>  
          <div className="story-items">
            <p>Over the years, we've been blessed with some wonderful moments. With too many to share, we've captured some of our cherished highlights that helped defined our journey, inviting you to relive the magic that brought us to this point.</p>
          {props.data
            ? 
            <>
              <img src="img/timeline.png" className="img-responsive"  alt={`timeline`} />
              <ImageCarousel dataArray={props.data} />
            </>   
            : "loading"}

          </div>
        </div>
      </div>
    </div>
  );
};
