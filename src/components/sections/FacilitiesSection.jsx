import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { FacilityDescription, FacilityImageContainer, SingleFacility, SlantCard, StyledFacilitiesSection, Tags } from "../styles/sections/FacilitiesSection.styled";
import {IndoorFacilities} from "../../data/IndoorFacilities";
import { HeroSocialIcons, SocialIcon } from "../styles/sections/AboutSection.styled";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
export const FacilitiesSection = () =>{
    return (
        <> 
        <StyledFacilitiesSection id="Facilities">
            <SectionHeading>
                <h1>Facilities</h1>
                <h3>Indoor facilities</h3>
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
        <hr />
        </>
    );
};