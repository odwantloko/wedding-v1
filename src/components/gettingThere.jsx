import React from 'react';
import ReadMoreSection from './readMoreSection';

export const GettingThere = (props) => {
  return (
    <div id="gettingThere" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Getting There</h2>
          <p>
            First of all, thank you all so much for your afforts in attending. It really means the world to us. We appreciate your love and support for our special day. <br/><br/>
            For the exact location of the venue, you can use this Google Maps link: 
            <br/>
            <a href="https://www.google.com/maps/place/Hedgehog's+Nest/@-25.648849,27.162285,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN_QbpvUwDW0wRiKh2A4dHDDxUmrGeCqQPnro07!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN_QbpvUwDW0wRiKh2A4dHDDxUmrGeCqQPnro07%3Dw128-h86-k-no!7i3310!8i2207!4m7!3m6!1s0x1ebe0bec95843afb:0xb6bcbb52b8c86fff!8m2!3d-25.648849!4d27.162285!10e5!16s%2Fg%2F1tfpm2p6?entry=ttu">
            Hedgehog's nest 
            </a>
          </p>
          <br/>
          {props.data
            ? 
            <>
              <ReadMoreSection dataArray={props.data} maxLength={1} buttonText={"Show Options"} />
            </>   
            : "loading"}

        </div>
      </div>
    </div>
  );
};
