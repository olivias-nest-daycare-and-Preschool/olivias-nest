import React from 'react'
import "../../components/styles/sections/News/News.css";
import { SectionHeading } from '../styles/common/SectionHeading.styled';

import One from "../../Images/homeImages/1.png";
import Two from "../../Images/homeImages/2.png";
import Three from "../../Images/homeImages/3.png";
import Four from "../../Images/homeImages/4.png";
import Five from "../../Images/homeImages/5.png";
import Six from "../../Images/homeImages/6.png";
import Eight from "../../Images/homeImages/8.png";
import Nine from "../../Images/homeImages/9.png";
import { Container } from '../styles/common/Container.styled';
import { 
  FacilityDescription, 
  FacilityImageContainer, 
  SingleFacility, 
  SlantCard, 
  StyledFacilitiesSection, 
  Tags } from '../styles/sections/HomeSection.styled';
import Admissions from "../../Images/news/Admissions.jpg";
import WhatWeOffer from "../../Images/news/What-we-offer.jpg";



const News = () => {
  return (
    <>
    <Container>
    <SectionHeading style={{marginTop:'15rem'}}>  
        <h1>News</h1>
        <p>Stay in the know with our news board</p>
      </SectionHeading>
    </Container>
  <Container style={{marginTop:'-10rem'}}>
    <StyledFacilitiesSection>
    <SingleFacility>
                        <FacilityImageContainer>
                            <img src={Admissions} alt={'olivias nest'}/>
                            <SlantCard />
                        </FacilityImageContainer>
                        <FacilityDescription>
                        <h1 style={{fontWeight:'700'}}>Admissions and School Tour<hr /></h1>
                            <Tags>
                              <span style={{color:'white'}}>in-take</span>
                              <span style={{color:'white'}}>child-care</span>
                              <span style={{color:'white'}}>edu-care</span>
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
    <SingleFacility>
                        <FacilityImageContainer>
                            <img src={WhatWeOffer} alt={'olivias nest'}/>
                            <SlantCard />
                        </FacilityImageContainer>
                        <FacilityDescription>
                        <h1 style={{fontWeight:'700'}}>Admissions and School Tour<hr /> </h1>
                            <Tags>
                              <span style={{color:'white'}}>olivias nest</span>
                              <span style={{color:'white'}}>olivias nest</span>
                              <span style={{color:'white'}}>olivias nest</span>
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

      <div className="wrapper">
  <SectionHeading style={{paddingTop:'2rem'}}>
    <h1>School Events</h1>
  </SectionHeading>
  <div className="cols">

    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: `url(${One})` }}>
          <div className="inner">
            <p>Class rooms with comfy furniture</p>
            <span>Furniture</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              We have amazing furniture which are well suited for our children.
              They are are puzzled together to power group discussions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: `url(${Four})` }}>
          <div className="inner">
            <p>Location and security</p>
            <span>Security</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>Our premises are secured well mannered. Our security team is doing an 
              amazing job. They also play a crucial role in ushering in visitors. </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={{ backgroundImage: `url(${Eight})`}}>
          <div className="inner">
            <p>Strizzes</p>
            <span>Lorem ipsum</span>
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
        <div className="front" style={{ backgroundImage: `url(${Nine})`}}>
          <div className="inner">
            <p>Clossyo</p>
            <span>Lorem ipsum</span>
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
        <div className="front" style={{ backgroundImage: `url(${Five})` }}>
          <div className="inner">
            <p>Clossyo</p>
            <span>Lorem ipsum</span>
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
        <div className="front" style={{ backgroundImage: `url(${Three})` }}>
          <div className="inner">
            <p>Clossyo</p>
            <span>Lorem ipsum</span>
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
        <div className="front" style={{ backgroundImage: `url(${Six})` }}>
          <div className="inner">
            <p>Clossyo</p>
            <span>Lorem ipsum</span>
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
        <div className="front" style={{ backgroundImage: `url(${Two})`}}>
          <div className="inner">
            <p>Clossyo</p>
            <span>Lorem ipsum</span>
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
    <div></div>
    </>
    
  )
}

export default News




  
  
 
  

