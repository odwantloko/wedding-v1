import React from "react";
import ReadMoreSection from './readMoreSection';


export const Story = (props) => {
  const initialText = "Test"
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
              <ReadMoreSection dataArray={props.data} maxLength={1} />
            : "loading"}

          </div>
        </div>
      </div>
    </div>
  );
};
