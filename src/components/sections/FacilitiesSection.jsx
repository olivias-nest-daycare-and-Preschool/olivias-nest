import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {FacilityDescription, FacilityImageContainer,SingleFacility, SlantCard, StyledFacilitiesSection, Tags } from "../styles/sections/FacilitiesSection.styled";
import {IndoorFacilities} from "../../data/IndoorFacilities";
import { HeroSocialIcons, SocialIcon } from "../styles/sections/AboutSection.styled";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Container } from "../styles/common/Container.styled";
import { Card, CardButton, CardContainer, CardContent, CardImage, CardText, CardTitle, SomeDataSection } from "../styles/sections/HomeSection.styled";
import { HomeContainer } from "../styles/sections/ContactForm.styled";
export const FacilitiesSection = () =>{
    return (
        <> 

        <Container>
        <StyledFacilitiesSection id="Facilities" style={{marginTop:'20rem'}}>
            <SectionHeading>
                <h1>Facilities</h1>
                <h3>Overview</h3>
            </SectionHeading>
            <div>
                {IndoorFacilities && IndoorFacilities.map((indoor, index)=>(
                    <SingleFacility key="index">
                        <FacilityImageContainer>
                            <img src={indoor.thumbnail} alt={indoor.title} />
                            <SlantCard />
                        </FacilityImageContainer>
                        <FacilityDescription>
                            <h1>
                                {indoor.title}
                            </h1>
                            <Tags>
                                {indoor.tags && indoor.tags.map((tag,tagIndex)=>(
                                    <span key={tagIndex}>{tag}</span>
                                ))}
                            </Tags>
                            <p>{indoor.paragraph}</p>
                        </FacilityDescription>
                    </SingleFacility>
                ))} 
            </div>
        </StyledFacilitiesSection>
        </Container>

  <div></div>
        </>
    );
};