import React from "react";

export const Accomodation = (props) => {
  return (
    <div id="accomodation" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Accommodation</h2>
            <p>Rustenburg offers a wide range of charming guesthouses and accommodation choices that cater to various budgets and personal preferences. 
              To assist you in your search, we've curated a selection of suggestions below. 
              The options are ordered by nearest distance to the venues. Additionally, you also have the option to explore Airbnb listings.</p>
        </div>
        
          <div className="story-items">
            {props.data
              ? props.data.map((d, i) => (
                <div className="col-sm-6 col-md-3 col-lg-3">
                <h3><a href={d.link}>{d.title}</a></h3>
                  <img src={d.smallImage} className="img-responsive" alt={d.title} />{" "}
                  <p>
                    <a href={d.map}> 
                      {d.distance}
                    </a>
                  </p>
                  </div>
                ))
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};
