import {ContactInfo, CopyRightInfo, DeveloperInfo, FooterContent,FooterLogo,FooterNav, StyledFooter} from "../styles/layout/Footer.styled";
import { Link } from "react-router-dom";
import {FaFacebook,FaTiktok, FaWhatsapp} from "react-icons/fa";
import { NavLink, SocialIcons } from "../styles/layout/Nav.styled";
export const Footer = () =>{
    return (
        <>
        <StyledFooter>
      <FooterContent>
        <FooterLogo>
            <img src="./images/logo.png" alt="olivia's nest logo" />
        </FooterLogo>
        <FooterLogo>
            <ContactInfo>
            <a href="mailto:oliviasnest1@gmail.com">🙋‍♀️ oliviasnest1@gmail.com 🙋‍♀️</a>
            </ContactInfo>
        </FooterLogo>

        <FooterNav>
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Facilities">Facilities</Link>
          <Link to="/Co-curricular">Co-curricular</Link>
          <Link to="/Transport">Transport</Link>
          <Link to="/Gallery">Gallery</Link>
        </FooterNav>
        <FooterLogo>
        <ContactInfo>
            <a href="mailto:oliviasnest1@gmail.com">🙋‍♀️ oliviasnest1@gmail.com 🙋‍♀️</a>
            </ContactInfo>
        </FooterLogo>
        <FooterLogo>
           <ContactInfo>
           <SocialIcons>
<NavLink href="https://www.facebook.com/oliviasnest" target="_blank">
<FaFacebook/>
</NavLink>                      
<NavLink href="https://api.whatsapp.com/send?phone=%2B254114592463&data=ARBW7i2sNRnh_SYg--pLwrcblva2Sv2XMulYjeVNdJPkAAwwQhvptz5QKOPIj7sX9zoF9WtypFACzr9TJrgt0IECJmJUGeP47zqbWdsrwyhiJmlgxumOZzuLcAa2F-cgiI2UB-ZDwc9GY64pJbAE6VPP2Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3yzQow8PHmNvcndOF-JWg2OZboLEZ9g5syQ6AjO5eokZ5pL1TctkPbAUM" 
                                    target="_blank">
<FaWhatsapp/>
</NavLink>
<NavLink href="#" target="_blank">
<FaTiktok/>
</NavLink>
</SocialIcons>
           </ContactInfo>
        </FooterLogo>
      </FooterContent>
      <DeveloperInfo>Olivia's Nest International.</DeveloperInfo>
      <DeveloperInfo>All rights reserved</DeveloperInfo>
      <CopyRightInfo>&copy;{new Date().getFullYear()}</CopyRightInfo>
    </StyledFooter>
        </>
    );
};