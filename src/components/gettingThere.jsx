import React from "react";

export const GettingThere = (props) => {
  return (
    <div id="getting-there" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Getting There</h2>
          <p>
            For directions on how to get there, you can use this Google Maps link: 
            <br/>
            <a href="https://www.google.com/maps/place/Hedgehog's+Nest/@-25.648849,27.162285,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN_QbpvUwDW0wRiKh2A4dHDDxUmrGeCqQPnro07!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN_QbpvUwDW0wRiKh2A4dHDDxUmrGeCqQPnro07%3Dw128-h86-k-no!7i3310!8i2207!4m7!3m6!1s0x1ebe0bec95843afb:0xb6bcbb52b8c86fff!8m2!3d-25.648849!4d27.162285!10e5!16s%2Fg%2F1tfpm2p6?entry=ttu">
            Hedgehog's nest 
            </a>
          </p>
          <h2>Accommodation</h2>
            <p>If you require nearby lodging, here are a few suggested accommodation choices: </p>
        </div>
        
          <div className="story-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <h3>{d.title}</h3>
                    <img src={d.smallImage} className="img-responsive" alt={d.title} />{" "}

                  </div>
                ))
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};
