import React from "react";

export const Details = (props) => {
  return (
    <div id="details" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>The Details</h2>
          <div className="section-title">
            <h3>123 Days to go!</h3>
          </div>
          <h3>
            Join us on the 4th of February, 2024 at Hedgehog's Nest, Rustenburg
          </h3>
            <h4>
              11:00am for a 11:30am start
            </h4>
          <br/><br/><br/><br/>
          <p>TThe reception to follow at the same venue.</p>
          <br/><br/>
          <h3>
            Dress Code: Wedding formal. Feel free to wear whatever colours you like! (except white of course!!)
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
