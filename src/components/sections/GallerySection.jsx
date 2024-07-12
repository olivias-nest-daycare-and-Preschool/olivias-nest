import { Container } from "../styles/common/Container.styled";
import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import "../styles/sections/Gallery/Gallery.css";
// import "../styles/sections/Home/Beauty.css";
import {
    FacilityDescription, 
    FacilityImageContainer,
    SingleFacility,
     SlantCard, 
     StyledFacilitiesSection, 
     Tags }
      from "../styles/sections/HomeSection.styled";


import { HeaderContainer } from "../styles/sections/GallerySection.styled";

// import One from "../../Images/homeImages/1.png";
// import Two from "../../Images/homeImages/2.png";
// import Three from "../../Images/homeImages/3.png";
// import Four from "../../Images/homeImages/4.png";
// import Five from "../../Images/homeImages/5.png";
// import Six from "../../Images/homeImages/6.png";
// import Seven from "../../Images/homeImages/7.png";
// import Eight from "../../Images/homeImages/8.png";
// import Nine from "../../Images/homeImages/9.png";
// import Ten from "../../Images/homeImages/10.png";
// import Eleven from "../../Images/homeImages/11.png";
// import Twelve from "../../Images/homeImages/12.png";
// import Thirteen from "../../Images/homeImages/13.png";
// import Fifteen from "../../Images/homeImages/15.png";
// import Seventeen from "../../Images/homeImages/17.png";
// import Eighteen from "../../Images/homeImages/18.png";


export const GallerySection = () =>{
    return (

<>
<HomeContainer style={{marginTop:'15rem'}}>
<SectionHeading>
                <h1>Take a look at our gallery</h1>
    </SectionHeading>
</HomeContainer>
<Container>
    <StyledFacilitiesSection>
    <SingleFacility>
                        <FacilityImageContainer>
                            <img src="./images/teachers.jpg" alt={'olivias nest'}/>
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



<HeaderContainer>
    <SectionHeading>
        <h1>Our media</h1>
        <p>Our media consists of various activities and surrounding of the premises</p>
    </SectionHeading>
</HeaderContainer>

<div className="wrapper_gallery">
  <div className="card_gallery">
    <img src="./images/teachers.jpg" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
   <div className="card_gallery">
    <img src="./images/teachers.jpg" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>

  <div className="card_gallery">
    <img src="./images/teachers.jpg" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/teachers.jpg"  alt="2"/>
    <div className="info_gallery">
      <h2>Ghidorah</h2>
      <p> The False King or the Devil that has three heads</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/teachers.jpg" alt="3"/>
    <div className="info_gallery">
      <h2>Kong</h2>
      <p>The Primate of Ferocity that bows to no one</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
</div>




<div className="wrapper_gallery">
  <div className="card_gallery">
    <img src= "./images/teachers.jpg" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
   <div className="card_gallery">
    <img src="./images/teachers.jpg" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>

  <div className="card_gallery">
    <img src="./images/teachers.jpg" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/teachers.jpg"  alt="2"/>
    <div className="info_gallery">
      <h2>Ghidorah</h2>
      <p> The False King or the Devil that has three head</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/teachers.jpg"  alt="3"/>
    <div className="info_gallery">
      <h2>Kong</h2>
      <p>The Primate of Ferocity that bows to no one</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
</div>
        </>
    );
};