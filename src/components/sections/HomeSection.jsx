
import './../styles/sections/Carousel/carousel.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Art from "../../Images/homeImages/art.jpg";
import Beddings from "../../Images/homeImages/beddings.jpg";
import Birthday from "../../Images/homeImages/birthday.jpg";
import Gate1 from "../../Images/homeImages/gate1.jpg";
import Stretching from "../../Images/homeImages/stretching.jpg";
import Study_2 from "../../Images/homeImages/study_2.jpg";
import Study_rooms from "../../Images/homeImages/study_rooms.jpg";
import Van from "../../Images/homeImages/van.jpg";
import Teachers from "../../Images/homeImages/teachers.jpg";
import Wall2 from "../../Images/homeImages/wall2.jpg";
import Toys from "../../Images/homeImages/toy_room.jpg";
import {
  Bait2Section,
  BlockQuote,
  Cite,
  FeatureContent,
  FeatureDescription,
  FeatureImage,
  FeatureItem,
  FeatureTitle,
} from "../styles/sections/HomeSection.styled";
import {
  HomeContainer,
} from "../styles/common/HomeConatiner";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  StyledHomeBackground
} from "../styles/HomeBackground.styled";
import { BsSunglasses } from "react-icons/bs";
import "../styles/sections/Home/CustomCards.css"
import "../styles/sections/Home/Extra.css"
import { Container } from '../styles/common/Container.styled';

