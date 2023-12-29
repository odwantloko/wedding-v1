import React from "react";

export const Registry = (props) => {
  return (
    <div id="registry">
      <div className="container">
        <div className="section-title text-center">
          <h2>Registry</h2>
          <div className="registry-content">
              <p>
                If you'd like to help us start this new chapter in our lives with a little something extra, we have added links to our gift registries below. We will also be accepting gift vouchers on the day.
              </p>
              <br/>
              <h3>
                How does the registry work?
              </h3>
              <p>
                When you buy something from a registy, you purchase it online (through the link) but it gets <b>delivered to our home</b> on our wedding day.
                This means that you don't have to buy a physical gift and carry it with you. There is also an option to add a gift voucher if you'd like to instead.
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
