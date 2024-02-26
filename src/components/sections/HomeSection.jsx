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
HeroContent,} from "../styles/sections/HomeSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { ContactForm, ContactFormContainer, 
  EmailUsButton, FormCheckbox, FormInput, FormLabel, 
  ImageCardContainer, ImageCardImage } from "../styles/sections/ContactForm.styled";
import { HeroSocialIcons, SocialIcon } from "../styles/sections/AboutSection.styled";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
export const  HomeSection = () =>{
    return <> 

    <SomeDataSection>
      <CardContainer>
      <Card>
          <CardImage src="./images/about_us.jpg" alt="landing page" />
        </Card>
        <Card>
          <CardContent>
            <HeroContent>
            <h1>Olivia's Nest International</h1>
            </HeroContent>
            <div>
                <CTAButton href="/AboutUs">About Us</CTAButton>
                <CTAButton href="/Facilities" primary margin="0 0 0 20px">Facilities</CTAButton>
            </div>
          </CardContent>
        </Card>
      </CardContainer>
    </SomeDataSection>
<hr />
    <Bait2Section>
  <FeatureItem>
    <FeatureImage src="./images/paperplane.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Fun & Learning</FeatureTitle>
      <FeatureDescription>We believe that learning should be interactive and fun.</FeatureDescription>
    </FeatureContent>
  </FeatureItem>
  <FeatureItem>
    <FeatureImage src="./images/babyfood.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Fun & Learning</FeatureTitle>
      <FeatureDescription>We believe that learning should be interactive and fun.</FeatureDescription>
    </FeatureContent>
  </FeatureItem>
  <FeatureItem>
    <FeatureImage src="./images/mortarboards.png" alt="learning is fun" />
    <FeatureContent>
      <FeatureTitle>Fun & Learning</FeatureTitle>
      <FeatureDescription>We believe that learning should be interactive and fun.</FeatureDescription>
    </FeatureContent>
  </FeatureItem>
</Bait2Section>
<CardContainer>
  <Card>
    <CardImage src="./images/P.E.jpg" alt="" />
  </Card>
  <Card>
    <CardImage src="./images/P.E.jpg" alt="" />
  </Card>
</CardContainer>
<hr />
<SomeDataSection>
      <CardContainer>
        <Card>
          <CardImage src="./images/P.E.jpg" alt="physical education" />
          <CardContent>
            <CardTitle>About us</CardTitle>
            <CardText>Some text about Card 1.</CardText>
            <CardButton href="/AboutUs">About us</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/basket_ball.JPG" alt="basket ball" />
          <CardContent>
            <CardTitle>Our Benefits</CardTitle>
            <CardText>Some text about Card 2.</CardText>
            <CardButton href="/Gallery">sports</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/tennis.jpg" alt="lawn tennis" />
          <CardContent>
            <CardTitle>Card 3</CardTitle>
            <CardText>Some text about Card 3.</CardText>
            <CardButton href="#">Learn More</CardButton>
          </CardContent>
        </Card>
      </CardContainer>
    </SomeDataSection>

    <SomeDataSection>
  <SectionHeading>
    <h1>Facilities & What we offer</h1>
    <h3>Our classes & more</h3>
  </SectionHeading>
  <CardContainer>
        <Card>
          <CardImage src="./images/P.E.jpg" alt="physical education" />
          <CardContent>
            <CardTitle>About us</CardTitle>
            <CardText>Some text about Card 1.</CardText>
            <CardButton href="/AboutUs">About us</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/basket_ball.JPG" alt="basket ball" />
          <CardContent>
            <CardTitle>Our Benefits</CardTitle>
            <CardText>Some text about Card 2.</CardText>
            <CardButton href="/Gallery">sports</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="./images/tennis.jpg" alt="lawn tennis" />
          <CardContent>
            <CardTitle>Card 3</CardTitle>
            <CardText>Some text about Card 3.</CardText>
            <CardButton href="#">Learn More</CardButton>
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
        <ImageCardImage src="./images/pexels-lukas-296301.jpg" alt="Image" />
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