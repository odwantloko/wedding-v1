import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Home } from "./components/home";
import { Story } from "./components/story";
import { Gallery } from "./components/gallery";
import { Details } from "./components/details";
import { GettingThere } from "./components/gettingThere";
import { Registry } from "./components/registry";
import { Team } from "./components/Team"; // bridal party
import { Contact } from "./components/contact"; // rsvp
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
      {/* <Gallery data={landingPageData.Gallery} /> * pictures */}
       {/** <Team data={landingPageData.Team} /> bridal party */}
      <Details data={landingPageData.Details} />  {/** the details venue + time */}
      {/** <Contact data={landingPageData.Contact} />  RSVP .. might make it a separate page from a button*/} 
      <GettingThere data={landingPageData.GettingThere} /> {/** Getting there - venue plus nearby accom */}
      <Registry data={landingPageData.Registry} /> {/** registry details */}
    </div>
  );
};

export default App;
