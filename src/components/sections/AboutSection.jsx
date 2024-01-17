import { AboutContent, ImageContainer, StyledAboutSection, StyledHeading, StyledImage } from "../styles/sections/AboutSection.styled";

export const AboutSection = () =>{
    return <> 
    <StyledAboutSection>
        <ImageContainer>
            <StyledImage src="./images/nest.jpg" alt="olivia's nest jpg file"/>
        </ImageContainer>
        <AboutContent>
            <StyledHeading>
                Hello 
                <span>👋</span>
            </StyledHeading>
        </AboutContent>
    </StyledAboutSection>
    <hr/>
    </>
};