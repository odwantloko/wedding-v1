import React from "react";

export const Registry = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="section-title text-center">
          <h2>Registry</h2>
          <div className="registry-content">
            <p>
              If you'd like to help us start this new chapter in our lives with a little something extra, here is a link to our optional registry:
            </p>
        
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                  <div className="registry">

                    <div className="registry-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}

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
        Thank you for your love & support, <br/>From Nelson & Odwa
      </div>
      </div>
    </div>
  );
};
