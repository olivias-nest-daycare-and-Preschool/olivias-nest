import { DeveloperInfo, FooterNav, StyledFooter} from "../styles/layout/Footer.styled";

export const Footer = () =>{
    return (
        <>
        <StyledFooter>
            <FooterNav>
            <a href="#AboutUs">About Us</a>
            <a href="#Gallery">Gallery</a>
            <a href="#Facilities">Facilities</a>
            <a href="#Co-curricular">Co-curricular</a>
            </FooterNav>
            Olivias' Nest 👶
            <DeveloperInfo>
                All rights reserved
            </DeveloperInfo>
            <div>
                &copy;
                {new Date().getFullYear()}
            </div>
        </StyledFooter>
        </>
    );
};