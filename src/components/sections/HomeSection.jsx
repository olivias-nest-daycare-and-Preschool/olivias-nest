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
import { ContactFormContainer,ImageCardImage } from "../styles/sections/ContactForm.styled";
import { HeroSocialIcons, SocialIcon } from "../styles/sections/AboutSection.styled";
import { FaAddressBook, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Button, Form, Input, Label, Textarea } from "../styles/sections/ContactSection.styled";
import { Container } from "../styles/common/Container.styled";
import { FaLocationCrosshairs } from "react-icons/fa6";
export const  HomeSection = () =>{

    return <> 
    <ShortSomeDataSection>
      <CardContainer>
        <CustomImageCard>
          <CardImage style={{borderRadius:'15%'}} src="./images/landing2.jpg" alt="landing page" />
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
        {/* ont-family: "Share Tech Mono", monospace; */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '40px'}}>
          <a href="/ContactUs" style={{ display: 'flex', alignItems: 'center', marginRight: '20px', padding: '10px', border: '1px solid transparent', borderRadius: '5px', textDecoration: 'none' }}>
            <FaLocationCrosshairs style={{ color: 'orange', transform: 'scaleX(-1)', fontSize: '32px', marginRight: '15px', fontFamily:'share Tech Mono' }} />
            <span style={{ fontSize: '2rem', marginBottom: '0', fontStyle:'normal', color: 'white', textTransform: 'none',
          fontFamily:'share Tech Mono' }}>Located at 25 Othaya road in Kileleshwa, Lavington, Nairobi</span>
          </a>
          <a href="/ContactUs" style={{ display: 'flex', alignItems: 'center', padding: '10px', border: '1px solid transparent', borderRadius: '5px', textDecoration: 'none' }}>
            <FaAddressBook style={{ color: 'orange', transform: 'scaleX(-1)', fontSize: '32px', marginRight: '15px'}} />
            <span style={{ fontSize: '2rem', marginBottom: '0', whiteSpace:'nowrap', fontStyle:'normal', color: 'white', textTransform: 'none' }}>00603 – Lavington</span>
          </a>
        </div>


      </HeroContent>

      {/* <Card>

      </Card>  */}

        </CustomWordingCard>
      </CardContainer>
    </ShortSomeDataSection>
<hr />
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
          <CardImage style={{borderRadius:'20%'}} src="./images/beds.jpg" alt="king size beds" />
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
          <CardImage style={{borderRadius:'20%'}} src="./images/study_rooms.JPG" alt="basket ball" />
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
    <CardImage style={{borderRadius:'5%'}} src="./images/study_2.jpg" alt="" />
    <CardContent>
      <CardText>Learning session in progress</CardText>
      <CardButton href="/Gallery">E-learning</CardButton>
  </CardContent>
  </Card>
  <Card>
    <CardImage style={{borderRadius:'5%'}} src="./images/toy_room.jpg" alt="" />
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
          <CardImage style={{borderRadius:'15%'}} src="./images/competition.jpg" alt="physical education" />
          <CardContent>
            <CardTitle>Sack racing</CardTitle>
            <CardText>Kids sack racing during an sport event at the school</CardText>
            <CardButton href="/Gallery">sack racing</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage style={{borderRadius:'15%'}} src="./images/basket_ball.JPG" alt="basket ball" />
          <CardContent>
            <CardTitle>Play time</CardTitle>
            <CardText>basket ball, soccer & bicycle riding at break session</CardText>
            <CardButton href="/Gallery">Bicycle riding</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage style={{borderRadius:'15%'}} src="./images/tennis.jpg" alt="lawn tennis" />
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
      <SectionHeading>
        <h3>Contact Us</h3>
        </SectionHeading>
        <Form>
                        <Label htmlFor="name">Name:</Label>
                        <Input type="text" id="name" name="name" />

                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" name="email" />

                        <Label htmlFor="subject">Subject:</Label>
                        <Input type="text" id="subject" name="subject" />

                        <Label htmlFor="message">Your Message:</Label>
                        <Textarea id="message" name="message"  rows="4" placeholder="Write to Olivia's Nest..."/>

                        <Button type="submit">write to us</Button>
                    </Form>
      </ContactFormContainer>
      <ContactFormContainer>
      <SectionHeading>
          <h3>Our School</h3>
        </SectionHeading>
        <ImageCardImage src="./images/teachers.jpg" alt="from outside" />
        <CardText>arts, modelling and painting with an instructor</CardText>
      </ContactFormContainer>
    </BaitSection>
   <Container>
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
   </Container>
     </>
};