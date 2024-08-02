import { Container } from "../styles/common/Container.styled";
import { HomeContainer } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import "../styles/sections/Gallery/Gallery.css";


import { GalleryImage, GalleryItems, HeaderContainer, SingleGallery } from "../styles/sections/GallerySection.styled";
import { AboutUsSection } from "../styles/sections/AboutSection.styled";


import culture1 from "../../prod_images/FACILITIES/Trip To Bomas of Kenya/culture1.png";
import culture2 from "../../prod_images/FACILITIES/Trip To Bomas of Kenya/culture2.png";
import culture3 from "../../prod_images/FACILITIES/Trip To Bomas of Kenya/culture3.png";

export const GallerySection = () =>{
    return (

<>
<Container>
        <AboutUsSection id="Gallery" style={{marginTop:'8rem'}}>
    <SectionHeading>
      <h1>Trip to The Bomas of Kenya</h1>
      <h3>It was a successful and our children enjoyed each and every bit of it. Travels are important as they are educative.</h3>
      <h1>Bomas Of Kenya</h1>
    </SectionHeading>
    <GalleryItems>
      <SingleGallery>
        <GalleryImage>
            <img src={culture1} alt="kids modelling" />
        </GalleryImage>
        <p style={{ marginTop: '1rem'}}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Taekwondo session in progress.
        </p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
            <img src={culture2} alt="stretching" />
        </GalleryImage>
        <p style={{ marginTop: '1rem' }}>Kids stretching as part of the co-curricular activities.</p>
      </SingleGallery>
      <SingleGallery>
        <GalleryImage>
            <img src={culture3} alt="kids modelling" />
        </GalleryImage>
        <p style={{ marginTop: '1rem'}}>
          We keep our children pre-occupied with sports at Olivia's Nest.
          Our previous soccer tournament.
        </p>
      </SingleGallery>
    </GalleryItems>
  </AboutUsSection>
        </Container>
<HomeContainer>
  
</HomeContainer>
<HeaderContainer>
    <SectionHeading>
        <h1>Our media</h1>
        <p>Our media consists of various activities and surrounding of the premises</p>
    </SectionHeading>
</HeaderContainer>

<div className="wrapper_gallery">
  <div className="card_gallery">
    <img src="./images/landingPage/two.png" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
   <div className="card_gallery">
    <img src="./images/landingPage/three.png" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>

  <div className="card_gallery">
    <img src="./images/landingPage/four.png" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/landingPage/five.png"  alt="2"/>
    <div className="info_gallery">
      <h2>Ghidorah</h2>
      <p> The False King or the Devil that has three heads</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/landingPage/six.png" alt="3"/>
    <div className="info_gallery">
      <h2>Kong</h2>
      <p>The Primate of Ferocity that bows to no one</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
</div>




<div className="wrapper_gallery">
  <div className="card_gallery">
    <img src= "./images/landingPage/seven.png" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
   <div className="card_gallery">
    <img src="./images/landingPage/eight.png" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>

  <div className="card_gallery">
    <img src="./images/landingPage/eight.png" alt="1" />
    <div className="info_gallery">
      <h2>Godzilla</h2>
      <p> Alpha Predator that is believed to restore balance</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/landingPage/nine.png" alt="2"/>
    <div className="info_gallery">
      <h2>Ghidorah</h2>
      <p> The False King or the Devil that has three head</p>
      {/* <a href="/Gallery">More</a> */}
    </div>    
  </div>
  
  <div className="card_gallery">
    <img src="./images/landingPage/one.png"  alt="3"/>
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