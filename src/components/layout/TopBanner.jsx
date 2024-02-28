import { StyledBannerSection, StyledTopBanner } from "../styles/layout/TopBanner.styled";


export const TopBanner = () =>{
    return <>
    <StyledTopBanner>
        <StyledBannerSection>
            <a href="mailto:oliviasnest1@gmail.com">🙋‍♀️ oliviasnest1@gmail.com 🙋‍♀️</a>
        </StyledBannerSection>
        <StyledBannerSection showOnMobile>
            <a href="/ContactUs">👶 Welcome to our school👶 </a>
        </StyledBannerSection>
        <StyledBannerSection>
            <a href="/Facilities"> 🏫what we offer🏫 </a>
        </StyledBannerSection>
    </StyledTopBanner>
    </>
}; 