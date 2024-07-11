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



const News = () => {
  return (
    <>
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




  
  
 
  

