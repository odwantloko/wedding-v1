import React from "react";

export const Details = (props) => {
  return (
    <div id="details" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>The Details</h2>
          <h3>
            10:30am - 5:30pm
          </h3>
          <h3>
            4 February, 2024 
          </h3>
          <p><b>The wedding ceremony and the reception will be taking place in different parts of the same location</b></p>
          <h3>
            Dress Code: Smart Casual
          </h3>
          <a
            href="#rsvp"
            className="btn btn-custom btn-lg page-scroll"
          >
            RSVP
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
