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
  BlockQuote,
  CardText, 
  Cite
} from "../styles/sections/HomeSection.styled";
import { HomeContainer } from "../styles/common/HomeConatiner";

import "../styles/sections/Home/Extra.css"
export const AboutSection = () =>{

    return <> 
    <Container>
    <AboutUsSection id="/AboutUs" style={{marginTop:'10rem'}}>
        <ImageContainer>
            <StyledImage src="./images/wall2.jpg" alt="olivia's nest jpg file"/>
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
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src="./images/staff/admin-head-teacher.jpg" className="card__photo" alt="Good food" />
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
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src= "./images/staff/Teachers.jpg" className="card__photo" alt="Good food" />
  <div className="card__content_extra">
    <h2 className="card__title_extra">Teachers</h2>
    <p className="card__description_extra">
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
    </p>
  </div>
</div>
<div className="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src="./images/staff/Teachers.jpg" className="card__photo" alt="Good food" />
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
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src="./images/staff/chef.jpg" className="card__photo" alt="Good food" />
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
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src= "./images/staff/cleaning staff.jpg" className="card__photo" alt="Good food" />
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
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src="./images/staff/Teachers.jpg" className="card__photo" alt="Good food" />
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
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src="./images/staff/chef.jpg" className="card__photo" alt="Good food" />
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
  <img style={{height:'100%',width:'100%',objectFit:'cover'}}  src= "./images/staff/cleaning staff.jpg" className="card__photo" alt="Good food" />
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
  <img  style={{height:'100%',width:'100%',objectFit:'cover'}}  src="./images/staff/Teachers.jpg" className="card__photo" alt="Good food" />
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