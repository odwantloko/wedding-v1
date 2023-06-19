import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Home } from "./components/home";
import { Story } from "./components/story";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Home data={landingPageData.Home} />
      <Story data={landingPageData.Story} /> {/** our story */}
       {/** <Team data={landingPageData.Team} /> bridal party */}
      <Services data={landingPageData.Services} />  {/** the details venue + time */}
      {/** <Contact data={landingPageData.Contact} />  RSVP .. might make it a separate page from a button*/} 
      <Gallery data={landingPageData.Gallery} /> {/** Getting there - venue plus nearby accom */}
      <Testimonials data={landingPageData.Testimonials} /> {/** registry details */}
    </div>
  );
};

export default App;
