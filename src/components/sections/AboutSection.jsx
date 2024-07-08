import { AboutContent, AboutUsSection, DullCircle, GradCircle, HeroSocialIcons, ImageContainer, ImageCoveredContainer, SocialIcon, StyledHeading, StyledImage } from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Container } from "../styles/common/Container.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { BlockQuote, Card,CardContainer,CardContent,CardImage, CardText, CardTitle, Cite} from "../styles/sections/HomeSection.styled";
import { GalleryItems, HomeContainer, SingleGallery, StaffDetails } from "../styles/common/HomeConatiner";
import { StyledGallerySection } from "../styles/sections/GallerySection.styled";
export const AboutSection = () =>{

    return <> 
    <ImageCoveredContainer> 
    <Container>
    <AboutUsSection id="/AboutUs" style={{marginTop:'15rem'}}>
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
            <CTAButton href="/ContactUs">Inquiries ? reach out...</CTAButton>
        </AboutContent>
    </AboutUsSection>
    </Container>
    </ImageCoveredContainer>

    <Container>
    <SectionHeading>
    <h1>Our Staff</h1>
   </SectionHeading>
    <CardContainer>
        <Card>
          <CardImage src="./images/staff/admin-head-teacher.jpg" alt="head teacher"style={{height:'50%',width:'100%'}}/>
          <CardContent>
            <CardTitle>Admin</CardTitle>
            <CardText>
              School's admin and head teacher. She is very steadfast in 
              overseeing and coordinating learning and placement of our
              teachers. Such a pure soul.
            </CardText>
          </CardContent>
        </Card>
        
        <Card>
          <CardImage  src="./images/staff/Teachers.jpg" alt="teachers"  style={{height:'50%',width:'100%'}}/>
          <CardContent>
            <CardTitle>Teachers</CardTitle>
            <CardText>
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
            </CardText>
          </CardContent>
        </Card>

        <Card>
          <CardImage  src="./images/staff/Teachers.jpg" alt="teachers"  style={{height:'50%',width:'100%'}}/>
          <CardContent>
            <CardTitle>Teachers</CardTitle>
            <CardText>
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
            </CardText>
          </CardContent>
        </Card>
      </CardContainer>
    </Container>
    
    <Container>
    <CardContainer style={{marginTop:'2rem'}}>
      <Card>
          <CardImage src="./images/staff/chef.jpg" alt="parent meetings" style={{height:'50%',width:'100%'}}/>
          <CardContent>
            <CardTitle>Chef</CardTitle>
            <CardText>
            <BlockQuote>
            "One cannot think well,love well,sleep well, if one has not dined well." 
            <Cite style={{color:'white'}}>Virginia Woolf</Cite>
            </BlockQuote>
            cuisines master.
            </CardText>
          </CardContent>
        </Card>
      <Card>
          <CardImage  src="./images/staff/Teachers.jpg" alt="teachers"  style={{height:'50%',width:'100%'}}/>
          <CardContent>
            <CardTitle>Teachers</CardTitle>
            <CardText>
              We are very appreciative of the dedication and determination
              that our teachers take to educate and take care of our 
              children. We really thank them.
            </CardText>
          </CardContent>
        </Card>

        <Card>
          <CardImage src="./images/staff/cleaning staff.jpg" alt="parent meetings" style={{height:'50%',width:'100%'}}/>
          <CardContent>
            <CardTitle>Hygiene</CardTitle>
            <CardText>
            <BlockQuote>
        "Hygiene is the health care of the soul as well as of the body." 
        <Cite style={{color:'white'}}>John Randolph</Cite>
        </BlockQuote>
            </CardText>
          </CardContent>
        </Card>
      </CardContainer>
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
      <hr style={{marginTop:'5rem'}}/>
    </Container>
    <hr />
    </>
};