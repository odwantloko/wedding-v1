import { ImageCarousel } from "./imageCarousel";
import React from "react";


export const Gallery = (props) => {
    return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="row">
            {props.data
              ?
                <ImageCarousel dataArray={props.data} />
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};


//                        <img src={d.smallImage} className="img-responsive" />
// props.data.map((d, i) => (
//     <div key={`${i}`}>
//         <ImageCarousel dataArray={d.smallImage} />
//     </div>
// ))