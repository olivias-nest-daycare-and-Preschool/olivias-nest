import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { NavBar } from "./components/layout/NavBar";
import { TopBanner } from "./components/layout/TopBanner";
import { HomeSection } from "./components/sections/HomeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { FacilitiesSection } from "./components/sections/FacilitiesSection";
import { GallerySection } from "./components/sections/GallerySection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";
import { TransportSection } from "./components/sections/TransportSection";
import { Cocurricular } from "./components/sections/Co-curricular";
import IndoorFacilitySection from "./components/layout/IndoorFacilitySection";
import OutdoorFacilitySection from "./components/layout/OutdoorFacilitySection";
import News from "./components/sections/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeContainer } from "./components/styles/common/HomeConatiner";
const  App = () =>{
  const theme = {
    colors: {
      orange:"rgba(255,151,0,1.000)",
      white:"rgba(240,247,255,1)",
      green:"rgba(152,219,5,1.000)",
      navyBlue:"rgba(2,12,27,1)",
      lightNavyBlue:"rgba(4,22,48,1)",
      purple:"rgba(58,17,1,1.000)",
      black: "rgba(0,0,0,1.000)",
    },
    mobile:"768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <TopBanner />
    <Router>
    <NavBar />
    
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>

      <Routes>
      <Route path="/AboutUs" element={<AboutSection />} />
      </Routes>
      
      {/* <Container> */}
        <Routes>
        <Route path="/Facilities" element={<FacilitiesSection />} />
        <Route path="/Facilities/Indoor" element={<IndoorFacilitySection />} /> 
        <Route path="/Facilities/Outdoor" element={<OutdoorFacilitySection />} /> 
        </Routes>
      {/* </Container> */}
      <HomeContainer>
      <Routes>
        <Route path="/Gallery" element={<GallerySection />} />
        </Routes>
      </HomeContainer>
       <Routes>
        <Route path="/News" element={<News />} />
       </Routes>

        <Routes>
        <Route path="/ContactUs" element={<ContactSection />} />
        </Routes>

        <Routes>
        <Route path="/Transport" element ={<TransportSection /> } />
        </Routes>

      
        <Routes>
        <Route path="/Co-curricular" element ={<Cocurricular />} />
        </Routes>
    <Footer />
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;