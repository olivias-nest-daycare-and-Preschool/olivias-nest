import { StyledHomeContent, StyledHomeSection } from "../styles/sections/HomeSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
export const  HomeSection = () =>{
    return <> 
    <StyledHomeSection>
        <StyledHomeContent>
            <h1>Olivia's Nest International.</h1>
            <h3>Daycare & Pre-School</h3>
            <p>A happy place to be, where love is shown daily.</p>
            <div>
                <CTAButton href="#ContactUs">Contact-Us</CTAButton>
                <CTAButton href="#Admissions" primary margin="0 0 0 20px"
                >Admissions</CTAButton>
            </div>
        </StyledHomeContent>
    </StyledHomeSection>
     </>
};