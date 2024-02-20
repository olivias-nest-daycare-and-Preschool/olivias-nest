import { StyledHomeContent, StyledHomeSection,HomeImageStyled, BaitSection, FeatureItem,
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
HomeSectionImageStyled,
WordingsStyled,} from "../styles/sections/HomeSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { Link } from "react-router-dom";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { ContactForm, ContactFormContainer, EmailUsButton, FormCheckbox, FormInput, FormLabel, ImageCardContainer, ImageCardImage } from "../styles/sections/ContactForm.styled";
export const  HomeSection = () =>{
    return <> 
{/* 
    <StyledHomeSection id="/">
    <HomeImageStyled>
        <img src="./images/about_us.jpg" alt="landing page" />
    </HomeImageStyled>
        <StyledHomeContent>
        <h1>Olivia's Nest International.</h1>
        <h3>Daycare & Pre-School</h3>
        <p>A happy place to be, where love is shown daily.</p>
            <div>
                <Link to="/contact-us">
                    <CTAButton>Contact Us</CTAButton>
                </Link>
                <Link to="/admissions">
                    <CTAButton primary margin="0 0 0 20px">Admissions</CTAButton>
                </Link>
            </div>
        </StyledHomeContent>
    </StyledHomeSection>  */}
<BaitSection>
  <HomeSectionImageStyled>
    <img src="./images/about_us.jpg" alt="landing page" />
  </HomeSectionImageStyled>
  <WordingsStyled>
    <StyledHomeContent>
    <h1>Olivia's Nest International.</h1>
    <h3>Daycare & Pre-School</h3>
    <p>A happy place to be, where love is shown daily.</p>
    </StyledHomeContent>
  </WordingsStyled>
</BaitSection>  

    <BaitSection>
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
</BaitSection>

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
<hr />
     </>
};