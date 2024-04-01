import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { NavBar } from "./components/layout/NavBar";
import { TopBanner } from "./components/layout/TopBanner";
import { HomeSection } from "./components/sections/HomeSection";
import { Container } from "./components/styles/common/Container.styled";
import { AboutSection } from "./components/sections/AboutSection";
import { FacilitiesSection } from "./components/sections/FacilitiesSection";
import { GallerySection } from "./components/sections/GallerySection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";
import { TransportSection } from "./components/sections/TransportSection";
import { HomeContainer } from "./components/styles/common/HomeConatiner";
import { Cocurricular } from "./components/sections/Co-curricular";
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
    <Router>
    <TopBanner />
    <NavBar />
    <HomeContainer>
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </HomeContainer>

      <Routes>
      <Route path="/AboutUs" element={<AboutSection />} />
      </Routes>
      
      {/* <Container> */}
        <Routes>
        <Route path="/Facilities" element={<FacilitiesSection />} />
        </Routes>
      {/* </Container> */}
      <Container>
        <Routes>
        <Route path="/Gallery" element={<GallerySection />} />
        </Routes>
      </Container>
        <Routes>
        <Route path="/ContactUs" element={<ContactSection />} />
        </Routes>
      <Container>
        <Routes>
        <Route path="/Transport" element ={<TransportSection /> } />
        </Routes>
      </Container>
      <Container>
        <Routes>
        <Route path="/Co-curricular" element ={<Cocurricular />} />
        </Routes>
      </Container>
    <Footer />
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;