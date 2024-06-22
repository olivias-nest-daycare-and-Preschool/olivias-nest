import { useEffect, useState } from "react";
import './../styles/sections/Carousel/carousel.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  SchoolName
} from "../styles/sections/HomeSection.styled";
import {
  GalleryItems,
  HomeContainer,
  SchoolContainer,
  SingleGallery,
  StaffDetails
} from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { StyledGallerySection } from "../styles/sections/GallerySection.styled";
import {
  FacilityCard,
  FacilityCardContent,
  FacilityCardDescription,
  FacilityCardTitle,
  FacilityContainer
} from "../styles/sections/FacilitiesSection.styled";
import {
  Image,
  InfoCard,
  InfoCardContainer,
  StyledHomeBackground
} from "../styles/HomeBackground.styled";
import { BsSunglasses } from "react-icons/bs";

const images = [
  "./images/beds.jpg",
  "./images/study_rooms.jpg",
  "./images/painting_landing3.jpg"
];

export const HomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const carouselImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8fHww', title: 'Image 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sfGVufDB8fDB8fHww', title: 'Image 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 3' },
    { id: 4, url: 'https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 5' },
    { id: 1, url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8fHww', title: 'Image 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sfGVufDB8fDB8fHww', title: 'Image 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 3' },
    { id: 4, url: 'https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 5' },
    { id: 6, url: 'https://plus.unsplash.com/premium_photo-1680807868955-805266ef99f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 6' },
    { id: 7, url: 'https://plus.unsplash.com/premium_photo-1682955296238-61cdc3338b30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Image 7' },
  ];

  return <>
    <StyledHomeBackground>
      <div className="carousel">

        <div className="slider-container">
          <h2>Olivia's Nest.</h2>
          <h2>International Daycare & Preschool</h2>
          <h1>a place where love is shown daily</h1>
          <Slider {...settings}>
            {
              carouselImages.map((image) => (
                <div className="image-container">
                  <img src={image.url} alt={image.title} className="image" />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
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

    <FacilityContainer style={{ marginBottom: '15rem' }}>
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
          <FacilityCardTitle> Our view on education</FacilityCardTitle>
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
        <h3> <BsSunglasses /> sneaky link <BsSunglasses /> </h3>
      </SectionHeading>
      <CardContainer>
        <Card>
          <CardImage src="./images/beds.jpg" alt="king size beds" style={{ borderRadius: '50%' }} />
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
          <CardImage src="./images/about_us.jpg" alt="king size beds" style={{ borderRadius: '50%' }} />
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
          <CardImage src="./images/study_rooms.JPG" alt="basket ball" style={{ borderRadius: '50%' }} />
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
    <hr style={{ marginTop: '8rem' }} />

    <StyledGallerySection>
      <SectionHeading>
        <h1>Why Olivia's Nest?</h1>
        <h3>We incorporate learning with games as it makes our children's brain develop</h3>
      </SectionHeading>
      <GalleryItems style={{ marginBottom: '-8rem' }}>
        <SingleGallery>
          <StaffDetails>
            <h3>Child monitoring</h3>
            <img src="./images/toons/toddler.png" alt="tolder" />
          </StaffDetails>
        </SingleGallery>
        <SingleGallery>
          <StaffDetails>
            <h3>Firstname Lastname</h3>
            <img src="./images/toons/kid-bubbles.jpg" alt="kid playing with bubbles" />
          </StaffDetails>
        </SingleGallery>
        <SingleGallery>
          <StaffDetails>
            <h3>Firstname Lastname</h3>
            <img src="./images/toons/girl-toon.png" alt="cartoon girl" style={{ height: '500px' }} />
          </StaffDetails>
        </SingleGallery>
      </GalleryItems>
    </StyledGallerySection>
    <hr />
  </>

};