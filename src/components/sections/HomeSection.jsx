
import './../styles/sections/Carousel/carousel.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/sections/Home/accordion.css";

import sleepingArea from "../../prod_images/HOME PAGE/Carousal/Sleeping area.png";
import classes from "../../prod_images/HOME PAGE/Carousal/modern classes.png";
import sittingArea from "../../prod_images/HOME PAGE/Carousal/sitting area.png";
import skatingCourt from "../../prod_images/HOME PAGE/Carousal/skating court.png";
import slider from "../../prod_images/HOME PAGE/Carousal/slider.png";
import swimmingArea from "../../prod_images/HOME PAGE/Carousal/swimming pool.png";


//Facilities and what we offer
import Art from "../../prod_images/FACILITIES & WHAT WE OFFER/Art & Craft/art.png";
import Castle from "../../prod_images/FACILITIES & WHAT WE OFFER/Breaktime/castle.png";
import Breaktime from "../../prod_images/FACILITIES & WHAT WE OFFER/Breaktime/breaktime.png";
import Skating from "../../prod_images/FACILITIES & WHAT WE OFFER/Skating/skating3.png";
// import Swing from "../../prod_images/FACILITIES & WHAT WE OFFER/Swing Area/swing.png";


import {

  FacilityDescription,
  FacilityImageContainer,
  InfoButton,
  SingleFacility,
  SlantCard,
  StyledFacilitiesSection,
  Tags,
} from "../styles/sections/HomeSection.styled";
import {
  HomeContainer
} from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  StyledHomeBackground
} from "../styles/HomeBackground.styled";
import { BsSliders2, BsSunglasses } from "react-icons/bs";
import "../styles/sections/Home/CustomCards.css";
import { Container } from '../styles/common/Container.styled';

export const HomeSection = () => {
  let settings = {
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
    { id: 1, url: sleepingArea, title: 'sitting area' },
    { id: 2, url: classes, title: 'sleeping area' },
    { id: 3, url: sittingArea, title: 'modern classes' },
    { id: 4, url: slider, title: 'slider' },
    { id: 1, url: swimmingArea, title: 'swimming pool' },
    { id: 2, url: skatingCourt , title: 'skating court' },
  
  ];


  return <>
    <StyledHomeBackground>
      <div className="carousel">
        <div className="slider-container">
          <h2 className="animated-heading text-uppercase moveTop" style={{color:'white'}}>
            Olivia's Nest 
          </h2>
          <h2 className="animated-heading text-uppercase" style={{color:'white',fontSize:'40px'}}>
            International Daycare & PreSchool
          </h2>
          <h1 className="animated-heading h1_size" style={{color:'white'}}>
            unlocking children's exploration of science and birth of art.
          </h1>
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
    <Container>
    <StyledFacilitiesSection style={{marginTop:'10rem'}}>
    <SingleFacility>
                        <FacilityImageContainer>
                            <img src={Castle} alt={'olivias nest'}/>
                            <SlantCard />
                        </FacilityImageContainer>
                        <FacilityDescription>
                        <h1 style={{fontWeight:'700'}}>Olivia's Nest International <hr /> </h1>
                            <Tags>
                               <InfoButton href="/AboutUs">About Us </InfoButton>
                               <InfoButton href="/ContactUs"> Contact Us </InfoButton>
                            </Tags>
                            <p> Welcome to Olivia's Nest where we offer small class sizes, balanced teacher-learner ratios, 
                              a fun environment and learning through play. 
                              luxury preschool and daycare in kileleshwa/lavington. 25 Othaya Road, Nairobi, Kenya ... 
                              At Olivia's Nest our emphasis is to boost our little children's ability ...
                              </p>
                        </FacilityDescription>
                    </SingleFacility>
    </StyledFacilitiesSection>
    </Container>

<Container>
    <StyledFacilitiesSection>
    <div class="container_accord">
      <SectionHeading>
        <h1>Our Principles</h1>
      </SectionHeading>
    <div class="faq-drawer_accord">
      <input class="faq-drawer__trigger_accord" id="faq-drawer_accord" type="checkbox" />
      <label class="faq-drawer__title_accord" for="faq-drawer_accord">MISSION</label>
      <div class="faq-drawer__content-wrapper_accord">
        <div class="faq-drawer__content_accord">
          <p>
          Unlocking children's exploration of science and birth of art.
          </p>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer_accord">
      <input class="faq-drawer__trigger_accord" id="faq-drawer-2_accord" type="checkbox" />
      <label class="faq-drawer__title_accord" for="faq-drawer-2_accord">CORE VALUES</label>
      <div class="faq-drawer__content-wrapper_accord">
        <div class="faq-drawer__content_accord">
          <p>We uphold core values of kindness, curiosity, and growth, 
          fostering an environment where every child feels valued and inspired to explore their potential.</p>
        </div>
      </div>
    </div>
    
    <div class="faq-drawer_accord">
      <input class="faq-drawer__trigger_accord" id="faq-drawer-3_accord" type="checkbox" />
      <label class="faq-drawer__title_accord" for="faq-drawer-3_accord">OUR PHILOSOPHY</label>
      <div class="faq-drawer__content-wrapper_accord">
        <div class="faq-drawer__content_accord">
          <p>We believe in fostering creativity, curiosity, and compassion in a nurturing environment, empowering each child to explore and grow.</p>
        </div>
      </div>
    </div>
  </div>
    </StyledFacilitiesSection>
    </Container>

    <HomeContainer style={{marginBottom:'-5rem'}}>
      <SectionHeading>
        <h1>Facilities & What we offer</h1>
        <h3> <BsSunglasses /> sneaky link <BsSunglasses /> </h3>
      </SectionHeading>

      <section className="hero-section">
  <div className="card-grid">
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: `url(${Castle})` }}></div>
      <div className="card__content">
        <p className="card__category">Breaking</p>
        <h3 className="card__heading">Bouncy castle</h3>
      </div>
    </a>
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: `url(${Skating})`}}></div>
      <div className="card__content">
        <p className="card__category">Co-curricular</p>
        <h3 className="card__heading">Skating</h3>
      </div>
    </a>
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: `url(${Breaktime})`}}></div>
      <div className="card__content">
        <p className="card__category">Coaching</p>
        <h3 className="card__heading">Cycling</h3>
      </div>
    </a>

    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: `url(${Art})`}}></div>
      <div className="card__content">
        <p className="card__category">Art & Modelling</p>
        <h3 className="card__heading">modelling classes</h3>
      </div>
    </a>
  </div>
</section>
    </HomeContainer>
    <hr />
  </>

};