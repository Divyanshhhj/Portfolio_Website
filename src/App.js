import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Skills } from "./Pages/Skills";
import { Contact } from "./Pages/Contact";
import { FooterBar } from "./Pages/FooterBar";

export const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (str) => {
    switch (str) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Portfolio":
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        console.log("no match for ref found");
        break;
    }
  };

  return (
    <Box>
      <div ref={homeRef}>
        <Home callButton={(str) => handleClick(str)} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <FooterBar />
    </Box>
  );
};
