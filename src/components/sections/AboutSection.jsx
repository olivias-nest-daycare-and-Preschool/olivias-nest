import { AboutContent, DullCircle, GradCircle, HeroSocialIcons, ImageContainer, SocialIcon, StyledAboutSection, StyledHeading, StyledImage } from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const AboutSection = () =>{
    return <> 
    <StyledAboutSection id="/AboutUs">
        <ImageContainer>
            <StyledImage src="./images/nest.jpg" alt="olivia's nest jpg file"/>
            <DullCircle/>
            <GradCircle/>
        </ImageContainer>
        {/* <ImageContainer>
            <StyledImage src="./images/about_us.jpg" alt="olivia's nest jpg file"/>
            <DullCircle/>
            <GradCircle/>
        </ImageContainer> */}
        <AboutContent>
            <StyledHeading>
              About Olivia's Nest - <span>👶.</span> 
            </StyledHeading>
            <p>
            Olivia's Nest is an Edu-care center for kids all over Nairobi. We cater for kids starting with kids in
            day-care to kindergarten to pre-school. We are located located in Kileleshwa, Lavington area. 
            In Olivia's Nest, your child will be in a safe setting, in a continuously learning environment to make them 
            the best they can ever be.
            We have a team of caring and competent, and qualified teachers to make your dream of seeing your child 
            excel come true. Teachers, embody skills, knowledge with a little bit of enthusiasm to spark a good impression
            on young developing minds. 
            All are welcome at Olivia's Nest.👶

            </p>
            <p>
            Olivia's Nest is an Edu-care center for kids all over Nairobi. We cater for kids starting with kids in
            day-care to kindergaten to pre-school. We are located located in Kileleshwa, Lavington area. 
            In Olivia's Nest, your child will be in a safe setting, in a continously learning environment to make them 
            the best they can ever be.
            We have a team of caring and competent, and qualified teachers to make your dream of seeing your child 
            excel come true. Teachers, embody skills, knowledge with a little bit of enthusiasm to spark a good impression
            on yound developing minds. 
            All are welcome at Olivia's Nest.👶

            </p>
            <CTAButton href="#ContactUs">Admissions</CTAButton>
        </AboutContent>
                 <HeroSocialIcons>
                    <SocialIcon href="https://www.facebook.com/oliviasnest" target="_blank">
                        <FaFacebook />
                    </SocialIcon>
                    <SocialIcon href="https://api.whatsapp.com/send?phone=%2B254114592463&data=ARBW7i2sNRnh_SYg--pLwrcblva2Sv2XMulYjeVNdJPkAAwwQhvptz5QKOPIj7sX9zoF9WtypFACzr9TJrgt0IECJmJUGeP47zqbWdsrwyhiJmlgxumOZzuLcAa2F-cgiI2UB-ZDwc9GY64pJbAE6VPP2Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3yzQow8PHmNvcndOF-JWg2OZboLEZ9g5syQ6AjO5eokZ5pL1TctkPbAUM" target="_blank">
                        <FaWhatsapp/>
                    </SocialIcon>
                    <SocialIcon href="mailto:oliviasnest1@gmail.com" target="_blank">
                        <FaEnvelope/>
                    </SocialIcon>
                </HeroSocialIcons>
    </StyledAboutSection>
    <hr/>
    </>
};