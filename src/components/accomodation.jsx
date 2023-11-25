import React from "react";
import AccomHelper from './accomHelper';

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
            {props.data
                ?  
                <div>
                  <AccomHelper dataArray={props.data} maxLength={1} buttonText={"Show Options"} />
                  <p>                  
                      *Disclaimer: The room you end up with might differ from the one in the pictures. Do confirm room details upon booking. 
                  </p>
                  <br/><br/>
              </div>
              : "Loading..."}
        </div>
      </div>
    </div>
  );
};
