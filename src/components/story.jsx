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
          {props.data
            ? 
            <>
              <ReadMoreSection dataArray={props.data} maxLength={1} buttonText={"Read the rest"}/>
              <ImageCarousel dataArray={props.data} />
            </>   
            : "loading"}

          </div>
        </div>
      </div>
    </div>
  );
};
