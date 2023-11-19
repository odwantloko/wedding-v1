import React from "react";

export const Registry = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="section-title text-center">
          <h2>Registry</h2>
          <div className="registry-content">
            <p>
              If you'd like to help us start this new chapter in our lives with a little something extra, here is a link to our registry:
            </p>
        
          </div>
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
                  <div className="registry-meta">
                  <a href={d.link}>                   
                      {d.name}
                  </a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      <div id="footer">
        Thank you for your love & support, <br/>The Kadamas
      </div>
      </div>
    </div>
  );
};
