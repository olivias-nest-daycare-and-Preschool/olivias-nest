import {ContactInfo, 
    CopyRightInfo, 
    DeveloperInfo, 
    DeveloperInfoContainer, 
    FooterCard, 
    FooterContent,
    FooterLogo,
    FooterLogoRight,
    FooterNav, 
    RightFooterCard, 
    StyledFooter} from "../styles/layout/Footer.styled";
import { Link } from "react-router-dom";
import {FaFacebook,
    FaTiktok, 
    FaWhatsapp,
    FaHeart
} from "react-icons/fa";

import { NavLink, SocialIcons } from "../styles/layout/Nav.styled";
import FancyListSample from "../sections/FancyListSample";
import { FancyList, FancyListItem } from "../styles/sections/FancyListSample.styled";
export const Footer = () =>{
    return (
        <>
        <StyledFooter>
        <FooterLogo>
            <img src="./images/logo.png" alt="olivia's nest logo" />
        </FooterLogo>

        <FooterContent>
       <ContactInfo>
            <a href="mailto:oliviasnest1@gmail.com">🙋‍♀️ oliviasnest1@gmail.com 🙋‍♀️</a>
            </ContactInfo>
       </FooterContent>

       <FooterContent>
       <FooterNav>
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Facilities">Facilities</Link>
          <Link to="/Co-curricular">Co-curricular</Link>
          <Link to="/Transport">Transport</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <Link to="/News">News</Link>
        </FooterNav>
       </FooterContent>

       <FooterContent>
        <ContactInfo>
            <p>Olivia's Nest International & Kindergaten</p>
        </ContactInfo>
       </FooterContent>

       <FooterLogoRight>
       <img src="./images/logo.png" alt="olivia's nest logo" />
       </FooterLogoRight>

           <FooterContent>
           <ContactInfo>
           <SocialIcons>
            <NavLink href="https://www.facebook.com/oliviasnest" target="_blank">
            <FaFacebook/>
            </NavLink>                      
            <NavLink 
            href="https://api.whatsapp.com/send?phone=%2B254114592463&data=ARBW7i2sNRnh_SYg--pLwrcblva2Sv2XMulYjeVNdJPkAAwwQhvptz5QKOPIj7sX9zoF9WtypFACzr9TJrgt0IECJmJUGeP47zqbWdsrwyhiJmlgxumOZzuLcAa2F-cgiI2UB-ZDwc9GY64pJbAE6VPP2Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3yzQow8PHmNvcndOF-JWg2OZboLEZ9g5syQ6AjO5eokZ5pL1TctkPbAUM" 
            target="_blank">
            <FaWhatsapp/>
            </NavLink>
            <NavLink href="#" target="_blank">
            <FaTiktok/>
            </NavLink>
          </SocialIcons>
           </ContactInfo>
           </FooterContent>

           <FooterCard>
           <h2>VALUES</h2>
           <FancyListSample />
            </FooterCard>

            <RightFooterCard> 
            <h2>LOCATION</h2>
            <FancyList>
            <FancyListItem> 
                <a href="https://www.google.com/maps/dir//25+Othaya+Rd,+Nairobi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x182f1a04f14cf613:0x49a93b971a9cc023?sa=X&ved=1t:707&ictx=111" 
            target="_blank" rel="noopener noreferrer">25 Othaya Rd.</a></FancyListItem>
            <FancyListItem>Kileleshwa/Lavington</FancyListItem>
            <FancyListItem>00603-Nairobi</FancyListItem>
            </FancyList>
            </RightFooterCard>

           <hr />
        <DeveloperInfoContainer>
        <DeveloperInfo>
            <FooterContent>
            <FaHeart /> Olivia's Nest International.<FaHeart />
            </FooterContent>
        </DeveloperInfo>
        <DeveloperInfo> 
            <FooterContent>
            All rights reserved
            </FooterContent>
        </DeveloperInfo>
        <CopyRightInfo>&copy;{new Date().getFullYear()}</CopyRightInfo>
        </DeveloperInfoContainer>
    </StyledFooter>
    <div></div>
        </>
    );
};