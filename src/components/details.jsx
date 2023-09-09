import React from "react";

export const Details = (props) => {
  return (
    <div id="details" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>The Details</h2>
          <h3>
            Please join us on the 4th of February, 2024 at Hedgehog's Nest, Rustenburg
          </h3>
          <h4>
            10:30am - 5:30pm
          </h4>
          <br/><br/><br/><br/>
          <p>The wedding ceremony and the reception will be taking place at the same venue.</p>
          <br/><br/>
          <h3>
            Dress Code: Wedding formal
          </h3>
          <br/><br/>
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
