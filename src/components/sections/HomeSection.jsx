import { useEffect, useState } from "react";
import { 
  Bait2Section,
  BlockQuote,
  Card,
  CardButton,
  CardContainer,
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  Cite,
  DivCard,
  DivCardImage,
  DivHero,
  FeatureContent,
  FeatureDescription,
  FeatureImage,
  FeatureItem,
  FeatureTitle,
  HeroContent,
   SchoolName} from "../styles/sections/HomeSection.styled";
import {GalleryItems, 
  HomeContainer, 
  SchoolContainer, 
  SingleGallery, 
  StaffDetails } from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { StyledGallerySection } from "../styles/sections/GallerySection.styled";
import { FacilityCard,
   FacilityCardContent, 
  FacilityCardDescription,
   FacilityCardTitle,
   FacilityContainer } from "../styles/sections/FacilitiesSection.styled";
import { Image, InfoCard, InfoCardContainer,StyledHomeBackground } from "../styles/HomeBackground.styled";
   
const images = [
  "./images/beds.jpg",
  "./images/study_rooms.jpg",
  "./images/painting_landing3.jpg"
];

  export const  HomeSection = () =>{
 const [currentImageIndex,setCurrentImageIndex] = useState(0);


useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

      return <> 
<StyledHomeBackground>
<SchoolContainer>
        <SchoolName>
          <DivHero>
          <HeroContent style={{fontFamily: 'Poetsen One, sans-serif'}}>
        <h1>Welcome to Olivia's Nest.</h1>
        <h3>international Daycare and PreSchool</h3>
        <p>A happy place to be, where love is shown daily...</p>
          <CTAButton href="/AboutUs">About Us</CTAButton>
          <CTAButton href="/Facilities" primary margin="0 0 0 20px">Facilities</CTAButton>
      </HeroContent>
          </DivHero>
         
      <DivCard>
        <DivCardImage src={images[currentImageIndex]} alt="gate section and our wall" />
      </DivCard>
        </SchoolName>

        <InfoCardContainer>
        <InfoCard>
          <Image src="./images/pexels-magda-ehlers-1337387.jpg" alt="Description of the image" />
        </InfoCard>

        <InfoCard>
          <Image src="./images/pexels-pixabay-459957.jpg" alt="Description of the image" />
        </InfoCard>
        </InfoCardContainer>
        
</SchoolContainer>
</StyledHomeBackground>

<HomeContainer>
      <Bait2Section>
  <FeatureItem>
    <FeatureImage src="./images/paperplane.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Learning is Fun</FeatureTitle>
      <FeatureDescription>At Olivia's Nest, we believe that learning should be interactive and fun.
        We have taken our time to ensure we integrate learning with co-curricular activities.
      </FeatureDescription>
    </FeatureContent>
  </FeatureItem>
  <FeatureItem>
    <FeatureImage src="./images/babyfood.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Healthy meals</FeatureTitle>
      <FeatureDescription>A healthy meal powers our children and sustains them throughout the day.
        <br />
        <br />
        <BlockQuote>
        "Health is a relationship between you and your body." 
        <Cite>- Terri Guillemets</Cite>
        </BlockQuote>
        </FeatureDescription>
    </FeatureContent>
  </FeatureItem>
  <FeatureItem>
    <FeatureImage src="./images/mortarboards.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Expert Teachers</FeatureTitle>
      <FeatureDescription>
        We have qualified and certified teachers to ensure that our children at Olivia's Nest 
        get access to first-class knowledge. The teachers are friendly and fun. The teachers are equipped 
        as per the newer curriculum.
      </FeatureDescription>
    </FeatureContent>
  </FeatureItem>
</Bait2Section>
      </HomeContainer>
      
      <FacilityContainer style={{marginBottom:'15rem'}}>
          <FacilityCard>
              <FacilityCardContent>
                <FacilityCardTitle>Our Philosophy</FacilityCardTitle>
                <FacilityCardDescription>Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. 
                  Dicta odit vitae at sit beatae id itaque dignissimos?
                   Repudiandae ut at voluptates officiis praesentium veritatis, 
                  repellendus obcaecati deserunt. Omnis, reiciendis! Dignissimos?</FacilityCardDescription>
              </FacilityCardContent>
            </FacilityCard>
             
            <FacilityCard>
              <FacilityCardContent>
                <FacilityCardTitle> View on education</FacilityCardTitle>
                <FacilityCardDescription>Lorem ipsum dolor sit, 
                  amet consectetur adipisicing elit. 
                  Dicta odit vitae at sit beatae id itaque dignissimos?
                   Repudiandae ut at voluptates officiis praesentium veritatis, 
                  repellendus obcaecati deserunt. Omnis, reiciendis! Dignissimos?</FacilityCardDescription>
              </FacilityCardContent>
            </FacilityCard>
            
            <FacilityCard>
              <FacilityCardContent>
                <FacilityCardTitle>Vision</FacilityCardTitle>
                <FacilityCardDescription>Lorem ipsum dolor sit, 
                  amet consectetur adipisicing elit. 
                  Dicta odit vitae at sit beatae id itaque dignissimos?
                   Repudiandae ut at voluptates officiis praesentium veritatis, 
                  repellendus obcaecati deserunt. Omnis, reiciendis! Dignissimos?</FacilityCardDescription>
              </FacilityCardContent>
            </FacilityCard>
            
            <FacilityCard>
              <FacilityCardContent>
                <FacilityCardTitle>Mission</FacilityCardTitle>
                <FacilityCardDescription>Lorem ipsum dolor sit, 
                  amet consectetur adipisicing elit. 
                  Dicta odit vitae at sit beatae id itaque dignissimos?
                   Repudiandae ut at voluptates officiis praesentium veritatis, 
                  repellendus obcaecati deserunt. Omnis, reiciendis! Dignissimos?</FacilityCardDescription>
              </FacilityCardContent>
            </FacilityCard>
            
            <FacilityCard>
              <FacilityCardContent>
                <FacilityCardTitle>Core Values</FacilityCardTitle>
                <FacilityCardDescription>Lorem ipsum dolor sit, 
                  amet consectetur adipisicing elit. 
                  Dicta odit vitae at sit beatae id itaque dignissimos?
                   Repudiandae ut at voluptates officiis praesentium veritatis, 
                  repellendus obcaecati deserunt. Omnis, reiciendis! Dignissimos?</FacilityCardDescription>
              </FacilityCardContent>
            </FacilityCard>
        </FacilityContainer>
      <HomeContainer>
  <SectionHeading>
    <h1>Facilities & What we offer</h1>
    <h3>some facilities</h3>
  </SectionHeading>
  
  <CardContainer>
        <Card>
          <CardImage  src="./images/beds.jpg" alt="king size beds" style={{borderRadius:'50%'}}/>
          <CardContent>
            <CardTitle>Sleeping Area</CardTitle>
            <CardText>
              We took part in curating the sleeping area and making it an awesome experience.
              The experience is just sensational!
            </CardText>
            <CardButton href="/Facilities">Facilities</CardButton>
          </CardContent>
        </Card>
        
        <Card>
          <CardImage  src="./images/about_us.jpg" alt="king size beds" style={{borderRadius:'50%'}}/>
          <CardContent>
            <CardTitle>Hallway</CardTitle>
            <CardText>
              We took part in curating the sleeping area and making it an awesome experience.
              The experience is just sensational!
            </CardText>
            <CardButton href="/Facilities">Facilities</CardButton>
          </CardContent>
        </Card>

        <Card>
          <CardImage src="./images/study_rooms.JPG" alt="basket ball" style={{borderRadius:'50%'}}/>
          <CardContent>
            <CardTitle>Classrooms & Lockers</CardTitle>
            <CardText>
              We have perfect fitting lockers for our classrooms.
              The lockers can conjoin during discussions and made separate for 
              individual assessment.
            </CardText>
            <CardButton href="/Gallery">sports</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/study_rooms.JPG" alt="basket ball" style={{borderRadius:'50%'}}/>
          <CardContent>
            <CardTitle>Classrooms & Lockers</CardTitle>
            <CardText>
              We have perfect fitting lockers for our classrooms.
              The lockers can conjoin during discussions and made separate for 
              individual assessment.
            </CardText>
            <CardButton href="/Gallery">sports</CardButton>
          </CardContent>
        </Card>
      </CardContainer>
      </HomeContainer>
      <hr style={{marginTop:'5rem'}}/>

   <StyledGallerySection>
    <SectionHeading>
        <h1>Why Olivia's Nest?</h1>
        <h3>We incorporate learning with games as it makes our children's brain develop</h3>
    </SectionHeading>
    <GalleryItems style={{marginBottom:'-8rem'}}>
        <SingleGallery>
            <StaffDetails>
                <h3>Child monitoring</h3>
                <img src="./images/toons/toddler.png" alt="tolder" />
                <p style={{marginTop:'4rem'}}>This is a critical thing for a child's growth</p>
            </StaffDetails>
        </SingleGallery>s
        <SingleGallery>
            <StaffDetails>
                <h3>Firstname Lastname</h3>
                {/* <p>Job Title</p> */}
                <img src="./images/toons/kid-bubbles.jpg" alt="kid playing with bubbles" />
            </StaffDetails>
        </SingleGallery>
        <SingleGallery>
            <StaffDetails>
                <h3>Firstname Lastname</h3>
                {/* <p>Job Title</p> */}
                <img src="./images/toons/girl-toon.png" alt="cartoon girl" style={{height:'500px'}}/>
            </StaffDetails>
        </SingleGallery>
    </GalleryItems>
</StyledGallerySection>
<hr />
       </>

  };