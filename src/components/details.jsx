import React from "react";

export const Details = (props) => {

  const targetDate = new Date("Feb 4, 2024 11:00:00").getTime();


  return (
    <div id="details" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>The Details</h2>
          <div className="section-title">
          </div>
          <h3>
            Join us on the 4th of February, 2024 at Hedgehog's Nest, Rustenburg
          </h3>
            <h4>
              11:00am for an 11:30am start
            </h4>
          <br/><br/><br/><br/>
          <p>The reception will follow at the same location .</p>
          <br/><br/>
          <h3>
            Dress Code: Wedding formal. 
          </h3>
          <p>Feel free to wear whatever colours you like! (except for white of course!)</p>
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
