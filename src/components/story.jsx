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
            // props.data.map((d, i) => (
            //     <div key={`${d.name}-${i}`} className="col-md-4">
            //       <div className="registry">
            //         <div className="registry-content">
            //         <div className="registry-meta"><h3>{d.name}</h3> </div>
            //           <p>{d.text}</p>

            //         </div>
            //       </div>
            //     </div>
            //   ))
            : "loading"}

          </div>
        </div>
      </div>
    </div>
  );
};
