import { AboutContent, DullCircle, GradCircle, ImageContainer, StyledAboutSection, StyledHeading, StyledImage } from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";

export const AboutSection = () =>{
    return <> 
    <StyledAboutSection id="AboutUs">
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
            day-care to kindergaten to pre-school. We are located located in Kileleshwa, Lavington area. 
            In Olivia's Nest, your child will be in a safe setting, in a continously learning environment to make them 
            the best they can ever be.
            We have a team of caring and competent, and qualified teachers to make your dream of seeing your child 
            excel come true. Teachers, embody skills, knowledge with a little bit of enthusiasm to spark a good impression
            on yound developing minds. 
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
    </StyledAboutSection>
    <hr/>
    </>
};