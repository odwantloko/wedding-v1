import React from "react";

export const Accomodation = (props) => {
  return (
    <div id="accomodation" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Accommodation</h2>
            <p>Rustenburg offers a wide range of charming guesthouses and accommodation choices that cater to various budgets and personal preferences. 
              To assist you in your search, we've added some suggestions to start with below. Additionally, you also have the option to explore Airbnb listings.</p>
        </div>
        
          <div className="story-items">
            <div>
              <p>                  
                *Disclaimer: The room you end up actually staying in might differ from the one in the picture. To be safe, confirm when booking. 
              </p>
              <br/>
            </div>
            {props.data
              ? props.data.map((d, i) => (
                <div className="col-sm-6 col-md-3 col-lg-3">
                <h3><a href={d.link}
                      className="btn btn-custom btn-lg page-scroll"
                      >{d.title}</a></h3>
                  <p> 
                    <a href={d.map}> 
                      {d.distance}
                    </a>
                    <br/>
                    Contact no: {d.contact}
                  </p>

                  <img src={d.smallImage} className="img-responsive" alt={d.title} />{" "}

                  </div>
                ))
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};
