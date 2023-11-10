import React from "react";

export const Registry = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="section-title text-center">
          <h2>Registry</h2>
          <div className="registry-content">
            <p>Your presence on our special day means the world to us, and your love and support are the greatest gifts we could ever ask for. 
              If you'd like to help us start this new chapter in our lives with a little something extra, we have some options below:
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
                    <div className="registry-content">
                      <div className="registry-meta">
                        <p>
                          <a href={d.link}>{d.name}</a>
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      <div id="footer">
        <p>This website has been made with Love, by the bride :)</p>
      </div>
      </div>
    </div>
  );
};
