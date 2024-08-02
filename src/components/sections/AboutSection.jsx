import { 
  AboutContent, 
  AboutUsSection, 
  DullCircle, 
  GradCircle, 
  HeroSocialIcons, 
  ImageContainer,
  SocialIcon, 
  StyledHeading, 
  StyledImage 
  } from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  FaEnvelope, 
  FaFacebook,
  FaWhatsapp 
  } from "react-icons/fa";
import { Container } from "../styles/common/Container.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { 
  Bait2Section,
  BlockQuote,
  CardText, 
  Cite,
  FeatureContent,
  FeatureDescription,
  FeatureImage,
  FeatureItem,
  FeatureTitle
} from "../styles/sections/HomeSection.styled";
import { HomeContainer } from "../styles/common/HomeConatiner";
import team1 from '../../prod_images/ABOUT US/Director/director1.png';
import teams1 from '../../prod_images/ABOUT US/Director/director2.png';
import team2 from '../../prod_images/ABOUT US/Admin/admin.png';
import team3 from '../../Images/team/team3.png';
import driver from '../../prod_images/ABOUT US/Baby Driver/baby-driver.png';
import chef from '../../prod_images/ABOUT US/Chef/Chef.png';
import John from '../../prod_images/ABOUT US/Mr. John/Mr.John.png';
// import Ann from '../../prod_images/ABOUT US/Ms. Annabette/Ms.Annabette.png';
import Billy from '../../prod_images/ABOUT US/Ms. Billy/Ms. Billy.png';
import Elizabeth from '../../prod_images/ABOUT US/Ms. Elizabeth/Ms. Elizabeth.png';
import Emma from '../../prod_images/ABOUT US/Ms. Emma/Ms. Emma.png';
import Esther from '../../prod_images/ABOUT US/Ms. Esther/Ms. Esther.png';
import Jackline from '../../prod_images/ABOUT US/Ms. Jackline/Ms. Jackline.png';

import "../styles/sections/Home/Extra.css"
export const AboutSection = () =>{

    return <> 
    <Container>
    <AboutUsSection id="/AboutUs" style={{marginTop:'10rem'}}>
        <ImageContainer>
            <StyledImage src={team1} alt="olivia's nest jpg file"/>
            <DullCircle/>
            <GradCircle/>
        </ImageContainer>
        <AboutContent>
            <StyledHeading>
              A word from our Director Dr. Sally,  at Olivia's Nest - <span>👶.</span> 
            </StyledHeading>
            <p>
            Olivia's Nest is an Edu-care center for kids all over Nairobi. We cater for kids starting with kids in
            day-care to kindergarten to pre-school. We are located in Kileleshwa, Lavington area. 
            In Olivia's Nest, your child will be in a safe setting, in a continuously learning environment to make them 
            the best they can ever be.
            We have a team of caring and competent, and qualified teachers to make your dream of seeing your child 
            excel come true. Teachers, embody skills, knowledge with a little bit of enthusiasm to spark a good impression
            on young developing minds. 
            All are welcome at Olivia's Nest.👶

            </p>
            <CTAButton style={{color:'black'}} href="/ContactUs">Inquiries ? reach out...</CTAButton>
        </AboutContent>
    </AboutUsSection>
    </Container>    
    <HomeContainer>
      <SectionHeading>
        <h1>Our Team</h1>
      </SectionHeading>
      <div className="card_wrap_extra">
      <div className="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src={teams1} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Director</h2>
    <p className="card__description_extra">    
    Dr. Sally is the heart and soul of our school.
    With a knack and passion for child caring and nurturing, she leasds our team with 
    dedication and warmth.
    </p>
  </div>
</div>
<div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src= {team2} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Admin</h2>
    <p className="card__description_extra">
    School's admin and head teacher. She is very steadfast in 
              overseeing and coordinating learning and placement of our
              teachers. Such a pure soul.
    </p>
  </div>
</div>
<div className="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src={driver} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Baby Driver</h2>
    <p className="card__description_extra">
              She is our baby driver. 
    </p>
  </div>
</div>
      </div>
    </HomeContainer>

    <HomeContainer>
      <div className="card_wrap_extra">
      <div className="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src={chef} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Chef</h2>
    <p className="card__description_extra">
    <CardText>
            <BlockQuote>
            "One cannot think well,love well,sleep well, if one has not dined well." 
            <Cite style={{color:'white'}}>Virginia Woolf</Cite>
            </BlockQuote>
            cuisines master.
            </CardText>
    </p>
  </div>
</div>
<div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src= {Elizabeth} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Sanitary engineers</h2>
    <p className="card__description_extra">
        <CardText>
            <BlockQuote>
                "Hygiene is the health care of the soul as well as of the body." 
                <Cite style={{color:'white'}}>John Randolph</Cite>
            </BlockQuote>
        </CardText>
    </p>
  </div>
</div>
<div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src={team3} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Teachers</h2>
    <p className="card__description_extra">
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
    </p>
  </div>
</div>
      </div>
    </HomeContainer>


    <HomeContainer>
      <div className="card_wrap_extra">
      <div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src={Emma} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Chef</h2>
    <p className="card__description_extra">
    <CardText>
            <BlockQuote>
            "One cannot think well,love well,sleep well, if one has not dined well." 
            <Cite style={{color:'white'}}>Virginia Woolf</Cite>
            </BlockQuote>
            cuisines master.
            </CardText>
    </p>
  </div>
</div>
<div className="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src= {Esther} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Sanitary engineers</h2>
    <p className="card__description_extra">
        <CardText>
            <BlockQuote>
                "Hygiene is the health care of the soul as well as of the body." 
                <Cite style={{color:'white'}}>John Randolph</Cite>
            </BlockQuote>
        </CardText>
    </p>
  </div>
</div>
<div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src={Jackline} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Teachers</h2>
    <p className="card__description_extra">
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
    </p>
  </div>
</div>
      </div>
    </HomeContainer>


    <HomeContainer>
      <div className="card_wrap_extra">
      <div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src={Billy} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Chef</h2>
    <p className="card__description_extra">
    <CardText>
            <BlockQuote>
            "One cannot think well,love well,sleep well, if one has not dined well." 
            <Cite style={{color:'white'}}>Virginia Woolf</Cite>
            </BlockQuote>
            cuisines master.
            </CardText>
    </p>
  </div>
</div>
<div className="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src= {John} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Sanitary engineers</h2>
    <p className="card__description_extra">
        <CardText>
            <BlockQuote>
                "Hygiene is the health care of the soul as well as of the body." 
                <Cite style={{color:'white'}}>John Randolph</Cite>
            </BlockQuote>
        </CardText>
    </p>
  </div>
</div>
<div className="card_extra">
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src={Jackline} className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Teachers</h2>
    <p className="card__description_extra">
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
    </p>
  </div>
</div>
      </div>
    </HomeContainer>
    
     <Container>
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
    </Container>    


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
};