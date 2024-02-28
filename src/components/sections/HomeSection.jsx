import {BaitSection, FeatureItem,
FeatureImage,FeatureContent,FeatureTitle,
FeatureDescription,
SomeDataSection,
CardContainer,
Card,
CardImage,
CardContent,
CardTitle,
CardText,
CardButton,
Bait2Section,
HeroContent,
ShortSomeDataSection,
CustomImageCard,
CustomWordingCard} from "../styles/sections/HomeSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { ContactForm, ContactFormContainer, 
  EmailUsButton, FormCheckbox, FormInput, FormLabel, 
  ImageCardContainer, ImageCardImage } from "../styles/sections/ContactForm.styled";
import { HeroSocialIcons, SocialIcon } from "../styles/sections/AboutSection.styled";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
export const  HomeSection = () =>{
    return <> 
    <ShortSomeDataSection>
      
      <CardContainer>
        <CustomImageCard>
          <CardImage src="./images/landing2.jpg" alt="landing page" />
        </CustomImageCard>
        <CustomWordingCard>
        <HeroContent>
        <h1>Olivia's Nest International.</h1>
        <h3>Daycare and PreSchool</h3>
        <p>A happy place to be, where love is shown daily.</p>
        <div>
          <CTAButton href="/AboutUs">About Us</CTAButton>
          <CTAButton href="/Facilities" primary margin="0 0 0 20px">Facilities</CTAButton>
        </div>
      </HeroContent>
        </CustomWordingCard>
      </CardContainer>
    </ShortSomeDataSection>
<hr />
    <Bait2Section>
  <FeatureItem>
    <FeatureImage src="./images/paperplane.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Fun & Learning</FeatureTitle>
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
        <blockquote>
        "Health is a relationship between you and your body." 
        - Terri Guillemets
        </blockquote>
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

<SomeDataSection>
  <SectionHeading>
    <h1>Facilities & What we offer</h1>
    <h3>Our classes & more</h3>
  </SectionHeading>
  <CardContainer>
        <Card>
          <CardImage src="./images/beds.jpg" alt="king size beds" />
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
          <CardImage src="./images/study_rooms.JPG" alt="basket ball" />
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
</SomeDataSection>
<SomeDataSection>
  <CardContainer>
  <CardContainer>
  <Card>
    <CardImage src="./images/study_2.jpg" alt="" />
    <CardContent>
      <CardText>Learning session in progress</CardText>
      <CardButton href="/Gallery">E-learning</CardButton>
  </CardContent>
  </Card>
  <Card>
    <CardImage src="./images/toy_room.jpg" alt="" />
    <CardContent>
      <CardText>We have toys and toy room where kids full utilize them in the break time.</CardText>
      <CardButton href="/Gallery">Toy area</CardButton>
    </CardContent>
  </Card>
</CardContainer>
<hr />
  </CardContainer>
</SomeDataSection>

<SomeDataSection>
<SectionHeading>
    <h1>Break Session & Kids playing</h1>
    <h3>Happy hour</h3>
  </SectionHeading>
      <CardContainer>
        <Card>
          <CardImage src="./images/competition.jpg" alt="physical education" />
          <CardContent>
            <CardTitle>Sack racing</CardTitle>
            <CardText>Kids sack racing during an sport event at the school</CardText>
            <CardButton href="/Gallery">sack racing</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/basket_ball.JPG" alt="basket ball" />
          <CardContent>
            <CardTitle>Play time</CardTitle>
            <CardText>basket ball, soccer & bicycle riding at break session</CardText>
            <CardButton href="/Gallery">Basket ball</CardButton>
            <CardButton href="/Gallery">riding</CardButton>
            <CardButton href="/Gallery">soccer</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/tennis.jpg" alt="lawn tennis" />
          <CardContent>
            <CardTitle>Tennis</CardTitle>
            <CardText>Lawn tennis training session in progress.</CardText>
            <CardButton href="/Gallery">Lawn Tennis</CardButton>
          </CardContent>
        </Card>
      </CardContainer>
    </SomeDataSection>
<BaitSection>
      <ContactFormContainer>
        <h2>Contact Us</h2>
        <ContactForm>
          <FormLabel>Email:</FormLabel>
          <FormInput type="email" placeholder="Enter your email" />
          <FormLabel>
            <FormCheckbox type="checkbox" />
            Subscribe to newsletter
          </FormLabel>
          <EmailUsButton>Email Us</EmailUsButton>
        </ContactForm>
      </ContactFormContainer>
      <ImageCardContainer>
        <ImageCardImage src="./images/wall2.jpg" alt="from outside" />
      </ImageCardContainer>
    </BaitSection>
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
     </>
};