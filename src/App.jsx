import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Home } from "./components/home";
import { Story } from "./components/story";
import { Gallery } from "./components/gallery";
import { Details } from "./components/details";
import { GettingThere } from "./components/gettingThere";
import { Registry } from "./components/registry";
import { Team } from "./components/Team"; // bridal party
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Accomodation } from "./components/accomodation";

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
      {/* <Navigation /> */}
      <Home data={landingPageData.Home} />
      <Story data={landingPageData.Story} /> 
      <Details data={landingPageData.Details} /> 
      <GettingThere data={landingPageData.GettingThere} /> 
      <Accomodation data={landingPageData.Accomodation} /> 
      <Registry data={landingPageData.Registry} /> 
    </div>
  );
};

export default App;
