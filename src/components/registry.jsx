import React from "react";

export const Registry = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="section-title text-center">
          <h2>Registry</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="registry">
                    <div className="registry-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                   
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
