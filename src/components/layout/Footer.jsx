import {CopyRightInfo, DeveloperInfo, FooterContent,FooterLogo,FooterNav, StyledFooter} from "../styles/layout/Footer.styled";
import { Link } from "react-router-dom";
export const Footer = () =>{
    return (
        <>
        <StyledFooter>
      <FooterContent>
        <FooterLogo>
            <img src="./images/nest.jpg" alt="olivia's nest logo" />
        </FooterLogo>
        <FooterNav>
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Facilities">Facilities</Link>
          <Link to="/Co-curricular">Co-curricular</Link>
          <Link to="/contact-us">Contact Us</Link>
        </FooterNav>
        <FooterLogo>
            <img src="./images/nest.jpg" alt="olivia's nest logo" />
        </FooterLogo>
      </FooterContent>
      <DeveloperInfo>Olivia's Nest International.</DeveloperInfo>
      <DeveloperInfo>All rights reserved</DeveloperInfo>
      <CopyRightInfo>&copy;{new Date().getFullYear()}</CopyRightInfo>
    </StyledFooter>
        </>
    );
};