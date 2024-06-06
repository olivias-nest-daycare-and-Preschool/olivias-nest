// import SparklingText from "../styles/common/SparklingText";
import { StyledBannerSection, StyledTopBanner } from "../styles/layout/TopBanner.styled";


export const TopBanner = () =>{
    return <>
    <StyledTopBanner>
        <StyledBannerSection>
            {/* <a href="mailto:oliviasnest1@gmail.com">
                <SparklingText text="🙋‍♀️ oliviasnest1@gmail.com 🙋‍♀️"/>
            </a> */}
            <a href="mailto:oliviasnest1@gmail.com">
                📧 oliviasnest1@gmail.com 📧
            </a>
        </StyledBannerSection>

    
        <StyledBannerSection showOnMobile>
           {/* <a href="/ContactUs">
           <SparklingText text=" 🙋‍♀️ intake ongoing 🙋‍♀️" />
           </a> */}
           <a href="/ContactUs">
           🙋‍♀️ intake ongoing 🙋‍♀️
           </a>
        </StyledBannerSection>

        <StyledBannerSection>
            {/* <a href="/Facilities"> 
            <SparklingText text="🏫what we offer🏫" /> </a> */}
            <a href="/Facilities">
            🏫 what we offer 🏫
            </a>
        </StyledBannerSection>
    </StyledTopBanner>
    </>
}; 