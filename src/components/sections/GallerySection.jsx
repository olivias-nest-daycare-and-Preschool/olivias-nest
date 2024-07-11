import { Container } from "../styles/common/Container.styled";
import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { ImageCoveredContainer } from "../styles/sections/AboutSection.styled";
import "../styles/sections/Gallery/Gallery.css";
import "../styles/sections/Home/Beauty.css";
import { FacilityDescription, FacilityImageContainer, InfoButton, SingleFacility, SlantCard, StyledFacilitiesSection, Tags } from "../styles/sections/HomeSection.styled";

import Thirteen from "../../Images/homeImages/13.png";

export const GallerySection = () =>{
    return (
        <>
{/* <ImageCoveredContainer> */}
<HomeContainer>
<SectionHeading>
                <h1>Take a look at our gallery</h1>
    </SectionHeading>
</HomeContainer>
<Container>
    <StyledFacilitiesSection style={{marginTop:'-8rem'}}>
    <SingleFacility>
                        <FacilityImageContainer>
                            <img src={Thirteen } alt={'olivias nest'}/>
                            <SlantCard />
                        </FacilityImageContainer>
                        <FacilityDescription>
                        <h1 style={{fontWeight:'700'}}>Olivia's Nest International <hr /> </h1>
                            <Tags>
                              <span style={{color:'white'}}>olivias nest</span>
                              <span style={{color:'white'}}>olivias nest</span>
                              <span style={{color:'white'}}>olivias nest</span>
                            </Tags>
                            <p> Welcome to Olivia's Nest where we offer small class sizes, balanced teacher-learner ratios, 
                              a fun environment and learning through play. 
                              luxury preschool and daycare in kileleshwa/lavington. 25 Othaya Road, Nairobi, Kenya ... 
                              At Olivia's Nest our emphasis is to boost our little children's ability ...
                              </p>
                        </FacilityDescription>
                    </SingleFacility>
    </StyledFacilitiesSection>

    </Container>
{/* </ImageCoveredContainer> */}
        </>
    );
};