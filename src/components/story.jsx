import React from "react";

export const Story = (props) => {
  return (
    <div id="story" className="text-center">
      <div className="container">
        <div className="section-title">
        </div>
        <div className="section-title">
          <h2>Our Story</h2>  
          <div className="story-items">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="registry">
                    <div className="registry-content">
                    <div className="registry-meta"><h3>{d.name}</h3> </div>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}

    {/*,
    {
      "img": "img/testimonials/02.jpg",
      "text": "We invite you to join us on this extraordinary journey as we celebrate our love, our bond, and the beautiful story that has brought us here. Thank you for being a part of our love story, including our adventures with Vinnie!",
      "name": ""
    }*/}
          </div>
        </div>
      </div>
    </div>
  );
};