export const HomeSection = () => {
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
    { id: 1, url: Art, title: 'art' },
    { id: 2, url: Beddings, title: 'beddings' },
    { id: 3, url: Birthday, title: 'birthday' },
    { id: 4, url: Gate1, title: 'gate1' },
    { id: 1, url: Stretching, title: 'stretching' },
    { id: 2, url: Study_2, title: 'stud2_2' },
    { id: 3, url: Study_rooms, title: 'study_rooms' },
    { id: 4, url: Van, title: 'van' },
    { id: 5, url: Teachers, title: 'teachers' },
    { id: 6, url: Wall2, title: 'our premises' },
    { id: 7, url: Toys, title: 'Toys' },
  ];

  return <>
    <StyledHomeBackground>
      <div className="carousel">

        <div className="slider-container">
          <h2 className="animated-heading">
            <span style={{ color: '#FF5733' }}>O</span>
            <span style={{ color: '#C70039' }}>l</span>
            <span style={{ color: '#FF5733' }}>i</span>
            <span style={{ color: '#2C7873' }}>v</span>
            <span style={{ color: '#9BC53D' }}>i</span>
            <span style={{ color: '#3F88C5' }}>a</span>'s&nbsp;
            <span style={{ color: '#2C7873' }}>N</span>
            <span style={{ color: '#6FB98F' }}>e</span>
            <span style={{ color: '#9BC53D' }}>s</span>
            <span style={{ color: '#FF5733' }}>t</span>.
          </h2>
          <h2 className="animated-heading">
            <span style={{ color: '#FFC300' }}>I</span>
            <span style={{ color: '#FF5733' }}>n</span>
            <span style={{ color: '#C70039' }}>t</span>
            <span style={{ color: '#FF5733' }}>e</span>
            <span style={{ color: '#FF5733' }}>r</span>
            <span style={{ color: '#FF5733' }}>n</span>
            <span style={{ color: '#3F88C5' }}>a</span>
            <span style={{ color: '#2C7873' }}>t</span>
            <span style={{ color: '#6FB98F' }}>i</span>
            <span style={{ color: '#9BC53D' }}>o</span>
            <span style={{ color: '#FF5733' }}>n</span>
            <span style={{ color: '#FFC300' }}>a</span>
            <span style={{ color: '#FF5733' }}>l</span>&nbsp;
            <span style={{ color: '#C70039' }}>D</span>
            <span style={{ color: '#900C3F' }}>a</span>
            <span style={{ color: '#FF5733' }}>y</span>
            <span style={{ color: '#FF5733' }}>c</span>
            <span style={{ color: '#3F88C5' }}>a</span>
            <span style={{ color: '#2C7873' }}>r</span>
            <span style={{ color: '#6FB98F' }}>e</span>&nbsp;
            <span style={{ color: '#9BC53D' }}>&</span>&nbsp;
            <span style={{ color: '#FF5733' }}>P</span>
            <span style={{ color: '#FFC300' }}>r</span>
            <span style={{ color: '#FF5733' }}>e</span>
            <span style={{ color: '#C70039' }}>s</span>
            <span style={{ color: '#900C3F' }}>c</span>
            <span style={{ color: '#FF5733' }}>h</span>
            <span style={{ color: '#FF5733' }}>o</span>
            <span style={{ color: '#3F88C5' }}>o</span>
            <span style={{ color: '#2C7873' }}>l</span>
          </h2>
          <h1 className="animated-heading">
            <span style={{ color: '#FF5733' }}>a</span>&nbsp;
            <span style={{ color: '#FFC300' }}>p</span>
            <span style={{ color: '#FF5733' }}>l</span>
            <span style={{ color: '#C70039' }}>a</span>
            <span style={{ color: '#FF5733' }}>c</span>
            <span style={{ color: '#FF5733' }}>e</span>&nbsp;
            <span style={{ color: '#FF5733' }}>w</span>
            <span style={{ color: '#3F88C5' }}>h</span>
            <span style={{ color: '#2C7873' }}>e</span>
            <span style={{ color: '#6FB98F' }}>r</span>
            <span style={{ color: '#9BC53D' }}>e</span>&nbsp;
            <span style={{ color: '#FF5733' }}>l</span>
            <span style={{ color: '#FFC300' }}>o</span>
            <span style={{ color: '#FF5733' }}>v</span>
            <span style={{ color: '#C70039' }}>e</span>&nbsp;
            <span style={{ color: '#FF5733' }}>i</span>
            <span style={{ color: '#FF5733' }}>s</span>&nbsp;
            <span style={{ color: '#FF5733' }}>s</span>
            <span style={{ color: '#3F88C5' }}>h</span>
            <span style={{ color: '#2C7873' }}>o</span>
            <span style={{ color: '#6FB98F' }}>w</span>
            <span style={{ color: '#9BC53D' }}>n</span>&nbsp;
            <span style={{ color: '#FF5733' }}>d</span>
            <span style={{ color: '#FFC300' }}>a</span>
            <span style={{ color: '#FF5733' }}>i</span>
            <span style={{ color: '#C70039' }}>l</span>
            <span style={{ color: '#FF5733' }}>y</span>
            <span style={{ color: '#FF5733' }}>.</span>
            <span style={{ color: '#FFC300' }}>.</span>
            <span style={{ color: '#2C7873' }}>.</span>
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

    {/* <HomeContainer> */}
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
    {/* </HomeContainer> */}

    

   

    <HomeContainer>
      <div className="wrapper">
  <SectionHeading style={{paddingTop:'2rem'}}>
    <h1>Our Principles</h1>
  </SectionHeading>
  <div className="cols">
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}>
          <div className="inner">
            <p>Our philosophy</p>
            <span>Philosophy</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>We believe in fostering creativity, curiosity, and compassion in a nurturing environment, empowering each child to explore and grow.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}>
          <div className="inner">
            <p>Core Values</p>
            <span>values</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>We uphold core values of kindness, curiosity, and growth, 
              fostering an environment where every child feels valued and inspired to explore their potential.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}>
          <div className="inner">
            <p>View on education</p>
            <span>education</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}>
          <div className="inner">
            <p>Mission</p>
            <span>Pursuit</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
    </HomeContainer>

    <HomeContainer>
      <SectionHeading style={{marginTop:'4rem'}}>
        <h1>Facilities & What we offer</h1>
        <h3> <BsSunglasses /> sneaky link <BsSunglasses /> </h3>
      </SectionHeading>

      <section className="hero-section">
  <div className="card-grid">
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: "url(./images/beds.jpg)" }}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: "url(./images/beds.jpg)" }}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: "url(./images/board_games.jpg)" }}></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="/ContactUs">
      <div className="card__background" style={{ backgroundImage: "url(./images/basket_ball.jpg)" }}></div>
      <div className="card__content">
        <p className="card__category">Basket ball</p>
        <h3 className="card__heading">Basket ball court</h3>
      </div>
    </a>
  </div>
</section>
    </HomeContainer>

    <Container>
    <hr/>
    </Container>

    <HomeContainer>

      <div className="card_wrap_extra">
      <div class="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}} src="./images/beds.jpg" class="card__photo" alt="Good food" />
  <div class="card__content_extra">
    <h2 class="card__title_extra">Swimming pool</h2>
    <p class="card__description_extra">We have swimming lessons</p>
  </div>
</div>
<div class="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}} src= "./images/board_games.jpg" class="card__photo" alt="Good food" />
  <div class="card__content_extra">
    <h2 class="card__title_extra">Skating</h2>
    <p class="card__description_extra">We have skating</p>
  </div>
</div>
<div class="card_extra">
  <img style={{height:'100%',width:'100%',objectFit:'cover'}} src="./images/basket_ball.jpg" class="card__photo" alt="Good food" />
  <div class="card__content_extra">
    <h2 class="card__title_extra">Soccer</h2>
    <p class="card__description_extra">We offer soccer trainging and tournaments</p>
  </div>
</div>
      </div>
    </HomeContainer>
    <hr />
  </>

};